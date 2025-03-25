import ArticleIntro from "@/components/Article/ArticleIntro/ArticleIntro";
import { Article } from "@/types/types";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";
import { notFound } from "next/navigation";

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
