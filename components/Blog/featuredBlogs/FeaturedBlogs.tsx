import Card from "@/components/Card/Card";

import { Article } from "@/types/types";
import styles from "./FeaturedBlogs.module.scss";

interface FeaturedBlogsProps {
  articles: Article[];
}

function FeaturedBlogs({ articles }: FeaturedBlogsProps) {
  return (
    <section className={styles.blogs}>
      <h3>Our featured articles</h3>
      <div>
        {articles.map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </div>

      <button className="btn btn--medium btn--turquoise">See More</button>
    </section>
  );
}
export default FeaturedBlogs;
