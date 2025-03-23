"use client";

import styles from "./FeaturedBlog.module.scss";

import { Article } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface FeaturedBlogProps {
  featuredBlog: Article;
}

function FeaturedBlog({ featuredBlog }: FeaturedBlogProps) {
  console.log(featuredBlog);
  const { headline, excerpt, image, slug } = featuredBlog;

  return (
    <section className={styles.featured}>
      <div className={styles.featured__paragraph}>
        <h3>{headline}</h3>
        <Markdown>{excerpt}</Markdown>
        <button className="btn btn--medium btn--turquoise">
          <Link href={`blog/${slug}`}>Read more</Link>
        </button>
      </div>
      <Image src={image} alt="some img" height={1200} width={1900} />
    </section>
  );
}
export default FeaturedBlog;
