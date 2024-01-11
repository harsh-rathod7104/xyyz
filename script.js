
let cartItem = []
let cartTotal = 0


function hello(image_url){
    cartItem.push(image_url);
    console.log(cartItem);
}


function displayCart(){
        let cartList = document.getElementById('cart-items');
        let listItem = document.createElement('li');
        // listItem.textContent = `${cartItem[0]}`;
        listItem.innerText = cartItem[0]
        cartList.appendChild(listItem)
    }

