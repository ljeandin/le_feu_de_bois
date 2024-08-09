function throttle(func, delay) {
    let lastTime = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastTime >= delay) {
            lastTime = now;
            func(...args);
        }
    };
}

// Scroll slider
const slider = document.querySelector(".js-hero-slider");
const sliderWidth = slider.clientWidth;

let lastValidScrollDistance = 0;
let lastScrollY = 0;

document.addEventListener(
    "scroll",
    throttle(() => {
        const bodyHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;

        let currentScrollDistance = window.scrollY;

        let currentScrollDistanceInPercent =
            (currentScrollDistance /
                (bodyHeight - windowHeight)) *
            100;

        // ScrollDelta represents how many percent of the
        // slider will move horizontally while the user scrolls
        // down on the page.
        // The lower it is, the "slower" the slider goes
        let scrollDelta = currentScrollDistanceInPercent;

        // Stop the slider once the last image
        // reaches the right border of the page

        let isRightSideOutOfViewport =
            slider.getBoundingClientRect().right >
            window.innerWidth;

        if (isRightSideOutOfViewport) {
            lastValidScrollDistance = scrollDelta;
        }

        // Cap the scroll distance at the last valid
        // ditance when scrolling down

        let isPageScrolledPastEndOfSlider =
            scrollDelta > lastValidScrollDistance;

        if (isPageScrolledPastEndOfSlider) {
            scrollDelta = lastValidScrollDistance;
        }

        lastScrollY = currentScrollDistance; // Update the last scroll position

        scrollDelta = scrollDelta / 2; // Slow down the slider

        slider.animate(
            {
                transform: `translateX(-${scrollDelta}%)`,
            },
            { duration: 500, fill: "forwards" }
        );
    }, 100)
);
