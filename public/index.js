'use strict';


const createList = () => {
    document.getElementById("main").innerHTML = products.map(product => {
        return `<img src="${product.imgUrl}"/>
                <div>${product.name}</div>
                <div>${product.price}</div>`
                
    })
}

document.getElementById('demo').addEventListener('click', createList);
