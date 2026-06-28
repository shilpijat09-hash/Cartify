// ==============================
// CARTIFY - script.js
// ==============================

// ------------------------------
// IMAGE SLIDER
// ------------------------------

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

slides.forEach((slide) => {

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide() {

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

if(slides.length > 0){

setInterval(nextSlide,3000);

}



// ------------------------------
// SEARCH FILTER
// ------------------------------

const searchInput = document.querySelector(".search-box input");

const productCards = document.querySelectorAll(".product-card");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value = this.value.toLowerCase();

productCards.forEach(function(card){

let name = card.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}



// ------------------------------
// ADD TO CART
// ------------------------------

let cartCount = 0;

const cartText = document.querySelector(".cart span");

const cartButtons = document.querySelectorAll(".product-details button");

cartButtons.forEach(function(button){

button.addEventListener("click",function(){

cartCount++;

cartText.innerHTML="Cart ("+cartCount+")";

button.innerHTML="Added ✓";

button.style.background="#27ae60";

setTimeout(function(){

button.innerHTML="Add to Cart";

button.style.background="#6c4df6";

},1500);

});

});



// ------------------------------
// WISHLIST
// ------------------------------

const hearts=document.querySelectorAll(".wishlist");

hearts.forEach(function(heart){

heart.addEventListener("click",function(){

let icon=this.querySelector("i");

if(icon.classList.contains("fa-solid")){

icon.classList.remove("fa-solid");

icon.classList.add("fa-regular");

icon.style.color="#999";

}else{

icon.classList.remove("fa-regular");

icon.classList.add("fa-solid");

icon.style.color="#ff2f66";

}

});

});



// ------------------------------
// LOGIN BUTTON
// ------------------------------

const login=document.querySelector(".login-btn");

if(login){

login.addEventListener("click",function(){

let username=prompt("Enter your Name");

if(username==="" || username===null){

alert("Login Cancelled");

}else{

alert("Welcome "+username+" 😊");

login.innerHTML='<i class="fa-regular fa-user"></i> '+username;

}

});

}



// ------------------------------
// CATEGORY CLICK
// ------------------------------

const categories=document.querySelectorAll(".category");

categories.forEach(function(item){

item.addEventListener("click",function(){

categories.forEach(function(cat){

cat.style.background="transparent";

});

this.style.background="#f3efff";

this.style.borderRadius="15px";

});

});



// ------------------------------
// SMOOTH SCROLL
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



// ------------------------------
// PRODUCT HOVER EFFECT
// ------------------------------

productCards.forEach(function(card){

card.addEventListener("mouseenter",function(){

this.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",function(){

this.style.transform="translateY(0px)";

});

});



// ------------------------------
// HEADER SHADOW
// ------------------------------

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>40){

header.style.boxShadow="0 8px 20px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";

}

});



// ------------------------------
// LOADING ANIMATION
// ------------------------------

window.addEventListener("load",function(){

document.body.style.opacity="0";

document.body.style.transition="0.5s";

setTimeout(function(){

document.body.style.opacity="1";

},100);

});



// ------------------------------
// BACK TO TOP BUTTON
// ------------------------------

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.background="#6c4df6";
topBtn.style.color="#fff";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="20px";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",function(){

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});



// ------------------------------
// CONSOLE MESSAGE
// ------------------------------

console.log("Cartify Smart E-Commerce Platform Loaded Successfully.");