const slides = document.querySelectorAll(".swiper-slide")
const btnShowMore = document.getElementById("show_more")

let btnIsActive = false

!(function () {
  if (window.innerWidth > 767 && window.innerWidth < 1124) {
    hideSlidesByNumber(slides, 6)
  } else if (window.innerWidth > 1123) {
    showSlidesOnLarge(slides, 8)
    hideSlidesByNumber(slides, 8)
  }
})()

toggleSlidesCast(false)
window.addEventListener("resize", () => toggleSlidesCast(false))
btnShowMore.addEventListener("click", function () {
  if (!btnIsActive) {
    showSlides(slides)
    btnShowMore.classList.add("swiper__show-more-button--active")
    btnShowMore.textContent = "Скрыть"
    btnIsActive = true
  } else {
    btnShowMore.classList.remove("swiper__show-more-button--active")
    btnShowMore.textContent = "Показать все"
    btnIsActive = false
    if (window.innerWidth > 767 && window.innerWidth < 1124) {
      hideSlidesByNumber(slides, 6)
    } else if (window.innerWidth > 1123) {
      showSlidesOnLarge(slides, 8)
      hideSlidesByNumber(slides, 8)
    }
  }
})

function toggleSlidesCast(isActive) {
  widthScreen = window.innerWidth > 760 && window.innerWidth <= 1110
  console.log("отработало")
  if (window.innerWidth > 1123) {
    showSlidesOnLarge(slides, 8)
  }
  if (btnIsActive && window.innerWidth > 767) {
    showSlides(slides)
  } else if (widthScreen) {
    hideSlidesByNumber(slides, 6)
  } else if (window.innerWidth > 1123 && btnIsActive) {
    hideSlidesByNumber(slides, 8)
  }
}

function hideSlidesByNumber(arr, index) {
  console.log("hide")
  return [...arr].slice(index).map((el) => el.classList.add("hidden"))
}

function showSlidesOnLarge(slides, index) {
  for (let i = 0; i < index; i++) {
    slides[i].classList.remove("hidden")
  }
}
function showSlides(arr) {
  console.log("show")
  arr.forEach((el) => el.classList.remove("hidden"))
}
