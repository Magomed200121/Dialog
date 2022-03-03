

// Variables
const burger = document.querySelector('.burger')
const topMenu = document.querySelector('.top-menu')
const homeSlider = new Swiper('.home-slider', {
    speed: 800,
    effect: 'fade',
    centerSlides: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 4000,
        
    },
})


MicroModal.init({
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
})

// Event Listeners
burger.addEventListener('click', toggleBurger)


// Functions
function toggleBurger() {
    burger.classList.toggle('burger_active')
    toggleMenu()
}

function toggleMenu() {
    topMenu.classList.toggle('menulist_active')
}