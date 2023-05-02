let init = false
const panigation = document.querySelector(".swiper-pagination")
function swiperInitandDestroy() {
  if (window.innerWidth < 768 && !init) {
    init = true
    panigation.classList.remove("hidden")
    swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1.2,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 0px
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 195,
        },
        // when window width is >= 560px
        560: {
          slidesPerView: 3,
          spaceBetween: 200,
        },
      },
    })
    console.log("i init  -  " + !!swiper)
    console.log("  init  -  " + !!init)
  } else if (init && window.innerWidth > 767) {
    swiper.destroy(true, true)
    panigation.classList.add("hidden")
    init = false
    // swiper = null
    console.log("destroyed it")
  }
}

swiperInitandDestroy()
window.addEventListener("resize", swiperInitandDestroy)

// let widthScreen
// let swiper
// console.log("hi")
// function initSwiper() {
//   if (window.innerWidth < 768) {
//     swiper = new Swiper(".swiper", {
//       direction: "horizontal",
//       loop: true,
//       spaceBetween: 20,
//       slidesPerView: 1.2,

//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       breakpoints: {
//         // when window width is >= 0px
//         0: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         // when window width is >= 320px
//         320: {
//           slidesPerView: 2,
//           spaceBetween: 195,
//         },
//         // when window width is >= 560px
//         560: {
//           slidesPerView: 3,
//           spaceBetween: 200,
//         },
//       },
//     })
//   }
//   console.log("init it")
// }
// function destroySwiper() {
//   swiper.destroy(true, true)
//   swiper = false
//   console.log("Destroy it")
// }

// function toggleSwiper() {
//   if (widthScreen < 768 && !swiper) {
//     initSwiper()
//   } else if (widthScreen > 767 && swiper) {
//     destroySwiper()
//   }
// }

// window.addEventListener("resize", function () {
//   widthScreen = this.window.innerWidth
//   toggleSwiper()
//   console.log("toggled")
// })
