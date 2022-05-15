$(document).ready(function () {

  import 'bs5-lightbox';
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
    console.log(this);
  })


});