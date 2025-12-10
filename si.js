gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%",
      end: "+=400%",
      pin: true,
      markers: true,
      toggleActions: "play none none reverse",
      scrub: 0.5,
    },
  })
  .to(
    "#test li:nth-child(1)",
    {
      opacity: 1,
      y: -400,
      x: 50,
      duration: 2,
      scale: 1,
      // ease: "elastic.out(1,0.5)",
      // ease: "back.out(4)",
      ease: "elastic.out(1.2,0.75)",
    },
    0
  )
  .to(
    "#test li:nth-child(1)",
    {
      y: 200,
      x: 100,
      scale: 1,
      duration: 3,
      // opacity: 0,
      ease: "elastic.in(1.2,0.75)",

      onComplete: () => {
        document.querySelector("#test li:nth-child(1)").classList.remove("on");
        gsap.set("#test li:nth-child(1)", { clearProps: "all" });
      },
      //   },
    },
    2
  )
  .to(
    "#test li:nth-child(2)",
    {
      opacity: 1,
      y: -200,
      x: -70,
      scale: 1.3,
      duration: 2,
      ease: "elastic.out(1,0.5)",

      // ease: "elastic.out(1, 0.5)",
    },
    0.8
  )
  .to("#test li:nth-child(2)", {
    y: 100,
    x: -150,
    scale: 0.8,
    duration: 3,
    opacity: 0,
    ease: "elastic.out(1,0.5)",

    onComplete: () => {
      document.querySelector("#test li:nth-child(2)").classList.remove("on");
      gsap.set("#test li:nth-child(2)", { clearProps: "all" });
    },
  })
  .to(
    "#test li:nth-child(3)",
    {
      opacity: 1,
      x: -150,
      y: -400,
      scale: 1.3,
      duration: 2,
      // ease: "elastic.out(1, 0.5)",
    },
    1.6
  )
  .to("#test li:nth-child(3)", {
    x: -100,
    y: -50,
    scale: 1,
    duration: 3,
    opacity: 0,
    onComplete: () => {
      document.querySelector("#test li:nth-child(3)").classList.remove("on");
      gsap.set("#test li:nth-child(3)", { clearProps: "all" });
    },
  })
  .to(
    "#test li:nth-child(4)",
    {
      opacity: 1,
      x: 150,
      y: -400,
      scale: 1.3,
      duration: 2,
      // ease: "elastic.out(1, 0.5)",
    },
    2.4
  )
  .to("#test li:nth-child(4)", {
    x: 250,
    y: 50,
    scale: 1,
    duration: 3,
    opacity: 0,
    onComplete: () => {
      document.querySelector("#test li:nth-child(4)").classList.remove("on");
      gsap.set("#test li:nth-child(4)", { clearProps: "all" });
    },
  });

//
//
//
//
//
//
//
//
//
//
//

// ScrollTrigger.create({
//   trigger: "#test",
//   start: "20% 30%",
//   end: "+=400%",
//   pin: true,
//   scrub: false, // 튀는 느낌을 위해 OFF
//   markers: true,
// });

// function makeAnim(i, enterAnim, leaveAnim) {
//   const el = `#test li:nth-child(${i})`;

//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: "#test",
//         start: `${20 + (i - 1) * 25}% 30%`,
//         // end: `${20 + i * 25}% 30%`,
//         // start: "20% 30%",
//         end: "+=400%", // [ +=500 ] -> 시작
//         scrub: false,
//         toggleActions: "play none none reverse",
//         onEnter: () => {
//           document.querySelector(el).classList.add("on");
//         },
//         onLeaveBack: () => {
//           document.querySelector(el).classList.add("on");
//           gsap.set(el, { clearProps: "all" });
//         },
//         onLeave: () => {
//           document.querySelector(el).classList.remove("on");
//         },
//       },
//     })
//     .to(el, enterAnim)
//     .to(el, leaveAnim);
// }

// makeAnim(
//   1,
//   {
//     x: 50,
//     y: -400,
//     opacity: 1,
//     scale: 1,
//     duration: 1,
//     ease: "elastic.out(1,0.5)",
//   },
//   { x: 100, y: 200, opacity: 0, duration: 1 }
// );

// makeAnim(
//   2,
//   {
//     x: -70,
//     y: -200,
//     opacity: 1,
//     scale: 1.3,
//     duration: 1,
//     ease: "elastic.out(1,0.4)",
//   },
//   { x: -150, y: 200, opacity: 0, scale: 1, duration: 1 }
// );

// makeAnim(
//   3,
//   {
//     x: -150,
//     y: -400,
//     opacity: 1,
//     scale: 1.3,
//     duration: 1,
//     ease: "elastic.out(1,0.4)",
//   },
//   { x: -200, y: -50, opacity: 0, scale: 1, duration: 1 }
// );

// makeAnim(
//   4,
//   {
//     x: 150,
//     y: -400,
//     opacity: 1,
//     scale: 1.3,
//     duration: 1,
//     ease: "elastic.out(1,0.4)",
//   },
//   { x: 250, y: 50, opacity: 0, scale: 1, duration: 1 }
// );
