function intersectionHandler (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = "none";
            entry.target.style.opacity = "100%";
        }
    });
}

let observer = new IntersectionObserver(intersectionHandler, {
    rootMargin: '0px',
    threshold: 0
});

observer.observe(document.querySelector('.music__inspiration_block .music-h3'));
