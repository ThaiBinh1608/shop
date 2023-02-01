const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')


 if(bar){
        bar.addEventListener('click', () =>{
           nav.classList.add('active2')
           
        })
 }
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active2')
     })
}


const shopPage1 = document.querySelector(".page1")
const shopPage2 = document.querySelector(".page2")
const shopPage3 = document.querySelector(".page3")
const btnPage1 = document.querySelector(".btn-page1")
const btnPage2 = document.querySelector(".btn-page2")
const btnPage3 = document.querySelector(".btn-page3")
if(btnPage1){
    btnPage1.addEventListener('click', () =>{
        shopPage1.classList.remove('active3')
        shopPage2.classList.add('active3')
        shopPage3.classList.add('active3')
       
    })
} 
if(btnPage2)
    btnPage2.addEventListener('click', () =>{
        shopPage2.classList.remove('active3')
        shopPage1.classList.add('active3')
        shopPage3.classList.add('active3')
    })
 if(btnPage3)
    btnPage3.addEventListener('click', () =>{
        shopPage3.classList.remove('active3')
        shopPage1.classList.add('active3')
        shopPage2.classList.add('active3')
    })



//cart

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//open cart
cartIcon.onclick = () => {
    console.log(123)
    cart.classList.add("active")
}
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active")
}



//cart work 
if(document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

//function
function ready(){
    var removeCartButton = document.getElementsByClassName('cart-remove');
    console.log(removeCartButton)
    for( var i = 0; i< removeCartButton.length; i++){
        var button = removeCartButton[i]
        button.addEventListener("click",removeCartItem)
       
        
    }

    //quantity change event
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change",quantityChanged);

    }
    //them san pham
    var addcart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addcart.length; i++){
        var button = addcart[i]
        button.addEventListener('click',addCartClicked);
        

    }
    updatetotal();
    //buy button
    document.getElementsByClassName("btn-buy")[0].addEventListener("click",buttonClicked);
}

//buy button
function buttonClicked(){
    alert("Bạn đã mua sản phẩm")
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

//Xoa san pham khoi gio hang
function removeCartItem(event) {
    var butomClicked = event.target;
    butomClicked.parentElement.remove();
    updatetotal();
}   

//set so luong san pham
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value = 1;
    }
    updatetotal();

}

//them san pham vao gio hang
function addCartClicked(event){
    var button = event.target
    var shoproducts = button.parentElement
    var title = shoproducts.getElementsByClassName("product-title")[0].innerText;
    var price = shoproducts.getElementsByClassName("price")[0].innerText;
    var productImg = shoproducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg)
    updatetotal();
    alert("Sản phẩm đã được thêm vào giỏ hàng của bạn");
}

function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement("div")
    cartShopBox.classList.add('cart-box')
    var cartItem = document.getElementsByClassName("cart-content")[0];
    var cartItemName = cartItem.getElementsByClassName("cart-product-title");
    for (var i = 0; i <cartItemName.length; i++) {
        if(cartItemName[i].innerText == title){
            alert("Sản phẩm đã có trong giỏ hàng")
            return;
        }  
    } 

    var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="details-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- remove cart -->
    <i class="fa-solid fa-trash cart-remove"></i>    `;

cartShopBox.innerHTML = cartBoxContent
cartItem.append(cartShopBox)
cartShopBox
.getElementsByClassName("cart-remove")[0]
.addEventListener("click",removeCartItem);
cartShopBox
.getElementsByClassName("cart-quantity")[0]
.addEventListener("change",quantityChanged);



}







//update tong tien
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = document.getElementsByClassName("cart-box");
    var total = 0;
  
   
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace(" ","VND"));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        total = Math.round(total * 100)/100 ;

        document.getElementsByClassName('total-price')[0].innerText = total + "VND";
}

// sproduct page
// var mainimg = document.getElementById("mainImg");
// var smaillimg = document.getElementsByClassName("smaillImg");


// smaillimg[0].onclick = function(){
//     mainimg.src = smaillimg[0].src;
// }

// smaillimg[1].onclick = function(){
//     mainimg.src = smaillimg[1].src;
// }


// smaillimg[2].onclick = function(){
//     mainimg.src = smaillimg[2].src;
// }


// smaillimg[3].onclick = function(){
//     mainimg.src = smaillimg[3].src;
// }

//slider product
const productContainers = [...document.querySelectorAll('.shop-content1')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
       
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

