import axios from "axios";

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

  return infoBlocksRaw.map((infoBlock) => ({
    ...infoBlock,
    imageSrc: BASE_URL + infoBlock.image.url,
  }));
}
