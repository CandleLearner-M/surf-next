"use client";

import { Article } from "@/types/types";
import styles from "./ArticleIntro.module.scss";
import Image from "next/image";
import { formatDate } from "@/utils/strapi.utils";
import Markdown from "react-markdown";
import Link from "next/link";

function ArticleIntro({ article }: { article: Article }) {
  const {
    headline,
    image,
    author,
    excerpt,
    createdAt,
    textColor,
    articleContent,
  } = article;

  console.log(articleContent);

  return (
    <section className={styles.articleintro}>
      <Image src={image} alt={headline} width={1920} height={1080} />
      <div
        className={`${styles.articleintro__title} ${
          textColor === "black" ? styles.black : styles.white
        }`}
      >
        <h1>{headline}</h1>
        <p>{formatDate(createdAt)}</p>
        <p>{author}</p>
      </div>

      <div className={styles.articleintro__links}>
        <div>
          <h3>In this blog</h3>
          <Markdown>{excerpt}</Markdown>
        </div>

        <ul>
          {articleContent
            .filter(
              (content) =>
                content.__component === "blog-article.paragraph-headline"
            )
            .map((content, idx) => (
              <li key={content.id}>
                <Link href={`#${content.slug}`}>
                  {idx + 1}. {content.headline}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default ArticleIntro;
