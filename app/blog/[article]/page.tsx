import ArticleIntro from "@/components/Article/ArticleIntro/ArticleIntro";
import Headline from "@/components/Article/Headline/Headline";
import Paragraph from "@/components/Article/Paragraph/Paragraph";
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
      {blog.articleContent.map((content) => {
        switch (content.__component) {
          case "blog-article.paragraph-headline":
            return (
              <Headline>
                <h3>{content.headline}</h3>
              </Headline>
            );

          case "blog-article.paragraph":
            <Paragraph paragraph={content.paragraph} />;
        
          case "blog-article.landscape-image": 
            
        
          }
      })}
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
