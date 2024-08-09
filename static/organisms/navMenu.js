const menuTrigger = document.querySelector(
    ".js-menu-trigger"
);
const navMenu = document.querySelector(".js-nav-menu");

let isMenuHidden = navMenu.classList.contains(
    "nav-menu--hidden"
);

function openMenu() {
    navMenu.classList.remove("nav-menu--hidden");
    setTimeout(() => {
        navMenu.classList.add("nav-menu--open");
    }, 150); // Matches --transition-duration

    menuTrigger.classList.add("nav-menu-trigger--open");

    document.addEventListener("click", handleClickOutside);
    isMenuHidden = false;
}

function closeMenu() {
    navMenu.classList.remove("nav-menu--open");
    setTimeout(() => {
        navMenu.classList.add("nav-menu--hidden");
    }, 150); // Matches --transition-duration

    menuTrigger.classList.remove("nav-menu-trigger--open");

    document.removeEventListener(
        "click",
        handleClickOutside
    );
    isMenuHidden = true;
}

function handleClickOutside(event) {
    if (
        !navMenu.contains(event.target) &&
        !menuTrigger.contains(event.target)
    ) {
        closeMenu();
    }
}

menuTrigger.addEventListener("click", () => {
    if (isMenuHidden) {
        openMenu();
    } else {
        closeMenu();
    }
});
