import { fetchBlogArticles, formatDate } from "@/utils/strapi.utils";
import Image from "next/image";

import styles from "./HomeBlogs.module.scss";
import Link from "next/link";

async function HomeBlogs() {
  const blogs = await fetchBlogArticles();

  const highlightArticle = blogs.find((article) => article.isFeaturedArticle)!;
  const otherBlogs = blogs
    .filter((article) => !article.isFeaturedArticle)
    .slice(0, 3);

  return (
    <section className={styles.homeblog}>
      <h2>The Blog.</h2>
      <div>
        {[highlightArticle, ...otherBlogs].map((blog, idx) => (
          <Link
            href={"/blog/" + blog.slug}
            key={blog.id}
            className={styles[`blog${idx + 1}`]}
          >
            <Image
              src={blog.image}
              alt={blog.headline}
              height={361}
              width={809}
            />
            <h4>{blog.headline}</h4>
            <p>{formatDate(blog.createdAt)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default HomeBlogs;
