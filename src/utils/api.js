const API_KEY = 'ce334d8f';
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  if (data.Response === "True") {
    return data.Search; // Returns the movie list
  } else {
    throw new Error(data.Error || "Failed to fetch movies.");
  }
};
