import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../helpers/paginate";
import BlogSearch from "../../components/BlogSearch";

export async function getStaticProps() {
  const backend = process.env.BACKEND_URL;


  const urls = {
    blogs: `${backend}/api/allblog`,
    businesscentral: `${backend}/api/blog/category/Business/business-central`,
    categoryblogs: `${backend}/api/blog/category`,
    blograndomblogs: `${backend}/api/random/allblog`,
    blogtranding: `${backend}/api/blog/most/trending`,
  };

  const fetchSafeJson = async (label, url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error(`Failed to fetch [${label}] from ${url}:`, err.message);
      return [];
    }
  };

  const [blogs, businesscentral, categoryblogs, blograndomblogs, blogtranding] = await Promise.all([
    fetchSafeJson("blogs", urls.blogs),
    fetchSafeJson("businesscentral", urls.businesscentral),
    fetchSafeJson("categoryblogs", urls.categoryblogs),
    fetchSafeJson("blograndomblogs", urls.blograndomblogs),
    fetchSafeJson("blogtranding", urls.blogtranding),
  ]);

  return {
    props: {
      blogs,
      businesscentral,
      categoryblogs,
      blograndomblogs,
      blogtranding,
    },
    revalidate: 10,
  };
}

const categoryColors = [
  '#01808a',
  '#cd9e1b',
  '#3e4f8a',
  '#000000',
  '#b52c36',
  '#273266',
];


