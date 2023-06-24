function intersectionHandler (entries) {
    entries.forEach(entry => {
        let innerIntersectionElement = entry.target.querySelector(".intersection");

        if (entry.isIntersecting) {
            entry.target.style.transform = "none";
            entry.target.style.opacity = "100%";

            if (innerIntersectionElement) {
                innerIntersectionElement.style.transform = "none";
                innerIntersectionElement.style.opacity = "100%";
            }
        }
    });
}

let observer = new IntersectionObserver(intersectionHandler, {
    rootMargin: '0px',
    threshold: 0
});

document
    .querySelectorAll(".music__macbook-advantages p")
    .forEach(item => {
        observer.observe(item);
    });

document
    .querySelectorAll(".music__macbook-advantages div")
    .forEach(item => {
        observer.observe(item);
    });

document
    .querySelectorAll(".program-macos__item")
    .forEach(item => {
        observer.observe(item);
    });

document
    .querySelectorAll(".program-macos__item p")
    .forEach(item => {
        observer.observe(item);
    });


observer.observe(document.querySelector('.music__inspiration_block .music-h3'));
observer.observe(document.querySelector('.music__inspiration_block div'));
observer.observe(document.querySelector('.frameworks .music-h3'));
observer.observe(document.querySelector('.frameworks-recommendations h3'));
observer.observe(document.querySelector('.program-macos h3'));
observer.observe(document.querySelector('.for-creating-tracks h3'));
