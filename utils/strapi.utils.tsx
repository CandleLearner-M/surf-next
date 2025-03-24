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
  const blogs = rawData.map((blog) => ({
    ...blog,
    image: BASE_URL + blog.image.url,
  }));

  blogs.sort((a, z) => new Date(z.createdAt) - new Date(a.createdAt));
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
