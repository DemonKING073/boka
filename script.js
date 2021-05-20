// //map integration
        let map;
        function initMap() {
            var location = {lat:-33.96716,lng:151.10666};
            var map = new google.maps.Map(document.getElementById("map"),{
                zoom:18,
                center: location
            });
            var marker = new google.maps.Marker({
                position: location,
                map: map,
            })
        }


//Login Authentication
var users = [
    {
        user:"admin",
        password:'admin123'
    },
    {
        user:"nirdesan",
        password:'kera'
    }
]
function login() {
    var user = document.getElementById('user').value;
    var logged = false;
    var password = document.getElementById('password').value;
    for(i=0; i<users.length;i++){
        if(user==users[i].user && password ==users[i].password){
            logged=true;
        }
    }
    if(logged){
        console.log('user loged')
        alert('Logged Successfully');
        window.location.href='./index.html'
    }else{
        alert('Login Failed!')
    }
}

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready)
}else{
    ready();
}

function ready(){
    let removeCartButton = document.getElementsByClassName('cart-btn')
    for(let i = 0; i< removeCartButton.length; i++)
        {
        let button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
        }
    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    let addCart = document.getElementsByClassName("item-btn");
    console.log(addCart)
    for(let i=0; i<addCart.length;i++){
        let button = addCart[i];
        button.addEventListener("click",addToCartClicked);
    }
}

function addToCartClicked(event){
    let button = event.target;
    let shopItem = button.parentElement.parentElement.parentElement.parentElement;
    let title = shopItem.getElementsByClassName("item-title")[0].innerText;
    let price = shopItem.getElementsByClassName("item-price")[0].innerText;
    let image = shopItem.getElementsByClassName("item-image")[0].src;
    console.log(title);
    console.log(price);
    console.log(image); 
    addItemToCart(title,price,image);
    updateCartTotal();
}

function addItemToCart(title,price,image) {
    let cartRow = document.createElement('div');
    let cartItems = document.getElementsByClassName('Cart-container')[0];
    cartRow.classList.add('cart-row');
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for(let i = 0; i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText==title){
            alert('Item is already added To Cart!');
            return
        }
    }
    let cartRowContents =  `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${image}" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">    
            <input class="cart-quantity-input" type="number" value="1">
            <button class="cart-btn" role="button">REMOVE</button>
        </div>
    `
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('cart-btn')[0].addEventListener('click',removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged);
}

function quantityChanged(event){
    let input = event.target;
    if(isNaN(input.value) || input.value<=0){
        input.value = 1;
    }
    updateCartTotal();
}
function removeCartItem(event){
    let buttonClicked  = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
}

function updateCartTotal(){
    let total=0;
    let cartRows = document.getElementsByClassName('cart-row');
    for(let i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let price = parseFloat(priceElement.innerText.replace('$',''));
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let quantity = quantityElement.value;
        total = total+(price*quantity);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText='$'+total;
}

function purchase() {
    const total = document.getElementsByClassName('cart-total-price')[0].innerText;
    if(total=='$0'){
        alert("No Items!")
    }else{
        alert("Purchase Successful")
    }
    console.log(total)
}




