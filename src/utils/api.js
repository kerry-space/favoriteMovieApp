// src/utils/api.js

const API_KEY = 'ce334d8f';
const BASE_URL = 'http://www.omdbapi.com/';

// Lista med olika sökord för att hämta olika filmer varje gång
const searchKeywords = ['marvel', 'batman', 'disney', 'pixar', 'star wars', 'harry potter', 'lord of the rings'];

/**
 * Fetch all movies. This will fetch movies using different keywords each time.
 */
export const fetchAllMovies = async () => {
  const randomKeyword = searchKeywords[Math.floor(Math.random() * searchKeywords.length)];
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${randomKeyword}`);
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