// script.js
const menuBtn=document.getElementById('menuBtn');
const sideDrawer=document.getElementById('sideDrawer');
const closeDrawer=document.getElementById('closeDrawer');
menuBtn.addEventListener('click',()=>sideDrawer.classList.add('open'));
closeDrawer.addEventListener('click',()=>sideDrawer.classList.remove('open'));