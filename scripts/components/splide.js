document.addEventListener('DOMContentLoaded', function () {
  var elms = document.getElementsByClassName('splide');

  for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i], {
      autoWidth: true,
      autoHeight: true,
      autoplay: false,
      interval: 3000,
      pauseOnHover: true,
      resetProgress: true,
      arrows: false,
      pagination: false,
      flickPower: 400,
      flickMaxPages: 1,
      width: '100%',
      type: 'loop',
      drag: 'free',
      snap: true,
      perPage: 1,
      speed: 400,
      rewind: false,
      wheel: false,
    }).mount();
  }
});