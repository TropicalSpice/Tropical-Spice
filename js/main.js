const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main-content");
const toggleBtn = document.getElementById("toggleSidebar");

if(window.innerWidth <= 768){

    sidebar.classList.add("collapsed");

    main.classList.add("expanded");

}

toggleBtn.addEventListener("click", () => {

    if(window.innerWidth <= 768){

        sidebar.classList.toggle("open");

    }else{

        sidebar.classList.toggle("collapsed");

        main.classList.toggle("expanded");

    }

});


new Swiper(".productsSwiper", {

    loop: true,

    spaceBetween: 30,

    autoplay: {
        delay: 3000
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {

        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1200: {
            slidesPerView: 3
        }

    }

});