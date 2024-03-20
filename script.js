const mobileToggle = document.querySelector(".mobile-nav-toggle")
const hamburgerIcon = document.querySelectorAll(".iconrow")
const menuVisible = document.querySelector(".mobile-nav")
const headerColor = document.querySelector('header')

mobileToggle.addEventListener('click', function () {

    menuVisible.classList.toggle("visible");
    hamburgerIcon.forEach(icon => {
        icon.classList.toggle('open')
    })

})