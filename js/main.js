document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.content-left__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        navigation: {
        nextEl: '.content-left__swiper-button-next',
        prevEl: '.content-left__swiper-button-prev',
        },
        breakpoints: {
            765: {
                slidesPerView: 2,
                spaceBetween: 14,
            }
        }
    })

    let popUp = document.querySelector('#popup')
    let openPopup = document.querySelector('#openPopup');
    let closePopup = document.querySelector('#closePopup');

    // const hideYScroll = (active) => {
    //     const htmlWrapper = document.querySelector("html");
    //     const bodyWrapper = document.querySelector("body");
    
    //     console.log(active);
    
    //     if (active) {
    //       htmlWrapper.style.overflow = "hidden";
    //       bodyWrapper.style.overflow = "hidden";
    //     } else {
    //       htmlWrapper.style.overflow = "initial";
    //       bodyWrapper.style.overflow = "initial";
    //     }
    //   };

    openPopup.addEventListener('click', function() {
        popUp.classList.add('is-active');
        document.querySelectorAll('.section').style.overflow = 'hidden';
        // hideYScroll(true);
    });

    closePopup.addEventListener('click', function() {
        popUp.classList.toggle('is-active');
        document.querySelectorAll('.section').style.overflow = 'unset';
        // hideYScroll(false);
    });
    
});