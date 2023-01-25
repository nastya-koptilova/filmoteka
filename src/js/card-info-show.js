'use strict';

import {
  ThemoviedbAPI
} from './api';
import {
  createCardInfo
} from './card-info';
import localStorageService from './localstorage.js';
import {
  showLoader,
  hideLoader
} from './loaders';
// import basicLightbox from 'basiclightbox';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


const theMovieById = new ThemoviedbAPI();
export const watched = localStorageService.load('watched') ? [...localStorageService.load('watched')] : [];
export const queue = localStorageService.load('queue') ? [...localStorageService.load('queue')] : [];

(() => {
  const refs = {
    openCardInfoEl: document.querySelector('.film-card__list.film-card__list'),
    closeCardInfoEl: document.querySelector('[data-modal-close-card]'),
    modalCardInfo: document.querySelector('[data-modal-card]'),
    modalCardContent: document.querySelector('.modal-card__content'),
    trailerBtn: document.querySelector('.trailer-btn'),
    body: document.querySelector('body'),
  };

  let watchBtn;
  let queueBtn;

  const onOpenCardInfoElClick = async event => {
    if (event.target.nodeName !== 'UL') {
      showLoader();
      refs.modalCardInfo.classList.remove('is-hidden');
      refs.body.classList.add('no-scroll');
      document.addEventListener('keydown', onEscKeyBtnPress);

      const movieId = event.target.getAttribute('data-id');

      await theMovieById
        .fetchFilmInfo(movieId)
        .then(data => {
          refs.modalCardContent.innerHTML = createCardInfo(data);
          hideLoader();
          watchBtn = document.querySelector('.modal-card__watch-btn');
          watchBtn.addEventListener('click', onAddWatchedBtnClick);

          queueBtn = document.querySelector('.modal-card__queue-btn');
          queueBtn.addEventListener('click', onAddQueueBtnClick);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const onCloseCardInfoElClick = () => {
    refs.modalCardInfo.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
    refs.modalCardContent.innerHTML = '';
    document.removeEventListener('keydown', onEscKeyBtnPress);
  };

  const onEscKeyBtnPress = event => {
    if (event.code === 'Escape') {
      onCloseCardInfoElClick();
    }
  };

  const onModalCardInfoClick = event => {
    const {
      target,
      currentTarget
    } = event;

    if (target.classList.contains('modal-card__watch-btn')) {
      target.addEventListener('click', onAddWatchedBtnClick);
    }

    if (target.classList.contains('modal-card__queue-btn')) {
      target.addEventListener('click', onAddQueueBtnClick);
    }
    if (target.classList.contains('trailer-btn')) {
      target.addEventListener('click', onAddTrailerClick);
    }
    ///var 1
    // async function onAddTrailerClick(event) {
    //   const movieId = await event.target.getAttribute('data-id');
    //   theMovieById
    //     .fetchFilmInfo(movieId)
    //     .then(data => {
    //       // trailer.push(data);
    //       // console.log(queue);
    //       // localStorageService.save('queue', queue);
    //       console.log(movieId);
    //       getData(id);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }

    // async function getData(id) {
    //   try {
    //     const {
    //       data
    //     } = theMovieById.fetchTrailer(id);
    //     if (data.results === null) {
    //       return;
    //     }
    //     return data;
    //     console.log(data);
    //     // modalEL.insertAdjacentHTML('beforeend', createModalTrailerMarkup(data.results[0]));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    ///var 2

    async function onAddTrailerClick(event) {
      const movieId = event.target.getAttribute('data-id');
      theMovieById
        .fetchTrailer(movieId)
        .then(data => {
          console.log(movieId);
          console.log(data);
          renderTrailer(data);
        })
        .catch(console.log);
    }

    function renderTrailer(data) {
      console.log('fggg');


      const instance = basicLightbox.create(
        `<div class="modal-trailer-backdrop">
          <iframe class="iframe" width="640" height="480" frameborder="0" allowfullscreen allow='autoplay'
            src="https://www.youtube.com/embed/${data.results[0].key}?autoplay=1" >
          </iframe>
    </div>`).show();

      // refs.trailerBtn.addEventListener('click', () => {
      //   instance.show();
      // });
    }








    async function onAddQueueBtnClick() {
      const movieId = target.getAttribute('data-id');
      theMovieById
        .fetchFilmInfo(movieId)
        .then(data => {
          queue.push(data);
          console.log(queue);
          localStorageService.save('queue', queue);
          // console.log(queue);
        })
        .catch(err => {
          console.log(err);
        });
    }

    if (target !== currentTarget) {
      return;
    }

    onCloseCardInfoElClick();
  };

  const onModalCardContentClick = event => {
    const {
      target
    } = event;
    if (target.nodeName !== 'BUTTON') {
      return;
    }
    if (target.classList.contains('js-remove-watched')) {
      target.addEventListener('click', onRemoveBtnClick)
      target.textContent = 'remove from watched';
      target.classList.remove('js-remove-watched');

      return;
    } else if (
      !target.classList.contains('js-remove-watched') &&
      target.classList.contains('modal-card__watch-btn')
    ) {
      target.textContent = 'add to watched';
      target.classList.add('js-remove-watched');

      return;
    }

    if (target.classList.contains('js-remove-queue')) {
      target.textContent = 'remove from queue';
      target.classList.remove('js-remove-queue');
      return;
    } else if (
      !target.classList.contains('js-remove-queue') &&
      target.classList.contains('modal-card__queue-btn')
    ) {
      target.textContent = 'add to queue';
      target.classList.add('js-remove-queue');
      return;
    }
  };

  refs.openCardInfoEl.addEventListener('click', onOpenCardInfoElClick);
  refs.closeCardInfoEl.addEventListener('click', onCloseCardInfoElClick);
  refs.modalCardInfo.addEventListener('click', onModalCardInfoClick);
  refs.modalCardContent.addEventListener('click', onModalCardContentClick);

  async function onAddQueueBtnClick(e) {
    const movieId = e.target.getAttribute('data-id');
    if (queue.includes(movieId)) {
      return;
    }
    queue.push(movieId);
    theMovieById
      .fetchFilmInfo(movieId)
      .then(data => {
        console.log(queue);
        localStorageService.save('queue', queue);
        // console.log(queue);
      })
      .catch(err => {
        console.log(err);
      });
  }
  async function onAddWatchedBtnClick(e) {
    const movieId = e.target.getAttribute('data-id');
    if (watched.includes(movieId)) {
      return;
    }
    watched.push(movieId);

    await theMovieById
      .fetchFilmInfo(movieId)
      .then(data => {
        localStorageService.save('watched', watched);
        // console.log(localStorageService.load('watched'));
      })
      .catch(err => {
        console.log(err);
      });
  }
})();
async function onRemoveBtnClick(e) {
  const movieId = e.target.getAttribute('data-id');
  // console.log(localStorageService.load('watched').splice(watched.indexOf(movieId), 0))

}