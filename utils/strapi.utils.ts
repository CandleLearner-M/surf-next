import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337/api";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/${route}`;

  try {
    const response = await axios.get(url);

    return response.data.data;
  } catch {
    throw new Error("Could not fetch the data from the url");
  }
}
