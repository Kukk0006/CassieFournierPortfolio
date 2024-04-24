/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link, #navbarResponsive .dropdown-item')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            // Check if the clicked item is a dropdown menu item
            const isDropdown = responsiveNavItem.parentNode.classList.contains('dropdown');

            // If it's not a dropdown menu item, and the navbar toggler is visible, close the navbar
            if (!isDropdown && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});

var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});
let loader = document.getElementById("preloader");
window.addEventListener('load', function () {
    // Set a minimum delay of 2000 milliseconds (2 seconds) before hiding the preloader
    setTimeout(function () {
        // Set opacity to 0 to start the transition
        loader.style.opacity = "0";
        // After the transition completes, set display to none to hide the preloader completely
        loader.addEventListener('transitionend', function () {
            loader.style.display = "none";
        });
    }, 2500);
});