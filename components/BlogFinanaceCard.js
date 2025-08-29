import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogFinanaceCard = ({ categorySlug }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      if (!categorySlug) return; // prevent empty calls

      try {
        setLoading(true);

        // if categorySlug is "all", fetch all blogs
        const endpoint =
          categorySlug === "all"
            ? `${process.env.BACKEND_URL}/api/blog/category`
            : `${process.env.BACKEND_URL}/api/blog/category/${categorySlug}`;

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [categorySlug]); // refetch when slug changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="col-lg-6 align-self-center" style={{ color: "var(--color-red)", fontWeight: '600' }}>
        Failed to load blog posts. Please try again later.
      </div>
    );
  }

  return (
    <>
      {blogPosts.slice(0, 3).map((post, index) => (
        <div key={index} className='col-lg-4 col-md-4 col-sm-6 d-flex'>
          <div className='card0-01 card0-02 card-044'>
            <a href={`/blog/${post.title_slug}`}>
              <Image src={post.image} alt={post.title} width={600} height={300} />
              <h3 style={{ marginTop: '15px' }}>{post.title}</h3>
              <p>{post.excerpt || "A maturity model designed to strengthen people, processes, and technology."}</p>
              <div className='ct--a'>
                <span>View more</span>
              </div>
            </a>
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'center' }}>
        <a
          className="bby-btn"
          href={categorySlug && categorySlug !== "all" ? `/blog/category/${categorySlug}` : "/blog/"}
        >
          {categorySlug && categorySlug !== "all"
            ? `Read More Articles`
            : "Read More Articles"}
        </a>
      </div>
      <style jsx>
        {`
          .bby-btn {
            background: #494392;
            display: inline-block;
            color: #fff;
            padding: 7px 14px;
            border-radius: 5px;
            box-shadow: 1px 3px 18px #49439291;
            font-size: 16px;
            margin-top:40px
          }
          .bby-btn:hover {
            background: #bb2b36 !important;
          }
          .card0-044 img{
            width:100% !important;
          }
        `}
      </style>
    </>
  );
};

export default BlogFinanaceCard;
