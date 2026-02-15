import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54663882-ec3b2d69ddbcbb3faf32c451a"; 

export function getImagesByQuery(query, page = 1, perPage = 12) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    })
    .then((response) => response.data.hits);
}
