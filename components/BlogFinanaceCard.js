import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogFinanaceCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(`${process.env.BACKEND_URL}/api/random/allblog`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error(error);
        setError(true); // Set error state
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Replace with a spinner or skeleton loader
  }

  if (error) {
    return <div className="col-lg-6 align-self-center" style={{ color: "var(--color-red)", fontWeight: '600' }}>Failed to load blog posts. Please try again later.</div>;
  }

  return (
    <>
      {blogPosts.slice(0, 3).map((post, index) => (

        <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
          <div className='card0-01 card0-02 card-044'>
            <a href={`/blog/${post.title_slug}`}>
              <Image src={post.image} alt={post.title}  width={600} height={300} />
              <h3 style={{marginTop:'15px'}}>{post.title}</h3>
              <p>A maturity model designed to strengthen people, processes, and technology.</p>
              <div className='ct--a'>
                <span>View more</span>
              </div>
            </a>
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'center' }}>
        <a className="bby-btn" href="/blog/">
          Read More Articles
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
          width:100% !important
          }
        `}
      </style>
    </>
  );
};

export default BlogFinanaceCard;
