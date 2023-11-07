import anime from 'animejs/lib/anime.es.js';
var path = anime.path('.polygon path');

export const animatePolygon = () => {
    anime({
        targets: '.polygon',
        points: [

            {
                value: '100,10 40,198 190,78 10,78 160,198'
            }
        ],
        easing: 'easeOutQuad',
        duration: 1000,
        loop: false
    });
}


export const animateAlternatyve = () => {
    anime({
        targets: '.polygon',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
        duration: 2000,
        loop: true
    });
}

export const animateFull = () => {
    anime({
        targets: '.polygon',
        strokeDashoffset: [anime.setDashoffset, 2],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return i * 250 },
    });
}