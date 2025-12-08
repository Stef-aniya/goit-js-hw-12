import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';


const form = document.querySelector('.form')     
const input = form.querySelector('input[name="search-text"]');
const btn = document.querySelector('.btn')

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();

    const query = input.value.trim();


    if (!query) {
        iziToast.error({
        title: 'Error',
        message: 'Please enter a search word!',
        });
        return;
    }

    clearGallery();


    showLoader();


    getImagesByQuery(query)
        .then(data => {
        if (data.hits.length === 0) {
            iziToast.error({
            title: 'No results',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }

        createGallery(data.hits);
        })
        .catch(() => {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Try again later.',
        });
        })
        .finally(() => {
        hideLoader();
        });
}