const mobileToggle = document.querySelector(".mobile-nav-toggle")
const hamburgerIcon = document.querySelectorAll(".iconrow")
const menuVisible = document.querySelector(".mobile-nav")
const headerColor = document.querySelector('header')

mobileToggle.addEventListener('click', function () {

    menuVisible.classList.toggle("visible");
    hamburgerIcon.forEach(icon => {
        icon.classList.toggle('open')
    })

    document.body.classList.toggle('no-scroll');

})

const tendinaButtons = document.querySelectorAll('.tendina-button');
 

    tendinaButtons.forEach(tendinaButton => {
        tendinaButton.addEventListener('click', function () {
        const tendina = this.querySelector('.tendina');
        tendina.classList.toggle('show-mobile');
        
    });

        tendinaButton.addEventListener('mouseenter', function (){
        const tendina = this.querySelector('.tendina');
        tendina.classList.add('show-desktop')
    });



    tendinaButton.addEventListener('mouseleave', function () {
        const tendina = this.querySelector('.tendina');
        // Avvia un timer di 1 secondo per rimuovere la classe dopo 1 secondo
        timeoutId = setTimeout(() => {
            tendina.classList.remove('show-desktop');
        }, 100);
    });

    // Cancella il timer se il mouse rientra nell'elemento prima che scada il timer
    tendinaButton.addEventListener('mouseenter', function () {
        clearTimeout(timeoutId);
    });

});


window.onload = function () {
    const sezioneScroll = document.querySelector('.hero-home-imgs');
    // Calcola la larghezza del contenitore
    var sezioneScrollWidth = sezioneScroll.offsetWidth;

    // Specifica l'offset percentuale desiderato (ad esempio, il 10%)
    var percentOffset = 17.5;

    // Calcola l'offset in pixel utilizzando la percentuale
    var pixelOffset = (sezioneScrollWidth * percentOffset) / 100;

    // Imposta lo scroll con l'offset calcolato
    sezioneScroll.scrollLeft = sezioneScroll.children[1].offsetLeft - pixelOffset;
}










