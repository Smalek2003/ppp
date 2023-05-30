const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click',()=>{
        // задаем функцию обнуления массива
        clearActiveClasses()
        // функция прокрутки слайдов
        
        slide.classList.add('active')})
}

function clearActiveClasses() {
    slides.forEach((slide) => {slide.classList.remove('active')})
}