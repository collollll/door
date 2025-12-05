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

$(function () {
  $(document).on("mousemove", function (e) {
    $("#cursor").css({ left: e.clientX + "px", top: e.clientY + "px" });
  });

  $(".projectList .contain").on("mouseenter", function () {
    $("#cursor").addClass("on");
  });
  $(".projectList .contain").on("mouseleave", function () {
    $("#cursor").removeClass("on");
  });
});
