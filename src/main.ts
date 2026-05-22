import "./style.css";
import { animate, stagger } from "animejs";

function initEnvelopes() {
  animate(".flying-envelope", {
    y:       [0, -50, 0],
    rotateZ: [0, -15, 0, 15, 0],
    skew: [0, -5, 0, 5, 0],
    transformOrigin: ['50% 50%', '50% 50%', '50% 50%', '50% 50%', '50% 50%'],
    ease: "easeIn",
    loop: true,
    duration: 4000,
    delay: stagger(300),
  });
}

function initColors() {
    animate('.pulsed-colors', {
        scale: [{from: 0.9, to: 1.1}, {to: 0.9}],
        loop: true,
        duration: 1000,
        delay: stagger(100),
    })
}

initEnvelopes();
initColors();
