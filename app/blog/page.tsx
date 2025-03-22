import FeaturedBlog from "@/components/featuredBlog/FeaturedBlog";
import { fetchDataFromStrapi, processData } from "@/utils/strapi.utils";

async function Blog() {
  const data = await fetchDataFromStrapi("featured-post?populate=*");
  const featuredBlog = processData(data);

  return (
    <main>
      <FeaturedBlog data={featuredBlog} />
    </main>
  );
}
export default Blog;
