var universal_nav_toggled = false;
$("#universal_nav_toggle").on("click", function() {
  "use strict";
  universal_nav_toggled = !universal_nav_toggled;
});

$(document).on("scroll", function() {
  "use strict";
  if ($(document).scrollTop() > 0) {
    $("#universal_nav_sticky").hide();
    if (universal_nav_toggled === true) {
      $("#universal_nav_toggle").trigger("click");
    }
  }
  if ($(document).scrollTop() == 0) {
    universal_nav_toggled = false;
    $("#universal_nav_sticky").slideDown("fast");
  }
});

$(document).ready(function() {
  ("use strict");
  // Open External links in a new tab
  $("a").each(function() {
    var a = new RegExp("/" + window.location.host + "/");
    if (!a.test(this.href)) {
      if ($(this).attr("target") != "_self") {
        $(this).attr("target", "_blank");
      }
    }
  });

  // Clipboard JS
  if ($("div.highlight").length > 0) {
    $("div.highlight").each(function(index) {
      var uniqueId = "highlight" + index;
      $(this).attr("id", uniqueId);
      var copyBtn =
        '<button id="copyBtn' +
        index +
        '" data-tooltip data-position="left" data-alignment="center" data-placement="left" title="Copy to Clipboard" class="btn copyBtn" data-clipboard-target="#' +
        uniqueId +
        '">';
      copyBtn +=
        '<img src="https://clipboardjs.com/assets/images/clippy.svg" width="13" alt="Copy to clipboard"></button>';
      $(this).append(copyBtn);
      (function() {
        new ClipboardJS("#copyBtn" + index);
      })();
    });
    $(".copyBtn").foundation(); // initialize all tooltips on the page.
  }

  // Owl Carousel Instantiation
  if ($(".owl-carousel.header_carousel").length > 0) {
    $(".owl-carousel.header_carousel").owlCarousel({
      dots: true,
      slideSpeed: 300,
      autoplayTimeout: 5000,
      rewindSpeed: 500,
      rewind: true,
      items: 1,
      autoplay: true,
      responsiveClass: true,
      lazyLoad: true,
      lazyLoadEager: 0
    });
  }
  // Owl Carousel Instantiation
  if ($(".owl-carousel.slider-block").length > 0) {
    $(".owl-carousel.slider-block").each(function(index) {
      // Set Default values for the responsive items
      var xs_items = 1;
      var sm_items = 2;
      var md_items = 3;
      var lg_items = 4;
      var seconds_per_slide = 5000;
      var dots = false;
      var nav = true;

      if (typeof $(this).data("xs-number") !== "undefined") {
        var xs_items = $(this).data("xs-number");
      }
      if (typeof $(this).data("sm-number") !== "undefined") {
        var sm_items = $(this).data("sm-number");
      }
      if (typeof $(this).data("md-number") !== "undefined") {
        var md_items = $(this).data("md-number");
      }
      if (typeof $(this).data("lg-number") !== "undefined") {
        var lg_items = $(this).data("lg-number");
      }
      if (typeof $(this).data("seconds-per-slide") !== "undefined") {
        var seconds_per_slide = $(this).data("seconds-per-slide") * 1000;
      }
      if (typeof $(this).data("dots") !== "undefined") {
        var dots = $(this).data("dots");
      }
      if (typeof $(this).data("nav") !== "undefined") {
        var nav = $(this).data("nav") * 1000;
      }

      $(this).owlCarousel({
        nav: nav,
        dots: dots,
        slideSpeed: 300,
        autoplayTimeout: seconds_per_slide,
        rewindSpeed: 500,
        rewind: true,
        autoplay: true,
        responsiveClass: true,
        lazyLoad: true,
        lazyLoadEager: 0,
        responsive: {
          // breakpoint from 0 up
          0: {
            items: xs_items
          },
          // breakpoint from 480 up
          1000: {
            items: sm_items
          },
          // breakpoint from 768 up
          1200: {
            items: md_items
          },
          1400: {
            items: lg_items
          }
        }
      });
    });
  }
});
