function preLoadImage(img) {
    src = img.getAttribute("data-src");
    img.src = src;
}

const images = document.querySelectorAll("[data-src]");

imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

imageObserver = new IntersectionObserver((entry, imageObserver) => {
    entry.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preLoadImage(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, imageOptions)

images.forEach(image => {
    imageObserver.observe(image);
})