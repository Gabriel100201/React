import anime from 'animejs/lib/anime.es.js';

export const animeLogin = () => {
    anime({
        targets: ".amLogin",
        translateY: [-150, 0],
        opacity: [0, 1],
        duration: 1300
    });
}