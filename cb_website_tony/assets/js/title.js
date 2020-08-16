// Wrap every letter in a span
import anime from 'animejs/lib/anime.es.js';

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 200
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1200,
    easing: "easeOutExpo",
    delay: 200
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1400,
    easing: "easeOutExpo",
    delay: 200
  });
  

