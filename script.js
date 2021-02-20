const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });


        //Burger Animation
burger.classList.toggle('toggle');

    });

}

navSlide();


// Typing Text start
$(document).ready(function(){

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Professional Musician", "Saxophonist","Multi-Instrumentalist", "Web-Developer", "Web-Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Professional Musician", "Saxophonist","Multi-Instrumentalist", "Web-Developer", "Web-Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

