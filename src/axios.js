import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get("/foo-bar");

export default instance;


// https://api.themoviedb.org/3/discover/movie?api_key=b33da15fb726a97ac2874d63f7df0e4f&with_genres=99


