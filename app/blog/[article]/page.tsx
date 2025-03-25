import ArticleIntro from "@/components/Article/ArticleIntro/ArticleIntro";
import Headline from "@/components/Article/Headline/Headline";
import LandscapeImage from "@/components/Article/LandscapeImage/LandscapeImage";
import Paragraph from "@/components/Article/Paragraph/Paragraph";
import ParagraphWithImage from "@/components/Article/ParagraphWithImage/ParagraphWithImage";
import { Article } from "@/types/types";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";

export default async function Page({
  params,
}: {
  params: { article: string };
}) {
  const blogs = await fetchBlogArticles();
  const blog = blogs.find((blog) => blog.slug === params.article);

  if (!blog) notFound();
  return (
    <main>
      <ArticleIntro article={blog} />
      <div className={styles.articleContent}>
        {blog.articleContent.map((content, idx) => {
          switch (content.__component) {
            case "blog-article.paragraph-headline":
              return (
                <Headline key={idx}>
                  <h3>{content.headline}</h3>
                </Headline>
              );

            case "blog-article.paragraph":
              return <Paragraph paragraph={content.paragraph} key={idx} />;

            case "blog-article.landscape-image":
              return <LandscapeImage image={content.image} key={idx} />;

            case "blog-article.paragraph-with-image":
              return (
                <ParagraphWithImage
                  image={content.image}
                  paragraph={content.paragraph}
                  imageShowsRight={content.imageShowsRight}
                  isLandscape={content.isLandscape}
                  key={idx}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await fetchDataFromStrapi("blog-articles");

  return articles.map((article: Article) => ({
    article: article.slug,
  }));
}

export const revalidate = 300;
