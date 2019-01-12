'use strict';

let count = 0;

const createList = () => {
    document.getElementById("main").innerHTML = products.map((product,index) => {      
            return  `<div id=${index}>
                        <img src="${product.imgUrl}"/>
                        <div>${product.name}</div>
                        <div>${product.price}</div>
                    </div>`
    }).join('');
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
                    <div>${product.name}</div>
                    <div>${product.price}</div>
                </div>`
        }).join('');
}

const displayItem = () => {
   const value = event.target
   const saveItem = value.parentNode; 
   const newButton = document.createElement('button');
   newButton.textContent = "Add to Cart";
   const newMain = document.getElementById('main')
   while(newMain.firstChild) {
       newMain.removeChild(newMain.firstChild);
   }
   newMain.appendChild(saveItem);
   if (count < 1 ) {
    document.getElementById('container').appendChild(newButton);
    count++;
   }
   
}


createList();
document.getElementById('demo').addEventListener('click', filterList);
document.getElementById('main').onclick = displayItem, count;
