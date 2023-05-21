gsap.defaults({ease: "power4"});
gsap.set(".film-img-section", {y: 100});

ScrollTrigger.batch(".film-img-section", {
  
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.18, grid: [1, 3]}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.18, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})

});

ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".film-img-section", {y: 0}));