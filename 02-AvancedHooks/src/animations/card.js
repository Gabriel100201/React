import anime from 'animejs/lib/anime.es.js';

export const animateCards = () => {
    anime({
        targets: '.card-animated',
        opacity: [
            { value: 0 },
            { value: 1, easing: 'easeOutSine', duration: 300 }
        ],
        scale: [
            { value: 1.15, easing: 'easeOutSine', duration: 200 },
            { value: 1, easing: 'easeOutSine', duration: 200, delay: 300 },
        ],
        delay: anime.stagger(100),
    })
}

export const goOutCard = () => {
    anime({
        targets: '.card-animated',
        opacity: [
            { value: 1, easing: 'easeOutSine', duration: 100 },
            { value: 0, easing: 'easeOutSine', duration: 200 }
        ],
        scale: [
            { value: 1, easing: 'easeOutSine', duration: 100 },
            { value: 0, easing: 'easeOutSine', duration: 200 },
        ],
    })
}