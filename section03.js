// window.addEventListener("load", setProjectHeight);
// window.addEventListener("resize", setProjectHeight);
// window.addEventListener("scroll", setProjectHeight);

// function setProjectHeight() {
//   let title = document.querySelector("#project h2");
//   let projects = document.querySelectorAll("#project .projectList");

//   let titleHeight = title.offsetHeight;
//   let newHeight = window.innerHeight - titleHeight;

//   projects.forEach((project) => {
//     project.style.height = `${newHeight}px`;
//   });
// }

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
              .animate({ "margin-left": "0px", opacity: "1" });
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
              .animate({ "margin-right": "0px", opacity: 1 });
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
              .animate({ "margin-left": "-50px", opacity: "0" });
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
              .animate({ "margin-right": "-50px", opacity: 0 });
          });
      }
    }
  });
});

// let subTitles = document.querySelectorAll("#project .projectList .subTitle");

// let subObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active"); // 요소에 active 붙이기
//         subObserver.unobserve(entry.target); // 한 번만 실행
//       }
//     });
//   },
//   {
//     threshold: 0.5, // 화면에 50% 보이면 트리거
//   }
// );

// // 각 subTitle에 observer 적용
// subTitles.forEach((sub) => {
//   subObserver.observe(sub);
// });

// const h2 = document.querySelector("#project h2");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         h2.classList.add("active"); // 화면에 들어오면 색 채움
//       } else {
//         h2.classList.remove("active"); // 화면에서 나가면 색 제거
//       }
//     });
//   },
//   {
//     threshold: 0.5, // 요소가 50% 이상 보일 때
//   }
// );

// observer.observe(h2);
