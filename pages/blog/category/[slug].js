import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
// import BlogSubscriberForm from "../../../components/BlogSubscriberForm";
import { useRouter } from 'next/router';
import Pagination from "../../../components/Pagination";
import { paginate } from "../../../helpers/paginate";
import { useState } from "react";
import TimerModal from "../../../components/TimerModal";
export async function getServerSideProps(context) {
  const slug = context.query.slug;

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/blog/category/${slug}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs for category: ${slug}`);
    }

    const blogs = await res.json();
    const categorybloglength = blogs.length;

    if (categorybloglength >= 1) {
      const categoryRes = await fetch(`${process.env.BACKEND_URL}/api/blog/category`);

      if (!categoryRes.ok) {
        throw new Error("Failed to fetch category list");
      }

      const categoryblogs = await categoryRes.json();

      return {
        props: {
          blogs,
          categoryblogs,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error("Error in getServerSideProps:", error.message);
    return {
      notFound: true, // fallback to 404 page
    };
  }
}
const categoryColors = [
  '#01808a',
  '#cd9e1b',
  '#3e4f8a',
  '#000000',
  '#b52c36',
  '#273266',
];

function CategoryBlogs({ blogs, categoryblogs }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(blogs, currentPage, pageSize);
  return (
    <div>
      <Head>
        <title>Blog Category List</title>
      </Head>

      <div className="blogs-extra-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blogs-breadcromb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/blog/">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/blog/category/">
                        <a>Category</a>
                      </Link>
                    </li>

                    <li className="breadcrumb-item active">{blogs[0]['category']}</li>

                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="blogs-ex-side-cate blogs-ex-side-cate-inn">
                <h3>Explore by Topic</h3>
                <ul>
                  {categoryblogs &&
                    categoryblogs.map((cateitem, i) => (
                      <li className={router.query.slug == `${cateitem.category_slug}` ? "active" : "Hello"}>

                        <a style={{
                          textDecoration: 'none',
                          color: categoryColors[i % categoryColors.length],
                          border: `1px solid ${categoryColors[i % categoryColors.length]}`,
                        }} href={`/blog/category/${cateitem.category_slug}`}>{cateitem.category_name}</a>

                      </li>
                    ))}
                </ul>


                    


              </div>
            </div>
            <div className="col-lg-9">
              {
                paginatedPosts.map((item, i) => (
                  <div className="blogs-lates blogs-lates-rept">
                    <h3>

                      <a href={`/blog/${item.title_slug}`}>{item.title}</a>

                    </h3>
                    <div className="blogs-info-list">
                      <span className="user">
                        <a href={`/blog/author/${item.author.split(" ").join("-")}`}>
                          <i className="bi bi-person-circle"></i>
                          {item.author}
                        </a>
                      </span>
                      <span className="date">
                        <a>
                          <i className="bi bi-calendar"></i>
                          {item.publish_date}
                        </a>
                      </span>
                      <span className="time">
                        <a>
                          <i className="bi bi-clock"></i>
                          {item.read_time}
                        </a>
                      </span>
                      <span className="cate">
                        <a href={`/blog/category/${item.category_slug}`}>
                          <i className="bi bi-app"></i> {item.category}
                        </a>
                      </span>
                    </div>
                    <div className="b-card-info">
                      <p>{item.short_description}</p>
                      <div className="page-link-read">
                        <a href={`/blog/${item.title_slug}`}>
                          Read More <span>{">"}</span>

                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              <Pagination
                items={blogs.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
              />
              

            </div>
          </div>
        </div>
      </div>

      <div className="bootom-blogs-sub">
        <div className="container">
          <div className="row justify-content-center row-bg">
            <div className="col-lg-6">
              {/* <div className="form-subscriber-card">
                <div className="sub-head">
                  <h3>Join our newsletter</h3>
                  <p>
                    Engaging stories and exclusive data, designed for our best
                    customers. We only send one issue each month, so we try to
                    make it useful.
                  </p>
                </div>
                <BlogSubscriberForm />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <TimerModal />
    </div>
  );
}

export default CategoryBlogs;
