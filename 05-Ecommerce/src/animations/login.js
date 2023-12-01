import anime from 'animejs/lib/anime.es.js';

export const animeLogin = () => {
    anime({
        targets: ".amLogin",
        translateY: [-150, 0],
        duration: 1300
    });
}