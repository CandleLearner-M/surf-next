"use client";

import Card from "@/components/Card/Card";

import { Article } from "@/types/types";
import styles from "./FeaturedBlogs.module.scss";
import { useState } from "react";

interface FeaturedBlogsProps {
  articles: Article[];
  headline: string;
}

function FeaturedBlogs({ articles, headline }: FeaturedBlogsProps) {
  const [itemNumber, setItemNumber] = useState(3);

  const onShowMore = function () {
    if (itemNumber + 3 > articles.length) return setItemNumber(articles.length);
    setItemNumber((itemNumber) => itemNumber + 3);
  };

  return (
    <section className={styles.blogs}>
      <h3>{headline || "Our featured articles"}</h3>
      <div>
        {articles.slice(0, itemNumber).map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </div>

      {itemNumber < articles.length && (
        <button className="btn btn--medium btn--turquoise" onClick={onShowMore}>
          See More
        </button>
      )}
    </section>
  );
}
export default FeaturedBlogs;
