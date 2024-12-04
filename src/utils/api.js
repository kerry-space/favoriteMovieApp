// utils/api.js

const API_KEY = 'ce334d8f';
const BASE_URL = 'http://www.omdbapi.com/';

/**
 * Fetch all movies. This is a placeholder for fetching a broad set of movies.
 * In a real-world case, you might need to adjust the `s` query parameter to something generic or implement pagination.
 */
export const fetchAllMovies = async () => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=marvel`); // Default search
    const data = await response.json();
    if (data.Response === 'True') {
      return data.Search; // Return fetched movies
    } else {
      throw new Error(data.Error || 'Failed to fetch movies.');
    }
  };

/**
 * Search movies by query.
 * This will fetch movies from the API based on the user's input.
 */
export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    if (data.Response === 'True') {
      return data.Search; // Returns the movie list
    } else {
      throw new Error(data.Error || 'No movies found.');
    }
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
