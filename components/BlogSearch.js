import React, { useState, useEffect } from "react";

const BlogSearch = () => {
  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length > 2) {
        handleSearch();
      } else {
        setBlogs([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

 const handleSearch = async () => {
  setLoading(true);
  try {
    const res = await fetch(
      `https://blognew.dynamicssquare.co.uk/api/blogsearch/?search=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    console.log("API response:", data); // just for debug
    setBlogs(data.data || []); // ✅ FIXED HERE
  } catch (error) {
    console.error("Search failed:", error);
    setBlogs([]);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container my-4">
      <h4>Search Blogs</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search blog..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <div>Loading...</div>}

      {blogs.length > 0 && (
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 mb-3" key={blog.title_slug}>
              <div className="card h-100">
                <img src={blog.image} className="card-img-top" alt={blog.title} />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <a
                    href={`/blog/${blog.title_slug}`}
                    className="btn btn-outline-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && query.length > 2 && blogs.length === 0 && (
        <p>No blog found for "{query}"</p>
      )}
    </div>
  );
};

export default BlogSearch;
