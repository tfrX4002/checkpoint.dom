let btnPlus = document.querySelectorAll('#btnPlus')
let btnMinus = document.querySelectorAll('#btnMinus')
let addButton = document.querySelector('#add_button')

btnPlus.forEach((btn)=>(btn.addEventListener('click', increaseQuantity)));

function increaseQuantity() {
   
    this.previousElementSibling.innerText = parseInt( this.previousElementSibling.innerText) + 1;
    subTotal(this);
    total()
}


btnMinus.forEach((btn)=>(btn.addEventListener('click', decreaseQuantity)));

function decreaseQuantity() {
    if ( this.nextElementSibling.innerText  > 0) {
        this.nextElementSibling.innerText  = parseInt( this.nextElementSibling.innerText ) - 1;
        subTotal(this);
        total()
    }

}
function subTotal(element) {
    let quantity ;
    if (element.id == 'btnMinus' ) {
         quantity = parseInt(element.nextElementSibling.innerText);
    }
    else{
         quantity = parseInt(element.previousElementSibling.innerText);
    }

    let price = parseInt(element.parentElement.nextElementSibling.innerText)
    let subTotal = quantity * price

    element.parentElement.nextElementSibling.nextElementSibling.innerText = subTotal + 'fr';
}
addButton.addEventListener('click',addArticle);

function addArticle(){
    let name = document.querySelector('#name_product');
    let priceProduct = document.querySelector('#price_product')
    document.querySelector('#all_product').innerHTML = document.querySelector('#all_product').innerHTML + '<tr> <td class="article_name"><div></div>' + name.value + '</td> <td><button id="btnMinus">-</button><span id="quantity">1</span><button id="btnPlus">+</button></td> <td class="unitPrice">' + priceProduct.value + '</td> <td class="subTotal">'+ priceProduct.value +'</td> </tr>'
    newElement()
}

function newElement() {
    let btnPlus = document.querySelectorAll('#btnPlus')
    let btnMinus = document.querySelectorAll('#btnMinus')

    btnPlus.forEach((btn)=>(btn.addEventListener('click', increaseQuantity)));
    btnMinus.forEach((btn)=>(btn.addEventListener('click', decreaseQuantity)));
}
function total(){
    let sub = document.querySelectorAll(".subTotal");
    let sum = 0;
    for (let i = 0; i < sub.length; i++) {
        sum = parseInt(sub[i].innerText) + sum;
    }
    document.querySelector('#total_price').innerText = sum + 'fr';


}
total()

// function total () {
//     let subt = document.querySelectorAll('.subtotal');
//     let sum = 0;
//     for (let i = 0; i<subt.length; i++) {
//         sum = parseInt(subt[i].innerText) + sum;
//     }

//     document.querySelector('#total-price').innerText = sum + "fr";
//     
//     
// }