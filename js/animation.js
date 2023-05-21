import gsap from 'gsap';


const { default: gsap } = require('gsap');

gsap.set(".flex-wrapper", {scale:0.7});

gsap.timeline()
        .from(".flex-wrapper", {duration: 1, opacity:0})
