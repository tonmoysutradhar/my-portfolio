window.onload = () => {
  // $(selector).countMe(delay,speed)
  try {
    $(".counter_box1").countMe(100, 200);
    $(".counter_box2").countMe(100, 200);
    $(".counter_box3").countMe(100, 200);
    $(".counter_box4").countMe(100, 200);
  } catch (error) {}

  // Configure your options
  try {
    new Filterizr(".filter-container", {});
  } catch (error) {
    console.log(error);
  }

  try {
    $(".owl-carousel").owlCarousel({
      items: 2,
      dots: true,
      // nav: true,
      autoplay: true,
      animateOut: "animate__backOutLeft",
      loop: true,
      navText: [
        '<button class="my_banner_nav">prev</button>',
        "<button>next</button>",
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
