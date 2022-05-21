'use strict';

const it = () => {

    document.querySelector('.main-action').addEventListener('click', () => {
        document.getElementById('cars').scrollIntoView({ behavior: "smooth" })
    })

    const btns = document.querySelectorAll('.car-button');

    btns.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.price-form').scrollIntoView({ behavior: "smooth" });
        })
    });

    const mainSlide = document.querySelector('.main-slide');
    const auto = document.querySelector('.auto');
    const booking = document.querySelector('.booking');

    mainSlide.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.main').scrollIntoView({ behavior: "smooth" })
    })

    auto.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.car').scrollIntoView({ behavior: "smooth" })
    })

    booking.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.price').scrollIntoView({ behavior: "smooth" })
    })


    const inputs = document.querySelectorAll('.price-input');

    document.getElementById('price-action').onclick = function () {
        if (inputs[0].value === '') {
            alert("Заполните поле имя");
        } else if (inputs[1].value === '') {
            alert("Заполните поле телефон");
        } else if (inputs[2].value === '') {
            alert("Заполните поле автомобиль");
        } else {
            alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время!');
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        let layer = document.querySelector('.price-image');
        document.addEventListener('mousemove', (event) => {
            layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 4) + 'px,' + ((event.clientY * 0.2) / 4) + 'px,0px)';
        });

        const elem = document.querySelector(".main");
        document.addEventListener('scroll', () => {
            elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
        })
    });
}

export default it;
