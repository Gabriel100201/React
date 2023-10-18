import anime from 'animejs/lib/anime.es.js';
export const animateCards = () => {
    console.log("animando")
    anime({
        targets: '.card-animated',
        scale: [
            { value: 1.15, easing: 'easeOutSine', duration: 200 },
            { value: 1, easing: 'easeOutSine', duration: 200 }
        ],
        delay: anime.stagger(100),
    })
}