import React, { useState, useEffect } from "react";

const BlogSearch = () => {
  const [query, setQuery] = useState("");
  const [allResults, setAllResults] = useState([]);
  const [visibleResults, setVisibleResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadCount, setLoadCount] = useState(10);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim().length > 2) {
        fetchResults(query);
      } else {
        setAllResults([]);
        setVisibleResults([]);
        setLoadCount(10);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchResults = async (searchTerm) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://blognew.dynamicssquare.co.uk/api/blogsearch/${encodeURIComponent(searchTerm)}`
      );
      const data = await res.json();
      const results = data || [];
      setAllResults(results);
      setVisibleResults(results.slice(0, 12));
      setLoadCount(12);
    } catch (err) {
      console.error("Search error:", err);
      setAllResults([]);
      setVisibleResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextCount = loadCount + 12;
    setVisibleResults(allResults.slice(0, nextCount));
    setLoadCount(nextCount);
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
        <button className="btn btn-primary" onClick={() => fetchResults(query)}>
          Search
        </button>
      </div>

      {query.length > 2 && (
        <div className="my-searc">
          <div className="searc-result">
            {loading && <div>Loading...</div>}

            {!loading && visibleResults.length > 0 && (
              <div className="row">
                {visibleResults.map((blog, index) => (
                  <div className="col-md-3 col-lg-3 mb-4" key={index}>
                    <div className="card h-100 shadow-sm">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{blog.title}</h5>
                        <a
                          href={`/blog/${blog.title_slug}`}
                          className="btn btn-outline-primary mt-auto"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && visibleResults.length === 0 && (
              <p>No blog found for "{query}"</p>
            )}

            {!loading &&
              visibleResults.length < allResults.length &&
              visibleResults.length > 0 && (
                <div className="text-center mt-3">
                  <button className="btn btn-secondary" onClick={handleLoadMore}>
                    Load More
                  </button>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSearch;
