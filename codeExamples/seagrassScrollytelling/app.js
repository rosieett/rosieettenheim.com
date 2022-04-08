document.addEventListener('DOMContentLoaded', () => {

  let textBoxes = document.querySelectorAll('.box');
  let textBoxArray = Array.from(textBoxes);

  let images = document.querySelectorAll('.imgFade');
  let imagesArray = Array.from(images);

  window.addEventListener('scroll', (event) => {

    let viewportHeight = window.innerHeight; //the window height is what you see
    let scrollCenter = viewportHeight / 2; //how many pixels down from the top of the page we've scrolled

    let textBoxIndex = textBoxArray.findIndex(box => {
      let rect = box.getBoundingClientRect();


      if (rect.top <= scrollCenter && rect.bottom >= 0) {
        return true;
      }

    });
    
    if (textBoxIndex !== -1) {
      let activeImage = imagesArray[textBoxIndex];
      imagesArray.forEach(img => img.classList.remove('active'));
      activeImage.classList.add('active');
      
      // Remove the initial class if it exists
      if (activeImage.classList.contains('active-initial')) {
          activeImage.classList.remove('active-initial');
      }
    }

  })
});

