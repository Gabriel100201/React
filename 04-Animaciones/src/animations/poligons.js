import anime from 'animejs/lib/anime.es.js';
import { curves } from "../constants/bg-curves"

export const animatePolygon = () => {
    const elements = document.querySelectorAll('.lineBg');
    const numberOfCurves = 7; // Número total de curvas disponibles
    elements.forEach((element, index) => {
        setTimeout(() => {
            console.log("El")
            let randomIndex = Math.floor(Math.random() * numberOfCurves);
            // Ajusta el número aleatorio si es igual al índice
            while (randomIndex === index) {
                randomIndex = Math.floor(Math.random() * numberOfCurves);
            }
            anime({
                targets: element,
                d: [
                    { value: curves[randomIndex], duration: 9000, easing: 'easeInOutSine' },
                ],
                loop: true,
                direction: 'alternate',
            });
        }, 500 * index)
    });
};

export const animateColor = () => {
    const svgElent = document.querySelector(".lineBg")
    console.log(anime.setDashoffset(svgElent))
    anime({
        targets: '.lineBg',
        strokeDashoffset: [anime.setDashoffset, -200],
        easing: 'easeInSine',
        direction: 'reverse',
        duration: 2000,
        delay: function (el, i) { return i * 100 },
    })
}

export const animateFull = () => {
    anime({
        targets: '.lineBg',
        strokeDashoffset: [anime.setDashoffset, -200],
        easing: 'easeInSine',
        duration: 2000,
        delay: function (el, i) { return i * 100 },
    });
}