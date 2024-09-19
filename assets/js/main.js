// navBar section
const navBer = document.querySelector(".navber-nav");
const menuBar = document.getElementById("menu-btn");
const closesBtn = document.getElementById("closes-navber");

menuBar.addEventListener("click", function () {
  navBer.classList.add("active");
  console.log(navBer);
});

closesBtn.addEventListener("click", function () {
  navBer.classList.remove("active");
});





// / Odometer Init
$(document).ready(function () {
  $(".odometer").each(function () {
    var $odometerElement = $(this);
    var elementValue = Number($odometerElement.attr("data-counter-value"));
    var od = new Odometer({
      el: $odometerElement[0],
      value: 0,
      format: "",
      theme: "digital",
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          od.update(elementValue);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe($odometerElement.parent()[0]);
  });
});
