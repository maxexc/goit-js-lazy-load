const lazyImages = document.querySelectorAll("img"); // img[loading="lazy"]

console.log(lazyImages);

lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log("Picture loaded");
  console.log(evt);
  console.log(evt.target);
  evt.target.classList.add("appear");
}

// https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js
