import axios from "axios";

const BASE_URL = "https://libretranslate.de/languages";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "120fce0b17msh436766ead066f60p1bc4efjsn159ae8c77e00",
    "X-RapidAPI-Host": "translate-plus.p.rapidapi.com",
  },
});
