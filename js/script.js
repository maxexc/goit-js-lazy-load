const lazyImages = document.querySelectorAll("img"); // img[loading="lazy"]

console.log(lazyImages);

lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log("Picture loaded");
  //   console.log(evt);
  console.log(evt.target);
  evt.target.classList.add("appear");
}

// https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js

if ("loading" in HTMLImageElement.prototype) {
  console.log("Browser support LazyLoad))");
  // supported in browser

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  console.log("Browser does not support LazyLoad!");
  // fetch polyfill/third-party library

  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";
  console.log(script);

  document.body.appendChild(script);
}
