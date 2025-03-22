import FeaturedBlog from "@/components/featuredBlog/FeaturedBlog";
import { fetchDataFromStrapi, processData } from "@/utils/strapi.utils";

import styles from "./page.module.scss";

async function Blog() {
  const data = await fetchDataFromStrapi("featured-post?populate=*");
  const featuredBlog = processData(data);

  return (
    <main className={styles.blog}>
      <FeaturedBlog data={featuredBlog} />
    </main>
  );
}
export default Blog;
