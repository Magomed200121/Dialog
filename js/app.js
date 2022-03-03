const swiper = new Swiper('.swiper', {
    // Optional parameters
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Variables
const menuItems = document.querySelectorAll('.header__menu-item')
const burger = document.querySelector('.dialog-burger')
const headerMenu = document.querySelector('.header__menu')

// Event Listeners
burger.addEventListener('click', showMenu)

// Functions
function showMenu(){
    menuItems.forEach(item => {
        item.style.display = 'block'
        item.style.textAlign = 'center'
    })
    headerMenu.classList.toggle('show_menu')
}

MicroModal.init({
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    disableFocus: true,
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
})