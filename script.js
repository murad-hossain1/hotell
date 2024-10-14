var slider = tns({
  container: '.feature_item',
  items: 3,
  nav: false,
  mouseDrag: true,
  responsive: {
      "1200": {
        "items": 3,
      },
      "900": {
          "items": 2,
      },
      "640": {
          "items": 1,
      },
      "400": {
          "items": 1,
      },
  },
  controls: true,
  controlsPosition: "bottom",
  controlsText:  ["prev", "next"],
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
});

var slider = tns({
  container: '.post_entries',
  items: 3,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  mouseDrag: true,
  responsive: {
    "1200": {
        "items": 3,
    },
    "900": {
        "items": 2,
    },
    "640": {
        "items": 1,
    },
    "400": {
        "items": 1,
    },
},
  controls: true,
  controlsPosition: "bottom",
  controlsText:  ["prev", "next"],
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
});

var slider = tns({
  container: '.testimonial-slider',
  items: 3,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  mouseDrag: true,
  responsive: {
    "1200": {
        "items": 3,
    },
    "900": {
        "items": 2,
    },
    "640": {
        "items": 1,
    },
    "400": {
        "items": 1,
    },
  },
  controls: true,
  controlsPosition: "bottom",
  controlsText:  ["prev", "next"],
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
});


var slider = tns({
  container: '.my-slider',
  items: 4,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  mouseDrag: true,
  controls: false,
  responsive: {
    "1200": {
        "items": 4,
    },
    "900": {
        "items": 3,
    },
    "640": {
        "items": 2,
    },
    "400": {
        "items": 1,
    },
  },
});
