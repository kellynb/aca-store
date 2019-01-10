'use strict';

// const handleInput = () => {
//     const inputValue = event.target.value;
//     const lowerInputValue = inputValue.toLowerCase();
//     console.log(lowerInputValue)
//     return lowerInputValue
// }


const createList = () => {
    document.getElementById("main").innerHTML = products.map(product => {       
            return  `<img src="${product.imgUrl}"/>
                     <div>${product.name}</div>
                     <div>${product.price}</div>`
    })
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

    document.getElementById("main").innerHTML = filterResults.map(product => {       
        return  `<img src="${product.imgUrl}"/>
                 <div>${product.name}</div>
                 <div>${product.price}</div>`
        })
}



createList();
// document.getElementById("mySearch").addEventListener('change', handleInput);
document.getElementById('demo').addEventListener('click', filterList);