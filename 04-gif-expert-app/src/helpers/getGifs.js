import { API_KEY } from "../constants/apiKey";

export const getGifs = async (category) => {
  try {
    const result = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`
    );
    if (!result.ok) {
      throw new Error(`Failed to fetch: ${result.status}`);
    }

    const { data } = await result.json();
    const gifs = data.map(({ id, title, images }) => ({
      id,
      title,
      img: images.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    console.error("Error fetching random GIF:", error);
  }
};
