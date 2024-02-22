const slides = document.querySelectorAll(".slide");
let counter = 0;
let imageCount = 0;
console.log(slides);
//code to place all the images in a row-wise one after the other along X-axis
slides.forEach((slide, index) => {
  imageCount = index;
  slide.style.left = `${index * 100}%`;
});
//if we want to place all images from top to bottom then we will use bottom value to set the imges

//function will be called when button is clicked
function slideImage() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

function goPrev() {
  counter--;
  if (counter < 0) {
    counter = 0;
    return;
  }
  slideImage();
  console.log("prev clicked");
}
function goNext() {
  counter++;
  if (counter == imageCount+1) {
    counter = imageCount;
    return;
  }
  slideImage();
  console.log("Nextclicked");
}
//steps to do this
//1.first place all the images in row-wise one after the other
//2.now make logic to translate in X-axis by 100% on clicking the buttons
