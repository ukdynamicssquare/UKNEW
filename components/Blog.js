import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
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
    return <div className="col-lg-6 align-self-center" style={{color:"var(--color-red)",fontWeight:'600'}}>Failed to load blog posts. Please try again later.</div>;
  }

  return (
    <div className="col-lg-6">
      <div className="blogs-extra-title">
        <h3>Articles</h3>
      </div>
      {blogPosts.slice(0, 3).map((post, index) => (
        <div className="blogs-extra-left" key={index}>
          <div className="blogs-extra-left-img">
            <Link href={`/blog/${post.title_slug}`}>
              <a>
                <Image src={post.image} alt={post.title} width={180} height={100} />
              </a>
            </Link>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <Link href={`/blog/${post.title_slug}`}>
                <a>{post.title}</a>
              </Link>
            </h4>
            <span>{post.publish_date}</span>
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
            font-size: 14px;
          }
          .bby-btn:hover {
            background: #bb2b36 !important;
          }
        `}
      </style>
    </div>
  );
};

export default Blog;
