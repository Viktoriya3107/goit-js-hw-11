import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
} from "./render-functions";

const form = document.querySelector(".form");
const input = form.elements["search-text"];

form.addEventListener("submit", onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: "Something went wrong. Try again later.",
        position: "topRight",
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
