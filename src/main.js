import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");
let currentPage = 1;
let currentQuery = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = form.querySelector("input[name='search-text']");
  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Увага',
      message: 'Будь ласка, введіть запит для пошуку.',
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query, currentPage);

    if (!images || images.length === 0) {
      iziToast.error({
        title: 'Помилка',
        message: `За запитом "${query}" зображень не знайдено.`,
        position: 'topRight',
      });
      return;
    }

    createGallery(images);

  } catch (error) {
    console.error("Помилка запиту:", error);
    iziToast.error({
      title: 'Помилка',
      message: 'Сталася помилка під час завантаження зображень. Спробуйте пізніше.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
