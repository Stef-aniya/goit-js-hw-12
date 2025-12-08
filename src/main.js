import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader,showLoadBtn,hideLoadBtn } from './js/render-functions';


const form = document.querySelector('.form')     
const input = form.querySelector('input[name="search-text"]');
const btn = document.querySelector('.btn')

let currentPage = 1;
let currentQuery = '';


form.addEventListener('submit', onSubmit)
btn.addEventListener('click',onLoadMore)

async function onSubmit(event) {
    event.preventDefault();

    const query = input.value.trim();


    if (!query) {
        iziToast.error({
        title: 'Error',
        message: 'Please enter a search word!',
        });
        return;
    }

    currentPage = 1;

    currentQuery= query;

    clearGallery();

    hideLoadBtn()

    showLoader();

    try{
        const data = await getImagesByQuery(currentQuery,currentPage);
        if(data.hits.length === 0 ){
            iziToast.error({
                title: "No results",
                message:"Sorry,nothing found"
            });
            return
        }
        createGallery(data.hits);

        const totalPages = Math.ceil(data.totalHits/15);
        if(totalPages > 1){
            showLoadBtn()
        }
    }catch(error){
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Try again later."
        });
    }finally{
        hideLoader()
    }

async function onLoadMore() {
    currentPage +=1;
    showLoader()
    try{
        const data = await getImagesByQuery(currentQuery,currentPage);
        clearGallery(data.hits);
        const totalPages = Math.ceil(data.totalHits / 15);
        if(currentPage >= totalPages){
            hideLoadBtn();
            iziToast.info({
                title: "End",
                message: "We're sorry, but you've reached the end of search results."
            });
        }
        smoothScroll();
    }catch{
        iziToast.error({
            title: "Error",
            message: "Something went wrong."
        });
    }finally{
        hideLoader
    }
}
function smoothScroll(){
    const card = document.querySelector(".gallery-item")
    if(!card){
        return;
    }
    const height = card.getBoundingClientRect().height;

    window.scrollBy({
        top: height * 2,
        behavior: 'smooth'
    });
}


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