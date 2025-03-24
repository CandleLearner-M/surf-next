import FeaturedBlog from "@/components/Blog/featuredBlog/FeaturedBlog";
import { fetchDataFromStrapi, processBlogPost } from "@/utils/strapi.utils";

import FeaturedBlogs from "@/components/Blog/featuredBlogs/FeaturedBlogs";
import Subscribe from "@/components/Blog/subscribe/Subscribe";
import styles from "./page.module.scss";

async function Blog() {
  const data = await fetchDataFromStrapi("blog-articles?populate=*");
  const blogs = processBlogPost(data);

  const featuredBlog = blogs.find((blog) => blog.isFeaturedArticle)!;

  const otherBlogs = blogs.filter((blog) => !blog.isFeaturedArticle);

  return (
    <main className={styles.blog}>
      <FeaturedBlog featuredBlog={featuredBlog} />
      <Subscribe />
      <FeaturedBlogs articles={otherBlogs} />
    </main>
  );
}
export default Blog;
