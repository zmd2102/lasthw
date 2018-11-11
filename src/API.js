import axios from "axios";

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "9a2b82d0797948568d3b8be75a94526d";

export default {
  getData(search) {
    return axios.get(`${URL}?q=${search}&api-key=${KEY}`);
  },
  getSavedArticles() {
    return axios.get("/api/articles");
  },
  saveArticles(Article) {
    return axios.post("api/articles", Article)
  },
  deleteArticle(id) {
    return axios.delete("api/articles/" + id);
  }
};