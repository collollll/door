// work 섹션

let workList = document.querySelector("#work .workList");
let card = document.querySelectorAll("#work .card");
console.log(card);

let currentAngle = 40; // 초기 각도 (CSS의 초기값과 맞춤)
let cardCount = card.length; // 카드 개수
let angle = 360 / cardCount; // 카드당 각도 자동 계산

// 카드 위치 자동 설정
card.forEach((i, index) => {
  let angleFirst = index * angle;
  i.style.transform = `rotateY(${angleFirst}deg) translateZ(-250px)`;
});

// 스크롤 시 회전

let currentRotation = 0;
let baseRotation = 0; // 스크롤 시작 시점의 기본값

window.addEventListener("scroll", () => {
  let workSection = document.querySelector("#work");
  let rect = workSection.getBoundingClientRect();
  // const windowHeight = window.innerHeight;

  // work 섹션이 화면에 보이는 동안만 작동
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    // // 섹션이 화면을 통과하는 진행도 (0 ~ 1)
    // let progress = 1 - rect.top / window.innerHeight;
    // progress = Math.max(0, Math.min(1, progress)); // 0 ~ 1 클램프

    // // 회전 속도 조절 (180도, 360도, 720도 등)
    // let scrollRotation = progress * 180;

    // currentRotation을 스크롤 값으로 업데이트 ⭐
    // currentRotation = baseRotation + scrollRotation;

    if (!isDragging) {
      // 드래그 중이 아닐 때만 스크롤 적용
      // 섹션 내에서 스크롤한 양 계산
      let sectionScrolled = Math.abs(rect.top); // 0부터 시작
      let maxScroll = rect.height - window.innerHeight; // 최대 스크롤 가능 거리

      // 진행도 계산 (0 ~ 1)
      let progress = sectionScrolled / maxScroll;

      // 360도 회전 (한 바퀴)
      currentRotation = progress * 180;

      workList.style.transform = `translateZ(500px) rotateX(0deg) rotateY(${currentRotation}deg)`;
    }
  }
});

// 카드 누르면 이동하기

// card.forEach((i, index) => {
//   i.addEventListener("click", () => {
//     // 클릭한 카드가 정면(40도)에 오도록 회전
//     // let targetAngle = 40 - index * angle;
//     let targetAngle = -(index * angle);

//     // let diff = ((to - from + 180) % 360) - 180;
//     // return from + diff;
//     // 최단 경로 계산 (음수 처리 개선)
//     let diff = targetAngle - currentRotation;
//     diff = ((diff + 180) % 360) - 180;
//     if (diff < -180) diff += 360; // 음수 모듈로 보정

//     currentRotation += diff;

//     // 새로운 기본값으로 설정!
//     // baseRotation = currentRotation;

//     workList.style.transform = `translateZ(500px) rotateX(0deg) rotateY(${currentRotation}deg)`;
//   });
// });

// 마우스 드래그 이벤트

let isDragging = false;
let startX = 0;
let dragRotation = 0;
// let currentRotation = 0;
let isInCarousel = false; // 캐러셀 영역에 있는지
let carouselProgress = 0; // 캐러셀 회전 진행도 (0~1)

workList.addEventListener("mousedown", (e) => {
  // if (!isInCarousel) return;
  isDragging = true;
  startX = e.clientX;
  dragRotation = currentRotation;
  workList.style.transition = "none"; // 드래그 중 애니메이션 끄기

  e.preventDefault();
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let deltaX = e.clientX - startX;
  let rotationDelta = deltaX * -0.5; // 민감도 조절

  currentRotation = dragRotation + rotationDelta;

  workList.style.transform = `translateZ(500px) rotateX(0deg) rotateY(${currentRotation}deg)`;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
  workList.style.transition = ""; // 애니메이션 복원
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

gsap.registerPlugin(ScrollTrigger);
// let cards = document.querySelectorAll("#design li");

// gsap.set("#design li:nth-child(1)", {
//   left: "8%",
//   top: "-15%",
//   scale: 0.6,
// });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#design",
      start: "20% 30%",
      end: "+=400%",
      pin: true,
      markers: true,
      toggleActions: "play none none reverse",
      scrub: 0.5,
      invalidateOnRefresh: true, // 추가
    },
  })
  .to(
    "#design li:nth-child(1)",
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
    "#design li:nth-child(1)",
    {
      y: 200,
      x: 100,
      scale: 1,
      duration: 3,
      // opacity: 0,
      ease: "elastic.in(1.2,0.75)",

      onComplete: () => {
        document
          .querySelector("#design li:nth-child(1)")
          .classList.remove("on");
        gsap.set("#design li:nth-child(1)", { clearProps: "all" });
      },
      //   },
    },
    2
  )
  .to(
    "#design li:nth-child(2)",
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
  .to("#design li:nth-child(2)", {
    y: 100,
    x: -150,
    scale: 0.8,
    duration: 3,
    opacity: 0,
    ease: "elastic.out(1,0.5)",

    onComplete: () => {
      document.querySelector("#design li:nth-child(2)").classList.remove("on");
      gsap.set("#design li:nth-child(2)", { clearProps: "all" });
    },
  })
  .to(
    "#design li:nth-child(3)",
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
  .to("#design li:nth-child(3)", {
    x: -100,
    y: -50,
    scale: 1,
    duration: 3,
    opacity: 0,
    onComplete: () => {
      document.querySelector("#design li:nth-child(3)").classList.remove("on");
      gsap.set("#design li:nth-child(3)", { clearProps: "all" });
    },
  })
  .to(
    "#design li:nth-child(4)",
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
  .to("#design li:nth-child(4)", {
    x: 250,
    y: 50,
    scale: 1,
    duration: 3,
    opacity: 0,
    onComplete: () => {
      document.querySelector("#design li:nth-child(4)").classList.remove("on");
      gsap.set("#design li:nth-child(4)", { clearProps: "all" });
    },
  });
