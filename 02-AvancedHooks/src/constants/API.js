const API_KEY = "e5ad6814";
export const API_URL = (title, checks) => {
    let url = `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`
    if (checks != "all") {
        const type = `&type=${checks}`
        url = url + type
    }
    return url
}