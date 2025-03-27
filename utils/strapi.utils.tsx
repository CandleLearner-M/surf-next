import { Article } from "@/types/types";
import axios from "axios";
import Link from "next/link";

const BASE_URL = process.env.STRAPI_URL || "http://localhost:1337";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await axios.get(url);

    return response.data.data;
  } catch {
    throw new Error("Could not fetch the data from the url");
  }
}

export async function postDataToStrapi(route, data) {
  const url = `${BASE_URL}/api/${route}`;

  try {
   return axios.post(url, data);
  } catch(err) {
    console.log(err);
    throw err;
  }
}

export function processInfoBlock(rawData) {
  const infoBlocksRaw = rawData.info_blocks;

  return infoBlocksRaw.map((infoBlock) => processData(infoBlock));
}

export function processData(infoBlock) {
  return {
    ...infoBlock,
    imageSrc: BASE_URL + infoBlock.image.url,
    buttonCPN: createInfoblockButton(infoBlock.button),
  };
}

export function processBlogPost(rawData): Article[] {
  const blogs = rawData.map((blog) => {
    const processedBlog = {
      ...blog,
      image: blog.image ? BASE_URL + blog.image.url : null,
    };

    if (blog.articleContent && Array.isArray(blog.articleContent)) {
      processedBlog.articleContent = blog.articleContent.map((component) => {
        const processedComponent = { ...component };

        switch (component.__component) {
          case "blog-article.paragraph-with-image":
            if (component.image) {
              processedComponent.image = BASE_URL + component.image.url;
            }
            break;

          case "blog-article.landscape-image":
            if (component.image) {
              processedComponent.image = BASE_URL + component.image.url;
            }
            break;
        }

        return processedComponent;
      });
    }

    return processedBlog;
  });

  blogs.sort((a, z) => new Date(z.createdAt) - new Date(a.createdAt));
  return blogs;
}

export async function fetchBlogArticles() {
  const data = await fetchDataFromStrapi(
    "blog-articles?populate[image]=true&populate[articleContent][on][blog-article.paragraph-headline][fields][0]=headline&populate[articleContent][on][blog-article.paragraph-headline][fields][1]=slug&populate[articleContent][on][blog-article.paragraph-with-image][fields][0]=paragraph&populate[articleContent][on][blog-article.paragraph-with-image][fields][1]=isLandscape&populate[articleContent][on][blog-article.paragraph-with-image][fields][2]=imageShowsRight&populate[articleContent][on][blog-article.paragraph-with-image][populate][image]=true&populate[articleContent][on][blog-article.landscape-image][fields][0]=imageCaption&populate[articleContent][on][blog-article.landscape-image][populate][image]=true&populate[articleContent][on][blog-article.paragraph][fields][0]=paragraph"
  );
  const blogs = processBlogPost(data.data || data);
  return blogs;
}

export function createInfoblockButton(buttonData) {
  if (!buttonData) return null;
  return (
    <Link
      href={buttonData.slug}
      className={`btn btn--medium btn--${buttonData.color}`}
    >
      {buttonData.text}
    </Link>
  );
}

export function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}
