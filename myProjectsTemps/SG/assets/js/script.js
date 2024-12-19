(function ($) {
  "use strict";

  // loader js
  $(window).on("load", function () {
    $(".fullpage_loader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // fixed menu js
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");

    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // progressbar animation js
  const progressBars = document.querySelectorAll('.progress-bar');
  if (progressBars.length > 0) {
    progressBars.forEach(bar => {
      gsap.fromTo(bar, {
        width: "0%"
      }, {
        width: bar.style.width,
        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {

    // Fade-up effect animation
    $(".content").each(function (i) {
      let target = $(this).find(".fade-up");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top 70%',
          toggleActions: 'play none none none',
          markers: false,
        }
      });

      if (target.length) {
        tl.from(target, {
          opacity: 0,
          y: 60,
          duration: 0.5,
          stagger: 0.2,
        });
      }
    });

    // Split text animation
    let st = $(".split-text");
    if (st.length > 0) {
      gsap.registerPlugin(SplitText);
      st.each(function (index, el) {
        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "tp-split-line"
        });
        gsap.set(el, {
          perspective: 400
        });

        let charsAnimation = {
          opacity: 0,
        };

        if ($(el).hasClass('right')) {
          charsAnimation.x = "50";
        } else if ($(el).hasClass('left')) {
          charsAnimation.x = "-50";
        } else if ($(el).hasClass('up')) {
          charsAnimation.y = "80";
        } else if ($(el).hasClass('down')) {
          charsAnimation.y = "-80";
        }

        gsap.set(el.split.chars, charsAnimation);

        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          x: "0",
          y: "0",
          rotateX: "0",
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
        });
      });
    }

    // Custom hover animations
    var hoverBtns = gsap.utils.toArray(".custom-wrapper-hover");
    const hoverBtnItem = gsap.utils.toArray(".custom-inner-hover");

    hoverBtns.forEach((btn, i) => {
      $(btn).mousemove(function (e) {
        callParallax(e);
      });

      function callParallax(e) {
        parallaxIt(e, hoverBtnItem[i], 40);
      }

      function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        gsap.to(target, 1, {
          x: ((relX - $this.width() / 2) / $this.width()) * movement,
          y: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: Power2.easeOut,
        });
      }

      $(btn).mouseleave(function (e) {
        gsap.to(hoverBtnItem[i], 1, {
          x: 0,
          y: 0,
          ease: Power2.easeOut,
        });
      });
    });

    // Image reveal animation
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none"
        }
      });

      tl.set(container, {
        autoAlpha: 1
      });

      if (container.classList.contains('zoom-out')) {
        tl.from(image, 1.5, {
          scale: 1.4,
          ease: Power2.out
        });
      } else if (container.classList.contains('left') || container.classList.contains('right')) {
        let xPercent = container.classList.contains('left') ? -100 : 100;
        tl.from(container, 1.5, {
          xPercent,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          xPercent: -xPercent,
          scale: 1,
          delay: -1.5,
          ease: Power2.out
        });
      }
    });
  });

  /* Odometer Activeate js */
  $('.odometer').appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // Magnific popup js
  $(".parent-container").magnificPopup({
    delegate: ".gallery-popup",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // video popup js
  $('.vidplay').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  // blog one image change js
  $(document).ready(function () {
    $('.blog-item').hover(function () {
      $('.blog-item').removeClass('blog-active');
      $(this).addClass('blog-active');
    });
  });

  // Testimonial slider js
  $(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  // Testimonial three slider js
  $(".testimonial-three-slider-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  // Testimonial four text slider js
  $(".tes-four-text-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    asNavFor: ".tes-four-img-slider",
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  // Testimonial four image slider js
  $(".tes-four-img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    asNavFor: ".tes-four-text-slider",
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  // Projects four slider js
  $(".projects-four-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    centerMode: true,
    centerPadding: "100px",
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "50px",
      }
    }]
  });

  // back to top js
  let btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
        scrollTop: 0,
      },
        1000
      );
    } else {
      $("html, body").animate({
        scrollTop: 0,
      },
        0
      );
    }
  });

  // Mobile menu js start
  $(".mobile-topbar .bars").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(".sub-mobile-menu ul").not($(this).siblings("ul")).slideUp("100");
    $(".sub-mobile-menu a .fas").not($(this).find(".fas")).removeClass("fa-chevron-up").addClass("fa-chevron-down");
    $(this).siblings("ul").slideToggle("100");
    $(this).find(".fas").toggleClass("fa-chevron-down fa-chevron-up");
  });

})(jQuery);