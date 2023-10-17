const API_KEY = "e5ad6814";
export const API_URL = (title) => {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`
    return url
}