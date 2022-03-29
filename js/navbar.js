const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burguer.addEventListener('click', () => {

        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade  2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both ${index / 7}s`;
            }
        });

        //animate burger
        burguer.classList.toggle('burguer-active');




    });


    //cerrar cuando se hace click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach((link, index) => {

                    link.style.animation = '';

            });
        burguer.classList.remove('burguer-active');
        nav.classList.remove('nav-active');
        });
    });




    /*navLinks.addEventListener('click', () => {
        
        
    });*/

}
navSlide();