const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <a href="${largeImageURL}" class="gallery__item">
      <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${likes}</p>
          <p class="info-item"><b>Views:</b> ${views}</p>
          <p class="info-item"><b>Comments:</b> ${comments}</p>
          <p class="info-item"><b>Downloads:</b> ${downloads}</p>
        </div>
      </div>
    </a>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoadingIndicator() {
  loader.classList.remove('hidden');
}

export function hideLoadingIndicator() {
  loader.classList.add('hidden');
}
