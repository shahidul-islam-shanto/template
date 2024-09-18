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