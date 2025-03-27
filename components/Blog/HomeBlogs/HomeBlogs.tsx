import { fetchBlogArticles, formatDate } from "@/utils/strapi.utils";
import Image from "next/image";

import styles from "./HomeBlogs.module.scss";

async function HomeBlogs() {
  const blogs = (await fetchBlogArticles()).slice(0, 4);

  return (
    <section className={styles.homeblog}>
      <h2>The Blog.</h2>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Image
              src={blog.image}
              alt={blog.headline}
              height={361}
              width={809}
            />
            <h4>{blog.headline}</h4>
            <p>{formatDate(blog.createdAt)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default HomeBlogs;
