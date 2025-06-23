document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider__image');
    const dots = document.querySelectorAll('.slider__dot');
    let current = 0;
    let timer;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
        current = idx;
    }

    function nextSlide() {
        let next = (current + 1) % slides.length;
        showSlide(next);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            resetTimer();
        });
    });

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextSlide, 4000);
    }

    timer = setInterval(nextSlide, 4000);
});