function Blogshome({ blogs, businesscentral, categoryblogs, blograndomblogs, blogtranding }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const paginatedPosts = paginate(blograndomblogs, currentPage, pageSize);

  return (
    <div>
      <Head>
        <title>Best Microsoft Dynamics 365 Blogs | Dynamics Square - Dynamics 365 Blogs</title>
        <meta name="description" content="Dynamics 365 Blogs" />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/blog/" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Microsoft Dynamics 365 Blogs | Dynamics Square - Dynamics 365 Blogs" />
        <meta property="og:description" content="Dynamics 365 Blogs" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/blog/" />
        <meta property="og:site_name" content="Best Microsoft Dynamics 365 Blogs | Dynamics Square" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Microsoft Dynamics 365 Blogs | Dynamics Square - Dynamics 365 Blogs" />
        <meta name="twitter:description" content="Dynamics 365 Blogs" />
      </Head>

      {/* Main Latest Section */}
      <BlogSearch />
      {blogs.length > 0 && (
        <div className="blogs-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="blogs-lates">
                  <div className="blog-sian"><span>Latest</span></div>
                  <h1><a href={`/blog/${blogs[0].title_slug}`}>{blogs[0].title}</a></h1>
                  <div className="blogs-info-list">
                    <span className="user">
                      <a href={`/blog/author/${blogs[0].author?.split(" ").join("-")}`}>
                        <i className="bi bi-person-circle"></i> {blogs[0].author}
                      </a>
                    </span>
                    <span className="date"><a><i className="bi bi-calendar"></i> {blogs[0].publish_date}</a></span>
                    <span className="time"><a><i className="bi bi-clock"></i> {blogs[0].read_time}</a></span>
                    <span className="cate">
                      <a href={`/blog/category/${blogs[0].category_slug}`}>
                        <i className="bi bi-app"></i> {blogs[0].category}
                      </a>
                    </span>
                  </div>
                  <div className="b-card-info">
                    <p>{blogs[0].short_description?.substring(0, 180)}...</p>
                    <div className="page-link-read">
                      <a href={`/blog/${blogs[0].title_slug}`}>Read More <span>{">"}</span></a>
                    </div>
                  </div>
                </div>
                <div className="prom-bann">
                  <a href={`/blog/${blogs[0].title_slug}`}>
                    <img src={blogs[0].image} alt={blogs[0].title} />
                  </a>
                </div>
              </div>

              {/* Business Central Side */}
              <div className="col-lg-6">
                <div className="blogs-side">
                  <div className="blog-side-head">
                    <div className="left">
                      <img src="/img/business-center-logo.svg" alt="bg-pic" />
                    </div>
                    <div className="right">
                      Dynamics 365 <br /><span>Business Central</span>
                    </div>
                  </div>
                  {businesscentral.map((item, i) => (
                    <div className="blogs-info-list blogs-info-list-side" key={`bc-${i}`}>
                      <h3><a href={`/blog/${item.title_slug}`}>{item.title}</a></h3>
                      <span className="user">
                        <a href={`/blog/author/${item.author?.split(" ").join("-")}`}>
                          <i className="bi bi-person-circle"></i> {item.author}
                        </a>
                      </span>
                      <span className="date"><a><i className="bi bi-calendar"></i> {item.publish_date}</a></span>
                      <span className="time"><a><i className="bi bi-clock"></i> {item.read_time}</a></span>
                      <span className="cate">
                        <a href={`/blog/category/${item.category_slug}`}>
                          <i className="bi bi-app"></i> {item.category}
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trending Section */}
      <div className="mid-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              {blogtranding.map((item, i) => (
                <div className="blogs-lates" key={`tr-${i}`}>
                  <div className="blog-sian"><span>Most Trending</span></div>
                  <h2><a href={`/blog/${item.title_slug}`}>{item.title}</a></h2>
                  <div className="blogs-info-list">
                    <span className="user">
                      <a href={`/blog/author/${item.author?.split(" ").join("-")}`}>
                        <i className="bi bi-person-circle"></i> {item.author}
                      </a>
                    </span>
                    <span className="date"><a><i className="bi bi-calendar"></i> {item.publish_date}</a></span>
                    <span className="time"><a><i className="bi bi-clock"></i> {item.read_time}</a></span>
                    <span className="cate">
                      <a href={`/blog/category/${item.category_slug}`}>
                        <i className="bi bi-app"></i> {item.category}
                      </a>
                    </span>
                  </div>
                  <div className="b-card-info">
                    <p>{item.short_description?.substring(0, 180)}...</p>
                    <div className="page-link-read">
                      <a href={`/blog/${item.title_slug}`}>Read More <span>{">"}</span></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <div className="prom-bann" style={{ textAlign: "center" }}>
                <a href="/schedule-a-demo/" target="_blank" style={{ marginBottom: "20px", display: "block" }}>
                  <Image src="/img/blog-side-pic-top.png" width={413} height={350} alt="schedule" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Random Blogs + Categories */}
      <div className="blogs-extra-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="blogs-ex-side-cate">
                <h3>Explore by Topic</h3>
                <ul>
                  {/* {categoryblogs.map((item, i) => (
                    <li key={`cat-${i}`}>
                      <a href={`/blog/category/${item.category_slug}`}>{item.category_name}</a>
                    </li>
                  ))} */}
                  {categoryblogs.map((item, i) => (
                    <li key={`cat-${i}`} style={{ listStyle: 'none', margin: '5px 0' }}>
                      <a
                        href={`/blog/category/${item.category_slug}`}
                        style={{
                          textDecoration: 'none',
                          color: categoryColors[i % categoryColors.length],
                          border: `1px solid ${categoryColors[i % categoryColors.length]}`,
                        }}
                      >
                        {item.category_name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              {paginatedPosts.map((item, i) => (
                <div className="blogs-lates blogs-lates-rept" key={`rnd-${i}`}>
                  <h3><a href={`/blog/${item.title_slug}`}>{item.title}</a></h3>
                  <div className="blogs-info-list">
                    <span className="user">
                      <a href={`/blog/author/${item.author?.split(" ").join("-")}`}>
                        <i className="bi bi-person-circle"></i> {item.author}
                      </a>
                    </span>
                    <span className="date"><a><i className="bi bi-calendar"></i> {item.publish_date}</a></span>
                    <span className="time"><a><i className="bi bi-clock"></i> {item.read_time}</a></span>
                    <span className="cate">
                      <a href={`/blog/category/${item.category_slug}`}>
                        <i className="bi bi-app"></i> {item.category}
                      </a>
                    </span>
                  </div>
                  <div className="b-card-info">
                    <p>{item.short_description?.substring(0, 180)}...</p>
                    <div className="page-link-read">
                      <a href={`/blog/${item.title_slug}`}>Read More <span>{">"}</span></a>
                    </div>
                  </div>
                </div>
              ))}
              <Pagination
                items={blograndomblogs.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={setCurrentPage}
                pageLimit={5} // optional
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogshome;
