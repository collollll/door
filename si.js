gsap.registerPlugin(ScrollTrigger);

let designTime = gsap.timeline({
  scrollTrigger: {
    trigger: "#test",
    start: "20% 30%",
    // end: "+=2000%",
    // pin: true,
    markers: true,
    toggleActions: "play none none reverse",
    // scrub: 3,

    // snap: {
    //   snapTo: 12,
    //   duration: 2, // 스냅되는데 걸리는 시간
    //   ease: "power1.inOut", // 스냅 애니메이션
    // },
  },
});

// designTime
gsap.to(
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

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 0%
      // end: "+=100%", // 100%
      end: "+=30% 30%",
      toggleActions: "play none none reverse",
    },
  }
  // 0
);
gsap.to(
  "#test li:nth-child(1)",
  {
    y: -500, // 살짝 위로 (20px 튀어오름)
    x: 100,
    duration: 2, // 빠르게
    // ease: "power1.out",
    ease: "elastic.out(1.2,0.75)",

    // yoyo: true, // 왔다갔다 (180→200→180→200)
    // repeat: 2, // 2번 반복 = 통통 2번

    scrollTrigger: {
      trigger: "#test",
      start: "200px 30%", // 100% 더 스크롤 후
      end: "+=30%",
      toggleActions: "play none none reverse",
      markers: { startColor: "blue" },
    },
  }
  // 2
);
gsap.to(
  "#test li:nth-child(1)",
  {
    y: -450, // 살짝 위로 (20px 튀어오름)
    x: 100,
    duration: 2, // 빠르게
    // ease: "power1.out",
    ease: "elastic.out(1.2,0.75)",

    // yoyo: true, // 왔다갔다 (180→200→180→200)
    // repeat: 2, // 2번 반복 = 통통 2번

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "+=30%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 4
);

// designTime
gsap.to(
  "#test li:nth-child(2)",
  {
    opacity: 1,
    y: -200,
    x: -70,
    scale: 1.3,
    duration: 2,
    ease: "elastic.out(1,0.5)",

    // ease: "elastic.out(1, 0.5)",

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "+=30%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 0
);
gsap.to(
  "#test li:nth-child(2)",
  {
    y: -300,
    x: -50,
    scale: 0.8,
    duration: 3,
    // opacity: 0,
    ease: "elastic.out(1,0.5)",

    // onComplete: () => {
    //   document.querySelector("#test li:nth-child(2)").classList.remove("on");
    //   gsap.set("#test li:nth-child(2)", { clearProps: "all" });
    // },

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "+=100%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 4
);
gsap.to(
  "#test li:nth-child(2)",
  {
    opacity: 1,
    y: 100,
    x: -150,
    scale: 1.3,
    duration: 2,
    ease: "elastic.out(1,0.5)",

    // ease: "elastic.out(1, 0.5)",

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "+=100%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 6
);

// designTime
gsap.to(
  "#test li:nth-child(3)",
  {
    opacity: 1,
    x: -150,
    y: -400,
    scale: 1.3,
    duration: 2,
    // ease: "elastic.out(1, 0.5)",

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "+=100%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 0
);
gsap.to(
  "#test li:nth-child(3)",
  {
    x: -300,
    y: -250,
    scale: 1,
    duration: 3,
    // opacity: 0,
    // onComplete: () => {
    //   document.querySelector("#test li:nth-child(3)").classList.remove("on");
    //   gsap.set("#test li:nth-child(3)", { clearProps: "all" });
    // },

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "+=100%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 4
);
gsap.to(
  "#test li:nth-child(3)",
  {
    opacity: 1,
    x: -100,
    y: -50,
    scale: 1.3,
    duration: 2,
    ease: "elastic.out(1,0.5)",

    // ease: "elastic.out(1, 0.5)",

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "+=100%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 8
);

// designTime
gsap.to(
  "#test li:nth-child(4)",
  {
    opacity: 1,
    x: 150,
    y: -400,
    scale: 1.3,
    duration: 2,
    // ease: "elastic.out(1, 0.5)",

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "+=100%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 2
);
gsap.to(
  "#test li:nth-child(4)",
  {
    x: 100,
    y: -300,
    scale: 1,
    duration: 3,
    // opacity: 0,
    // onComplete: () => {
    //   document.querySelector("#test li:nth-child(4)").classList.remove("on");
    //   gsap.set("#test li:nth-child(4)", { clearProps: "all" });
    // },

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "50%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 6
);
gsap.to(
  "#test li:nth-child(4)",
  {
    opacity: 1,
    x: 250,
    y: 50,
    scale: 1.3,
    duration: 2,
    ease: "elastic.out(1,0.5)",
    opacity: 0,

    // ease: "elastic.out(1, 0.5)",

    scrollTrigger: {
      trigger: "#test",
      start: "50% 30%", // 100% 더 스크롤 후
      end: "80%",
      toggleActions: "play none none reverse",
      markers: { startColor: "orange" },
    },
  }
  // 8
);

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

gsap.to(
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

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 0%
      // end: "+=100%", // 100%
      end: "+=30% 30%",
      toggleActions: "play none none reverse",
    },
  }
  // 0
);
gsap.to(
  "#test li:nth-child(1)",
  {
    y: -500, // 살짝 위로 (20px 튀어오름)
    x: 100,
    duration: 2, // 빠르게
    // ease: "power1.out",
    ease: "elastic.out(1.2,0.75)",

    // yoyo: true, // 왔다갔다 (180→200→180→200)
    // repeat: 2, // 2번 반복 = 통통 2번

    scrollTrigger: {
      trigger: "#test",
      start: "200px 30%", // 100% 더 스크롤 후
      end: "+=30%",
      toggleActions: "play none none reverse",
      markers: { startColor: "blue" },
    },
  }
  // 2
);
gsap.to(
  "#test li:nth-child(1)",
  {
    y: -450, // 살짝 위로 (20px 튀어오름)
    x: 100,
    duration: 2, // 빠르게
    // ease: "power1.out",
    ease: "elastic.out(1.2,0.75)",

    // yoyo: true, // 왔다갔다 (180→200→180→200)
    // repeat: 2, // 2번 반복 = 통통 2번

    scrollTrigger: {
      trigger: "#test",
      start: "20% 30%", // 100% 더 스크롤 후
      end: "+=30%",
      toggleActions: "play none none reverse",
      markers: { startColor: "green" },
    },
  }
  // 4
);
