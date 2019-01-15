'use strict';

let cart = [];
let count = 0;



const createList = () => {
    document.getElementById("main").innerHTML = products.map((product, index) => {      
            return  `<div id='${index}'>
                        <img src="${product.imgUrl}"/>
                        <div id='name'>${product.name}</div>
                        <div>${product.price}</div>
                    </div>`
    }).join('');

    displayCartButton();

    if(JSON.parse(sessionStorage.getItem('cart'))) {
        cart = JSON.parse(sessionStorage.getItem('cart'));
    }
}

const displayHome = () => {
    createList();
}

const displayCart = () => {
    const displayStorage = JSON.parse(sessionStorage.getItem('cart'));
    document.getElementById('main').innerHTML = displayStorage.map(product => {
            return `<div id='cartList'>${product}</div>`
            }).join(' ');
    
    displayCartButton();
}

const filterList = () => {
    const inputValue = document.getElementById("mySearch").value
    const finalValue = inputValue.toLowerCase();

    const filterResults = products.filter(product => {
        const productName = product.name.toLowerCase();
        const productNameArr = productName.split(' ');
        const descripName = product.description.toLowerCase();
        const descripNameArr = descripName.split(' ');
        
        return (productNameArr.includes(finalValue) || descripNameArr.includes(finalValue))
    })

    document.getElementById("main").innerHTML = filterResults.map((product,index) => {       
        return  `<div id=${index}>
                    <img src="${product.imgUrl}"/>
                    <div id='name'>${product.name}</div>
                    <div>${product.price}</div>
                </div>`
        }).join('');

    displayCartButton();
}

const displayCartButton = () => {
  if(document.getElementById('main').childNodes.length == 1 && count == 0) {
    const newButton = document.createElement('button');
    newButton.setAttribute('id', 'addCart');
    newButton.textContent = "Add to Cart";  
    document.getElementById('container').appendChild(newButton);
    document.getElementById('addCart').onclick = addToCart;
    count ++;
  } else if(document.getElementById('main').childNodes.length !== 1) {
    document.getElementById('container').removeChild(document.getElementById('addCart'))
    count = 0;
  }
   
}

const displayItem = () => {
    const newMain = document.getElementById('main');
      
    if (newMain.childNodes.length !== 1 && !document.getElementById('cartList')) {
    // only shows item user clicked on
        const value = event.target
        const saveItem = value.parentNode;
        
        while(newMain.firstChild) {
            newMain.removeChild(newMain.firstChild);
        }

        newMain.appendChild(saveItem);   
    }

    displayCartButton();
 
}

const addToCart = () => {
    const item = document.getElementById('name');
    cart.push(item.innerText);
    sessionStorage.setItem('cart', JSON.stringify(cart));

    document.getElementById('container').removeChild(document.getElementById('addCart'))
    count = 0;
    displayCart();
}


createList();
document.getElementById('demo').onclick = filterList;
document.getElementById('main').onclick = displayItem;
document.getElementById('home').onclick = displayHome;
document.getElementById('cart').onclick = displayCart;



