// For navbar responsive icon menu
const nav=document.querySelector('.navbar');
const icons=document.querySelector('.iconshold');
const togglebar=()=>{
    nav.classList.toggle('activeitem');
}
icons.addEventListener("click",()=>togglebar());

// For slidebar 
let sliderdone=document.getElementById('sliderfirst');
const box0=document.getElementById('boxe0');
const box1=document.getElementById('boxe1');
const box2=document.getElementById('boxe2');
const togglefirst=()=>{
    sliderdone.classList.remove('slideimg');
    sliderdone.classList.remove('sliderimg1');
    sliderdone.classList.remove('sliderimg2');
    sliderdone.classList.add('sliderimg0');
    box0.classList.add('colorslidebox');
    box1.classList.remove('colorslidebox');
    box2.classList.remove('colorslidebox');
}
box0.addEventListener("click",()=>togglefirst());

const togglesecond=()=>{
    sliderdone.classList.remove('slideimg');
    sliderdone.classList.remove('sliderimg0');
    sliderdone.classList.remove('sliderimg2');
    sliderdone.classList.add('sliderimg1');
    box1.classList.add('colorslidebox');
    box2.classList.remove('colorslidebox');
    box0.classList.remove('colorslidebox');
}
box1.addEventListener("click",()=>togglesecond());

const togglethird=()=>{
    sliderdone.classList.remove('slideimg');
    sliderdone.classList.remove('sliderimg1');
    sliderdone.classList.remove('sliderimg0');
    sliderdone.classList.add('sliderimg2');
    box2.classList.add('colorslidebox');
    box1.classList.remove('colorslidebox');
    box0.classList.remove('colorslidebox');
}
box2.addEventListener("click",()=>togglethird());