import { excerpt } from "./utilities";

export const itemCreate = function ({id,price,image,title,description}) {
    let itemDiv = document.createElement('div');
                    itemDiv.classList.add('col-lg-4','col-md-6','col-sm-12');
                    itemDiv.innerHTML = `
                        <div class="card item-card mb-4" item-id="${id}">
                            <div class="card-body d-flex flex-column">
                            <div class="mb-3">
                                <img src="${image}" alt="Error" class="item-img">
                            </div>
                            <p class="card-title fw-bold text-truncate">${title }</p>
                            <p class="card-text small mb-2">
                                ${excerpt(description)}
                            </p> 
                            <div class="d-flex mt-auto justify-content-between align-items-center ">
                                <p class="fw-bold mb-0">$ <span>${price}</span></p>
                                <button class="btn btn-outline-primary add-cart" >
                                    <i class="bi bi-cart-plus pe-none"></i> Add Cart
                                </button>
                            </div>   
                            </div>
                        </div>
                    `;
                    return itemDiv;
}