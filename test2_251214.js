//
//
//
//
//

// let currentRotation = 0;
// let baseRotation = 0; // 스크롤 시작 시점의 기본값

// // 마우스 드래그 이벤트
// let isDragging = false;
// let startX = 0;
// let dragRotation = 0;
// let dragStartRotation = 0;
// // let currentRotation = 0;
// let isInCarousel = false; // 캐러셀 영역에 있는지
// let carouselProgress = 0; // 캐러셀 회전 진행도 (0~1)

// let workWrap = document.querySelector("#work .wrap"); // wrap 선택

// workWrap.addEventListener("mousedown", (e) => {
//   // if (!isInCarousel) return;
//   isDragging = true;
//   startX = e.clientX;
//   dragRotation = currentRotation; // 드래그 시작할 때 현재 각도 저장

//   dragStartRotation = currentRotation; // 현재 보고 있는 카드 기준

//   workList.style.transition = "none"; // 드래그 중 애니메이션 끄기

//   e.preventDefault();
// });

// window.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;

//   let deltaX = e.clientX - startX;
//   let rotationDelta = deltaX * -0.5; // 민감도 조절

//   currentRotation = dragRotation + rotationDelta;

//   workList.style.transform = `rotateY(${currentRotation}deg)`;
// });

// window.addEventListener("mouseup", () => {
//   if (!isDragging) return;

//   isDragging = false;
//   workList.style.transition = ""; // 애니메이션 복원

//   // 드래그 끝나면 가장 가까운 카드(72도 단위)로 스냅
//   let nearestCard = Math.round(currentRotation / 72) * 72;
//   currentRotation = nearestCard;

//   workList.style.transform = `rotateY(${currentRotation}deg)`;

//   // 드래그 후 스크롤 위치도 현재 회전값에 맞춰 동기화
//   syncScrollToRotation();
// });

// // 스크롤 조정
// let currentRotation = 0;
// let lastScrollY = 0;
// let workSection = document.querySelector("#work");

// window.addEventListener("scroll", () => {
//   if (isDragging) return; // 드래그 중에는 스크롤 무시
//   let rect = workSection.getBoundingClientRect();

//   // 섹션이 화면에 보일 때만 작동
//   if (rect.top < window.innerHeight && rect.bottom > 0) {
//     // 전체 스크롤 가능 거리
//     let sectionHeight = rect.height - window.innerHeight;

//     // 현재 스크롤 진행도 (0 ~ 1)
//     let scrollProgress = Math.abs(rect.top) / sectionHeight;

//     // 한 바퀴(360도)를 기준으로 회전
//     let targetRotation = scrollProgress * 360;

//     // 72도(카드 1개) 단위로 스냅
//     let snappedRotation = Math.round(targetRotation / 72) * 72;

//     // 회전값이 바뀔 때만 업데이트 (부드러운 전환)
//     if (snappedRotation !== currentRotation) {
//       currentRotation = snappedRotation;
//       workList.style.transform = `rotateY(${currentRotation}deg)`;
//     }
//   }
// });

// // 드래그 후 스크롤 위치 동기화 함수
// function syncScrollToRotation() {
//   let rect = workSection.getBoundingClientRect();
//   let sectionHeight = rect.height - window.innerHeight;

//   // 현재 회전값을 스크롤 진행도로 변환 (0~1)
//   let rotationProgress = (currentRotation % 360) / 360;

//   // 해당 진행도에 맞는 스크롤 위치 계산
//   let targetScrollY = workSection.offsetTop + sectionHeight * rotationProgress;

//   // 부드럽게 스크롤 이동
//   window.scrollTo({
//     top: targetScrollY,
//     behavior: "smooth",
//   });
// }
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

// 스크롤 시 회전

// let currentRotation = 0;
// let baseRotation = 0; // 스크롤 시작 시점의 기본값
let targetRotation = 0; // 목표 회전값
let currentCardIndex = 0; // 현재 카드 인덱스 (0~4)
const totalCards = 5;

// 💋🌹
// window.addEventListener("scroll", () => {
//   let workSection = document.querySelector("#work");
//   let rect = workSection.getBoundingClientRect();
//   // const windowHeight = window.innerHeight;

//   // work 섹션이 화면에 보이는 동안만 작동
//   if (rect.top < window.innerHeight && rect.bottom > 0) {
//     // // 섹션이 화면을 통과하는 진행도 (0 ~ 1)
//     // let progress = 1 - rect.top / window.innerHeight;
//     // progress = Math.max(0, Math.min(1, progress)); // 0 ~ 1 클램프

