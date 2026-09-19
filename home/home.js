$(document).ready(function(){
const $navItems = $('.nav-menu .nav-link');
const $views = $('.view-panel');
const $splashScreen = $('#splashScreen');

$navItems.on('click', function(e){
e.preventDefault();
$navItems.removeClass('active');
$(this).addClass('active');
$views.hide();

const targetView = $(this).attr('data-view');

if($(this).attr('id') === 'homeNavLink'){
$splashScreen.css('display', 'flex').css('animation', 'none');
setTimeout(() => {
$splashScreen.css('animation', 'fadeOutAnim 0.5s ease 1.5s forwards');
}, 10);
} else {
$splashScreen.css('display', 'flex').css('animation', 'none');
setTimeout(() => {
$splashScreen.css('animation', 'fadeOutAnim 0.4s ease 0.6s forwards');
}, 10);
}

$('#' + targetView).css('display', 'flex');
});

let slideIndex = 0;
const $slides = $('.slide');
const $dots = $('.dot');

function showSlide(n) {
$slides.removeClass('active');
$dots.removeClass('active');

slideIndex = (n + $slides.length) % $slides.length;
$slides.eq(slideIndex).addClass('active');
$dots.eq(slideIndex).addClass('active');
}

function nextSlide() {
showSlide(slideIndex + 1);
}

$dots.on('click', function(){
let idx = $(this).attr('data-index');
showSlide(parseInt(idx));
});

setInterval(nextSlide, 3000);
});
function toggleMobileMenu() {
  const sidebar = document.querySelector('.sidebar-panel');
  sidebar.classList.toggle('mobile-active');
}

document.querySelectorAll('.sidebar-panel a').forEach(link => {
  link.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar-panel');
    sidebar.classList.remove('mobile-active');
  });
});
