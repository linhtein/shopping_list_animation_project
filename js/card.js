import { cardBox, cardBtn, cardCounter, items, total } from "../main";


export const cardCounterUpdate = function(){
    let firstCount = parseInt(cardCounter[0].innerText);
    cardCounter.forEach(current=>current.innerText = firstCount+1);
}
export const costTotal = function(){
    let allCardCost  = document.querySelectorAll('.card-cost');
    total.innerText = [...allCardCost].reduce((pv,cv)=>pv+parseFloat(cv.innerText),0).toFixed(2);

}


window.inc = function(event,price){
    let currentCard = event.target.closest('.item-in-card');
    let cardQuantity = currentCard.querySelector('.card-quantity');
    let cardCost = currentCard.querySelector('.card-cost');
    cardQuantity.valueAsNumber += 1;
    cardCost.innerText = (cardQuantity.valueAsNumber * price).toFixed(2);
    costTotal();
}
window.dec = function(event,price){
    let currentCard = event.target.closest('.item-in-card');
    let currentImg = currentCard.querySelector('.card-item-img');
    let cardQuantity = currentCard.querySelector('.card-quantity');
    let cardCost = currentCard.querySelector('.card-cost');
    if(cardQuantity.valueAsNumber > 0){
        cardQuantity.valueAsNumber -= 1;
        cardCost.innerText = (cardQuantity.valueAsNumber * price).toFixed(2);
    }
    costTotal();
}
window.deleteCard = function(event,id){
    let currentCard = event.target.closest('.item-in-card');
    let cardCost = parseFloat(currentCard.querySelector('.card-cost').innerText);
    total.innerText = (parseFloat(total.innerText)-cardCost).toFixed(2);
    currentCard.remove();


    // let itemId = currentItemCard.getAttribute('item-id');  //string
    // let itemDetail = items.find(item=>item.id == parseInt(itemId));

    // console.log(event.target,id);
}
export const createItemInCard = function({id,title, price,image}){
    const div = document.createElement("div");
    div.classList.add('item-in-card');
    div.innerHTML = `
        <div class="p-3 border rounded mb-3">
            <div class="mb-3 appendImg d-flex justify-content-between align-items-center">
                <img class="card-item-img"  src="${image}">
                <i class="bi bi-trash3 fs-3" onclick="deleteCard(event,${id})"></i>
            </div>     
            <p>${title}</p> 
            <div class="row justify-content-between align-items-center">

            <div class="col-4">
                <p class="mb-0 small fw-bold">$ <span class="card-cost">${price}</span></p>
            </div>
            <div class="col-6">
                <div class="card-item-quantity input-group input-group-sm">
                    <button class="btn btn-secondary" onclick="dec(event,${price})">
                        <i class="bi bi-dash pe-none"></i>
                    </button>
                    <input type="number" class="form-control text-end card-quantity" value="1">
                    <button class="btn btn-secondary" onclick="inc(event,${price})">
                        <i class="bi bi-plus pe-none"></i>
                    </button>
                </div>
            </div>
                
            </div>           
        </div>
    `;
    cardBox.append(div);
}

export const addToCart = function(e){
    let currentItemCard = e.target.closest('.item-card');
    let itemId = currentItemCard.getAttribute('item-id');  //string
    let itemDetail = items.find(item=>item.id == parseInt(itemId));

    let currentImage = currentItemCard.querySelector('.item-img');
                    let newImg = new Image();
                    newImg.src = currentImage.src;
                    newImg.style.position = "fixed";    
                    newImg.style.height = 100+'px';
                    newImg.style.zIndex = 2000;
                    newImg.style.transition= 0.7+'s';
                    newImg.style.top = currentImage.getBoundingClientRect().top+'px';
                    newImg.style.left = currentImage.getBoundingClientRect().left+'px';
                    document.body.append(newImg);

                    setTimeout(_=>{
                        newImg.style.height=0+'px';
                        newImg.style.transform = 'rotate(360deg)';
                        newImg.style.top = cardBtn.querySelector('.bi').getBoundingClientRect().top+'px';
                        newImg.style.left = cardBtn.querySelector('.bi').getBoundingClientRect().left+'px';
                    },10)

                    setTimeout(_=>{
                        cardCounterUpdate() 
                        createItemInCard(itemDetail)
                        cardBtn.classList.add('animate__tada');
                        cardBtn.addEventListener('click',_=>{
                            costTotal()
                        })
                        cardBtn.addEventListener('animationend', _=>{
                            cardBtn.classList.remove('animate__tada');
                            newImg.remove()
                        })
                    },400)
}