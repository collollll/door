// project 섹션
let h2s = document.querySelectorAll("section h2");

function titleFill() {
  h2s.forEach((i) => {
    let h2Top = i.getBoundingClientRect().top;
    let h2UpPoint = window.innerHeight * 0.6; // 화면 30% 지점

    if (h2Top < h2UpPoint) {
      i.classList.add("active"); // 화면 30% 지점에 도달하면
    } else {
      i.classList.remove("active"); // 위로 올라가면 제거
    }
  });
}

window.addEventListener("scroll", titleFill);
window.addEventListener("resize", titleFill); // 리사이즈 대응

//  project_커서 따라다니기
$(function () {
  $(document).on("mousemove", function (e) {
    $("#cursor").css({ left: e.clientX + "px", top: e.clientY + "px" });
  });

  $(".projectList .contain a").on("mouseenter", function () {
    $("#cursor").addClass("on");
  });
  $(".projectList .contain a").on("mouseleave", function () {
    $("#cursor").removeClass("on");
  });
});

// project_텍스트 박스 안 효과 적용
$(window).on("scroll resize", function () {
  $("#project .projectList").each(function (index) {
    let proListTop = $(this).offset().top - $(window).scrollTop();
    let proListPoint = window.innerHeight * 0.5; // 화면 30%

    let textBox = $(this).find(".textBox");
    let filter = $(this).find(".contain > a");

    if (proListPoint > proListTop && !$(this).hasClass("animated")) {
      $(this).addClass("animated");
      $(this).find(".subTitle").addClass("down");

      if (index % 2 == 0) {
        $(textBox)
          .find("h3")
          .stop(true, true)
          .delay(500)
          .animate({ "margin-left": "0px", opacity: "1" }, function () {
            $(textBox)
              .find("p")
              .stop(true, true)
              .animate({ "margin-left": "0px", opacity: "1" }, function () {
                $(textBox).find(".process").addClass("on");
                $(filter).css({ filter: "brightness(105%)" });
              });
          });
      } else {
        $(textBox)
          .find("h3")
          .stop(true, true)
          .delay(500)
          .animate({ "margin-right": "0px", opacity: 1 }, function () {
            $(textBox)
              .find("p")
              .stop(true, true)
              .animate({ "margin-right": "0px", opacity: 1 }, function () {
                $(textBox).find(".process").addClass("on");
                $(filter).css({ filter: "brightness(105%)" });
              });
          });
      }
    } else if (proListPoint <= proListTop && $(this).hasClass("animated")) {
      $(this).removeClass("animated");
      $(this).find(".subTitle").removeClass("down");

      if (index % 2 == 0) {
        $(textBox)
          .find("h3")
          .stop(true, true)
          .delay(500)
          .animate({ "margin-left": "-50px", opacity: "0" }, function () {
            $(textBox)
              .find("p")
              .stop(true, true)
              .animate({ "margin-left": "-50px", opacity: "0" }, function () {
                $(textBox).find(".process").removeClass("on");
                $(filter).css({ filter: "brightness(70%)" });
              });
          });
      } else {
        $(textBox)
          .find("h3")
          .stop(true, true)
          .delay(500)
          .animate({ "margin-right": "-50px", opacity: 0 }, function () {
            $(textBox)
              .find("p")
              .stop(true, true)
              .animate({ "margin-right": "-50px", opacity: 0 }, function () {
                $(textBox).find(".process").removeClass("on");
                $(filter).css({ filter: "brightness(70%)" });
              });
          });
      }
    }
  });
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
// work 섹션

let workList = document.querySelector("#work .workList");
let cards = document.querySelectorAll("#work .card");
// console.log(card);

let currentAngle = 40; // 초기 각도 (CSS의 초기값과 맞춤)
let cardCount = cards.length; // 카드 개수
let angle = 360 / cardCount; // 카드당 각도 자동 계산

// 카드 위치 자동 설정
cards.forEach((i, index) => {
  let angleFirst = index * angle;
  i.style.transform = `rotateY(${angleFirst}deg) translateZ(-400px)`;
});

let targetRotation = 0; // 목표 회전값
let currentCardIndex = 0; // 현재 카드 인덱스 (0~4)
const totalCards = 5;
let isDragging = false;
let workSection = document.querySelector("#work");
let workWrap = document.querySelector("#work .wrap");
let currentRotation = 0; // 현재 회전 각도 (이게 유일한 기준점)

let hasDragged = false; // 실제로 드래그했는지 체크

// 스크롤 이벤트
let lastScrollRotation = 0; // 마지막 스크롤 회전값 저장

window.addEventListener("scroll", () => {
  //   if (isDragging) return;

  let rect = workSection.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    let sectionHeight = rect.height - window.innerHeight;
    let scrollProgress = Math.abs(rect.top) / sectionHeight;

    // 스크롤 진행도를 회전 각도로 변환
    let scrollRotation = scrollProgress * 360;

    // 스크롤 차이를 현재 각도에 더함 (이어서 회전)
    let rotationDelta = scrollRotation - lastScrollRotation;
    currentRotation += rotationDelta;
    lastScrollRotation = scrollRotation;

    // 72도 단위로 스냅
    let snappedRotation = Math.round(currentRotation / angle) * angle;
    workList.style.transform = `translateZ(500px) rotateX(0deg) rotateY(${snappedRotation}deg)`;
  }
});

// 드래그 이벤트
let startX = 0;
let dragStartRotation = 0;

workWrap.addEventListener("mousedown", (e) => {
  // 🌹카드를 직접 클릭한 경우 드래그 무시
  //   if (e.target.closest(".card")) {
  //     return;
  //   }
  //   hasDragged = false; // 초기화
  //

  isDragging = true;
  startX = e.clientX;
  dragStartRotation = currentRotation; // 현재 각도 저장
  workList.style.transition = "none";
  workWrap.style.cursor = "grabbing";
  e.preventDefault();
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let deltaX = e.clientX - startX;
  let rotationDelta = deltaX * -0.3;

  // 🌹5px 이상 움직였을 때만 드래그로 인정
  //   if (Math.abs(deltaX) > 5) {
  //     hasDragged = true;
  //   }
  //

  // 드래그 시작 각도에서 이어서 회전
  currentRotation = dragStartRotation + rotationDelta;
  workList.style.transform = `translateZ(500px) rotateX(0deg) rotateY(${currentRotation}deg)`;
});

window.addEventListener("mouseup", () => {
  if (!isDragging) return;

  isDragging = false;
  workList.style.transition = "0.5s transform ease-out";
  workWrap.style.cursor = "grab";

  // 🌹실제로 드래그한 경우만 스냅
  //   if (hasDragged) {
  //
  // 가장 가까운 카드로 스냅
  let snappedRotation = Math.round(currentRotation / 72) * 72;
  currentRotation = snappedRotation;

  workList.style.transform = `translateZ(500px) rotateX(0deg) rotateY(${currentRotation}deg)`;
  //   }
});

// work modal
// let scrollTop = 0;

$("#work li").on("click", function () {
  //   $("#work .workModal").css({ display: "block" });
  $("#work .workModal").slideDown(800);

  let i = $(this).index();
  $("#work .workModal .modalText").eq(i).css({ display: "flex" });
  console.log(i);

  //   scrollTop = $(window).scrollTop();
  $("body").addClass("modalOpen");
  // .css({
  //   position: "fixed",
  //   top: -scrollTop + "px",
  //   width: "100%",
  // });
});

$("#work .workModal .close").on("click", function () {
  //   $("#work .workModal").css({ display: "none" });
  $("#work .workModal").slideUp();
  $("body").removeClass("modalOpen");
  // $("#work .workModal .modalText").css({ display: "none" });
  $("#work .workModal .modalText").slideUp();
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

// 일러스트 섹션

// gsap.registerPlugin(ScrollTrigger);
// // let cards = document.querySelectorAll("#design li");

// // gsap.set("#design li:nth-child(1)", {
// //   left: "8%",
// //   top: "-15%",
// //   scale: 0.6,
// // });

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: "#design",
//       start: "20% 30%",
//       end: "+=400%",
//       pin: true,
//       markers: true,
//       // toggleActions: "play none none reverse",
//       scrub: 0.5,
//       invalidateOnRefresh: true, // 추가
//     },
//   })
//   .to(
//     "#design li:nth-child(1)",
//     {
//       opacity: 1,
//       y: -400,
//       x: 50,
//       duration: 2,
//       scale: 1,
//       // ease: "elastic.out(1,0.5)",
//       // ease: "back.out(4)",
//       // ease: "elastic.out(1.2,0.75)",
//       ease: "elastic.out(0.5, 0.3)",
//     },
//     0
//   )
//   .to(
//     "#design li:nth-child(1)",
//     {
//       y: 300,
//       x: 100,
//       scale: 1,
//       duration: 3,
//       // opacity: 0,
//       // ease: "elastic.in(1.2,0.75)",
//       // ease: "elastic.out(0.5, 0.3)",
//       ease: "elastic.out(0.3, 0.2)",

//       onComplete: () => {
//         document.querySelector("#design li:nth-child(1)").classList.add("on");
//         gsap.set("#design li:nth-child(1)", { clearProps: "all" });
//       },
//       //   },
//     },
//     2
//   )
//   .to(
//     "#design li:nth-child(2)",
//     {
//       opacity: 1,
//       y: -200,
//       x: -70,
//       scale: 1.3,
//       duration: 2,
//       ease: "elastic.out(1,0.5)",
//     },
//     0.8
//   )
//   .to("#design li:nth-child(2)", {
//     y: 100,
//     x: -150,
//     scale: 0.8,
//     duration: 3,
//     // opacity: 0,
//     ease: "elastic.out(1,0.5)",

//     onComplete: () => {
//       document.querySelector("#design li:nth-child(2)").classList.add("on");
//       gsap.set("#design li:nth-child(2)", { clearProps: "all" });
//     },
//   })
//   .to(
//     "#design li:nth-child(3)",
//     {
//       opacity: 1,
//       x: -150,
//       y: -400,
//       scale: 1.3,
//       duration: 2,
//       ease: "elastic.out(1.2,0.75)",
//     },
//     1.6
//   )
//   .to("#design li:nth-child(3)", {
//     x: -100,
//     y: -50,
//     scale: 1,
//     duration: 3,
//     // opacity: 0,
//     ease: "elastic.out(1.2,0.75)",

//     onComplete: () => {
//       document.querySelector("#design li:nth-child(3)").classList.add("on");
//       gsap.set("#design li:nth-child(3)", { clearProps: "all" });
//     },
//   })
//   .to(
//     "#design li:nth-child(4)",
//     {
//       opacity: 1,
//       x: 150,
//       y: -400,
//       scale: 1.3,
//       duration: 2,
//       ease: "elastic.out(1.2,0.75)",

//       // ease: "elastic.out(1, 0.5)",
//     },
//     2.4
//   )
//   .to("#design li:nth-child(4)", {
//     x: 250,
//     y: 50,
//     scale: 1,
//     duration: 3,
//     // opacity: 0,
//     ease: "elastic.out(1.2,0.75)",

//     onComplete: () => {
//       document.querySelector("#design li:nth-child(4)").classList.add("on");
//       gsap.set("#design li:nth-child(4)", { clearProps: "all" });
//     },
//   });

gsap.registerPlugin(ScrollTrigger);

// s4
ScrollTrigger.matchMedia({
  "(min-width:821px)": function () {
    gsap.set($("#design li").eq(0), {
      y: "-250vh",
      x: "-5vw",
      scale: 0.6,
      ease: "none",
    });
    gsap.set(
      $("#design li").eq(1),
      { y: "-220vh", x: "10vw", scale: 1.1, ease: "none" },
      "-=95%"
    );
    gsap.set(
      $("#design li").eq(3),
      { y: "-250vh", x: "20vw", scale: 0.4, ease: "none" }, // -200vh 20vw
      "-=90%" // -=85%
    );
    gsap.set(
      $("#design li").eq(2),
      { y: "-200vh", x: "-5vw", scale: 0.9, ease: "none" }, // -200vw 1vw
      "-=85%"
    );
    // gsap.set(
    //   $("#design li").eq(6),
    //   { y: "-150vh", x: "0vw", scale: 0.7, ease: "none" },
    //   "-=85%"
    // );
    gsap.set(
      $("#design li").eq(5),
      { y: "-210vh", x: "0vw", scale: 0.4, ease: "none" }, // -180vh
      "-=85%"
    );
    // gsap.set(
    //   $(".#design li").eq(8),
    //   { y: "-100vh", x: "-10vw", scale: 0.4, ease: "none" },
    //   "-=95%"
    // );
    gsap.set(
      $("#design li").eq(4),
      { y: "-190vh", x: "-30vw", scale: 1, ease: "none" }, // -150vh -20vw
      "-=95%"
    );
    // gsap.set(
    //   $("#design li").eq(7),
    //   { y: "-120vh", x: "5vw", scale: 0.8, ease: "none" },
    //   "-=95%"
    // );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#design",
          start: "top top",
          end: "bottom bottom",
          pin: "#design .pin p",
          pinSpacing: false,
          scrub: 1,
          markers: true,
        },
      })
      .to("#design .pin p", {
        opacity: 0.1,
        duration: 0.1,
      })
      .to($("#design li").eq(0), {
        y: 0,
        x: 0,
        scale: 1,
        ease: "none",

        onComplete: () => {
          document.querySelector("#design li:nth-child(1)").classList.add("on");
          // gsap.set("#design li:nth-child(2)", { clearProps: "all" });
        },
        onReverseComplete: () => {
          document
            .querySelector("#design li:nth-child(1)")
            .classList.remove("on");
        },
      })
      .to(
        $("#design li").eq(1),
        {
          y: 0,
          x: 0,
          scale: 1,
          ease: "none",
          onComplete: () => {
            document
              .querySelector("#design li:nth-child(2)")
              .classList.add("on");
            // gsap.set("#design li:nth-child(2)", { clearProps: "all" });
          },
          onReverseComplete: () => {
            document
              .querySelector("#design li:nth-child(2)")
              .classList.remove("on");
          },
        },
        "-=95%"
      )
      .to(
        $("#design li").eq(3),
        {
          y: 0,
          x: 0,
          scale: 1,
          ease: "none",
          onComplete: () => {
            document
              .querySelector("#design li:nth-child(4)")
              .classList.add("on");
            // gsap.set("#design li:nth-child(2)", { clearProps: "all" });
          },
          onReverseComplete: () => {
            document
              .querySelector("#design li:nth-child(4)")
              .classList.remove("on");
          },
        },
        "-=85%"
      )
      .to(
        $("#design li").eq(2),
        {
          y: 0,
          x: 0,
          scale: 1,
          ease: "none",
          onComplete: () => {
            document
              .querySelector("#design li:nth-child(3)")
              .classList.add("on");
            // gsap.set("#design li:nth-child(2)", { clearProps: "all" });
          },
          onReverseComplete: () => {
            document
              .querySelector("#design li:nth-child(3)")
              .classList.remove("on");
          },
        },
        "-=85%"
      )
      // .to(
      //   $("#design li").eq(6),
      //   {
      //     y: 0,
      //     x: 0,
      //     scale: 1,
      //     ease: "none",
      //     onComplete: () => {
      //       document
      //         .querySelector("#design li:nth-child(7)")
      //         .classList.add("on");
      //       // gsap.set("#design li:nth-child(2)", { clearProps: "all" });
      //     },
      //   },
      //   "-=85%"
      // )
      .to(
        $("#design li").eq(5),
        {
          y: 0,
          x: 0,
          scale: 1,
          ease: "none",
          onComplete: () => {
            document
              .querySelector("#design li:nth-child(6)")
              .classList.add("on");
            // gsap.set("#design li:nth-child(2)", { clearProps: "all" });
          },
          onReverseComplete: () => {
            document
              .querySelector("#design li:nth-child(6)")
              .classList.remove("on");
          },
        },
        "-=85%"
      )
      // .to($(".s4 li").eq(8), { y: 0, x: 0, scale: 1, ease: "none" }, "-=95%")
      .to(
        $("#design li").eq(4),
        {
          y: 0,
          x: 0,
          scale: 1,
          ease: "none",
          onComplete: () => {
            document
              .querySelector("#design li:nth-child(5)")
              .classList.add("on");
            // gsap.set("#design li:nth-child(2)", { clearProps: "all" });
          },
          onReverseComplete: () => {
            document
              .querySelector("#design li:nth-child(5)")
              .classList.remove("on");
          },
        },
        "-=95%"
      )
      // .to($(".s4 li").eq(7), { y: 0, x: 0, scale: 1, ease: "none" }, "-=95%")
      .from($("#design ul"), { opacity: 1 });
  },
  // "(max-width: 820px)": function () {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: "._s._about .s4",
  //         start: "top center+=20%",
  //         toggleActions: "play none none reverse",
  //       },
  //     })
  //     .from("._s._about .s4 .pintxt", { opacity: 0, y: 40, duration: 0.8 })
  //     .from(
  //       "._s._about .s4 .grid",
  //       { opacity: 0, y: 40, duration: 0.8 },
  //       "-=80%"
  //     );
  // },
});
