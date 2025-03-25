import ArticleComponent from "@/components/Article/ArticleComponent/ArticleComponent";
import ArticleIntro from "@/components/Article/ArticleIntro/ArticleIntro";
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
        {blog.articleContent.map((component) => (
          <ArticleComponent component={component} key={component.id} />
        ))}
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
