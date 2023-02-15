import { removeLoaderUi, showLoaderUi } from './js/loader';
import { itemCreate } from './js/item';
import { addToCart } from './js/card';
import * as bootstrap from 'bootstrap';
import './style.scss';



export let items = [];
export const cardRow = document.querySelector('.card-row');
export const cardBtn = document.querySelector('.card-btn');
export const cardCounter = document.querySelectorAll('.card-counter');
export const cardBox = document.querySelector('#cardBox');
export const total = document.querySelector('#total');

showLoaderUi()


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                items = json;
                items.forEach(item=>{
                    cardRow.append(itemCreate(item));
                });
                removeLoaderUi();
            })

            // window.addToCart =event=>{
            //     console.log('add to cart'   );
            // }


            cardRow.addEventListener('click', (e)=>{
                if(e.target.classList.contains('add-cart')){
                    addToCart(e);
                }
            })  

           
    