//     // // 회전 속도 조절 (180도, 360도, 720도 등)
//     // let scrollRotation = progress * 180;

//     // currentRotation을 스크롤 값으로 업데이트 ⭐
//     // currentRotation = baseRotation + scrollRotation;

//     if (!isDragging) {
//       // 드래그 중이 아닐 때만 스크롤 적용
//       // 섹션 내에서 스크롤한 양 계산
//       let sectionScrolled = Math.abs(rect.top); // 0부터 시작
//       let maxScroll = rect.height - window.innerHeight; // 최대 스크롤 가능 거리

//       // 진행도 계산 (0 ~ 1)
//       let progress = sectionScrolled / maxScroll;

//       // 어느 카드를 보여줄지 계산 (0, 1, 2, 3, 4)
//       let cardIndex = Math.floor(progress * totalCards);
//       cardIndex = Math.min(cardIndex, totalCards - 1); // 최대값 제한

//       // 360도 회전 (한 바퀴)
//       currentRotation = progress * 180;

//       workList.style.transform = `translateZ(500px) rotateX(0deg) rotateY(${currentRotation}deg)`;
//     }
//   }
// });
// 💋🌹

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
let dragStartRotation = 0;
// let currentRotation = 0;
let isInCarousel = false; // 캐러셀 영역에 있는지
let carouselProgress = 0; // 캐러셀 회전 진행도 (0~1)

let workWrap = document.querySelector("#work .wrap"); // wrap 선택

workWrap.addEventListener("mousedown", (e) => {
  // if (!isInCarousel) return;
  isDragging = true;
  startX = e.clientX;
  dragRotation = currentRotation; // 드래그 시작할 때 현재 각도 저장

  dragStartRotation = currentRotation; // 현재 보고 있는 카드 기준

  workList.style.transition = "none"; // 드래그 중 애니메이션 끄기

  e.preventDefault();
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let deltaX = e.clientX - startX;
  let rotationDelta = deltaX * -0.5; // 민감도 조절

  currentRotation = dragRotation + rotationDelta;

  workList.style.transform = `rotateY(${currentRotation}deg)`;
});

window.addEventListener("mouseup", () => {
  if (!isDragging) return;

  isDragging = false;
  workList.style.transition = ""; // 애니메이션 복원

  // 드래그 끝나면 가장 가까운 카드(72도 단위)로 스냅
  let nearestCard = Math.round(currentRotation / 72) * 72;
  currentRotation = nearestCard;

  workList.style.transform = `rotateY(${currentRotation}deg)`;

  // 드래그 후 스크롤 위치도 현재 회전값에 맞춰 동기화
  syncScrollToRotation();
});

// 스크롤 조정
let currentRotation = 0;
let lastScrollY = 0;
let workSection = document.querySelector("#work");

window.addEventListener("scroll", () => {
  if (isDragging) return; // 드래그 중에는 스크롤 무시
  let rect = workSection.getBoundingClientRect();

  // 섹션이 화면에 보일 때만 작동
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    // 전체 스크롤 가능 거리
    let sectionHeight = rect.height - window.innerHeight;

    // 현재 스크롤 진행도 (0 ~ 1)
    let scrollProgress = Math.abs(rect.top) / sectionHeight;

    // 한 바퀴(360도)를 기준으로 회전
    let targetRotation = scrollProgress * 360;

    // 72도(카드 1개) 단위로 스냅
    let snappedRotation = Math.round(targetRotation / 72) * 72;

    // 회전값이 바뀔 때만 업데이트 (부드러운 전환)
    if (snappedRotation !== currentRotation) {
      currentRotation = snappedRotation;
      workList.style.transform = `rotateY(${currentRotation}deg)`;
    }
  }
});

// 드래그 후 스크롤 위치 동기화 함수
function syncScrollToRotation() {
  let rect = workSection.getBoundingClientRect();
  let sectionHeight = rect.height - window.innerHeight;

  // 현재 회전값을 스크롤 진행도로 변환 (0~1)
  let rotationProgress = (currentRotation % 360) / 360;

  // 해당 진행도에 맞는 스크롤 위치 계산
  let targetScrollY = workSection.offsetTop + sectionHeight * rotationProgress;

  // 부드럽게 스크롤 이동
  window.scrollTo({
    top: targetScrollY,
    behavior: "smooth",
  });
}
