
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");
let currentPage = 1;
let currentQuery = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = form.querySelector("input[name='search-text']");
  const query = input.value.trim();
  if (!query) return;

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query, currentPage);
    createGallery(images);
  } catch (error) {
    console.error("Помилка запиту:", error);
  } finally {
    hideLoader();
  }
});
