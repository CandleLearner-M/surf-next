import FeaturedBlog from "@/components/Blog/featuredBlog/FeaturedBlog";
import { fetchDataFromStrapi, processData } from "@/utils/strapi.utils";

import styles from "./page.module.scss";
import Subscribe from "@/components/Blog/subscribe/Subscribe";
import FeaturedBlogs from "@/components/Blog/featuredBlogs/FeaturedBlogs";

async function Blog() {
  const data = await fetchDataFromStrapi("featured-post?populate=*");
  const featuredBlog = processData(data);

  return (
    <main className={styles.blog}>
      <FeaturedBlog data={featuredBlog} />
      <Subscribe />
      <FeaturedBlogs />
    </main>
  );
}
export default Blog;
