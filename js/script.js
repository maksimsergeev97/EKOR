'use strict'

document.addEventListener("DOMContentLoaded", () => {
    $('.promo__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.services__slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true
                }
              },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.additionally__slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true
                }
              },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.partners__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
                
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
       
    });

    const servicesSlides = document.querySelectorAll('.services__slide'),
          additionallySlides = document.querySelectorAll('.additionally__slide');

    servicesSlides.forEach((slide, i) => {
        slide.addEventListener('mouseenter', () => {
            slide.childNodes[1].style.transform = 'translateY(0)';
        });
        slide.addEventListener('mouseleave', () => {
            slide.childNodes[1].style.transform = 'translateY(75%)';
        });
    })

    additionallySlides.forEach((slide, i) => {
        slide.addEventListener('mouseenter', () => {
            slide.childNodes[1].style.transform = 'translateY(0)';
        });
        slide.addEventListener('mouseleave', () => {
            slide.childNodes[1].style.transform = 'translateY(-70%)';
        });
    })

    const burger__btn = document.querySelector('.burger__btn'),
          spans = burger__btn.querySelectorAll('.burger__item')

    burger__btn.addEventListener('click', ()=> {
        document.querySelector('.burger__menu').classList.toggle('show__burger__menu');
        
        spans.forEach((span, i)=> {
            span.classList.toggle(`burger__item_${i+1}_active`);
        })
        
    });   
});