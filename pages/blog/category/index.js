import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import BlogSubscriberForm from "../../../components/BlogSubscriberForm";
import TimerModal from "../../../components/TimerModal";

export async function getStaticProps({ params }) {
  const slug = params?.slug || "";

  try {
    const [blogsRes, categoryRes] = await Promise.all([
      fetch(`${process.env.BACKEND_URL}/api/blog/category/${slug}`),
      fetch(`${process.env.BACKEND_URL}/api/blog/category`),
    ]);

    if (!blogsRes.ok || !categoryRes.ok) {
      throw new Error("Failed to fetch data from backend");
    }

    const [blogs, categoryblogs] = await Promise.all([
      blogsRes.json(),
      categoryRes.json(),
    ]);

    return {
      props: {
        blogs,
        categoryblogs,
      },
      revalidate: 60, // ISR
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error.message);

    return {
      props: {
        blogs: [],
        categoryblogs: [],
        error: error.message || "Failed to load data",
      },
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
  return (
    <div>
      <Head>
        <title>Blog Category</title>
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
                    <li className="breadcrumb-item active"></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blogs-ex-side-cate blogs-ex-side-cate-home">
                <h3>Explore by Category</h3>
                <ul>
                  {categoryblogs &&
                    categoryblogs.map((cateitem, i) => (
                      <li>
    
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
           
          </div>
        </div>
      </div>

     <TimerModal />
    </div>
  );
}

export default CategoryBlogs;
