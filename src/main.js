import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let currentPage = 1;
let query = '';
let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async e => {
  e.preventDefault();
  query = e.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
    });
    return;
  }

  clearGallery();
  currentPage = 1;

  try {
    showLoadingIndicator();
    const { hits, totalHits } = await fetchImages(query, currentPage);

    if (!hits.length) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, no images found. Try again!',
      });
      return;
    }

    renderGallery(hits);
    lightbox.refresh();
    iziToast.success({
      title: 'Success',
      message: `Found ${totalHits} images!`,
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoadingIndicator();
  }
});
