const navs = {
    school: {
        a: document.getElementById("school"),
        nav: document.getElementById("school-nav"),
    },
    project: {
        a: document.getElementById("project"),
        nav: document.getElementById("project-nav"),
    },
    studyAreas: {
        a: document.getElementById("study-areas"),
        nav: document.getElementById("study-areas-nav"),
    },
    resources: {
        a: document.getElementById("resources"),
        nav: document.getElementById("resources-nav"),
    },
    other: {
        a: document.getElementById("other"),
        nav: document.getElementById("other-nav"),
    },
};

const mainNav = document.getElementById("main-nav");
const sectionNote = document.getElementById("section-note");
const burger = document.getElementById("mobile-burger");
const button = document.getElementById("add-note");

let counter = 0;

/**
 * Hide all sub-navigation bars
 */
function hideAllNavbars() {
    Object.values(navs).forEach(({ nav }) => {
        nav?.style.setProperty("display", "none");
    });
}

/**
 * Display the selected sub-navigation bar
 * @param {HTMLElement} nav
 */
function displayNavbar(nav) {
    if (!nav) return;

    mainNav?.classList.add("main-nav-sub-nav-open");
    mainNav?.style.setProperty("border-radius", "0.25rem 0.25rem 0 0");

    nav.style.setProperty("display", "flex");
    nav.style.setProperty("border-radius", "0 0 0.25rem 0.25rem");
}

/**
 * Initialize navigation bar functionality
 */
function initNavBar() {
    Object.values(navs).forEach(({ a, nav }) => {
        a?.addEventListener("mouseenter", () => {
            hideAllNavbars();
            displayNavbar(nav);
        });

        nav?.addEventListener("mouseleave", () => {
            mainNav?.style.setProperty("border-radius", "0.25rem");
            hideAllNavbars();
        });
    });
}

/**
 * Add a new note to the document
 */
function addNote() {
    const noteContent = prompt("Write your note");

    if (!noteContent?.trim()) return;

    const newNote = document.createElement("section");
    const quoteDiv = document.createElement("p");
    const paraDiv = document.createElement("p");
    const choices = ["quote-three", "quote-two", "quote-one"];
    const choice = choices[counter];

    counter = (counter + 1) % choices.length;

    quoteDiv.classList.add(choice);
    quoteDiv.textContent = "❝";

    paraDiv.classList.add("quote-content");
    paraDiv.textContent = noteContent;

    newNote.append(quoteDiv, paraDiv);

    sectionNote?.insertAdjacentElement("afterbegin", newNote);
}

/**
 * Toggle the mobile menu
 */
function toggleMobileMenu() {
    burger?.classList.toggle("mobile-burger-transition");

    const isOpen = burger?.classList.contains("mobile-burger-transition");
    mainNav?.style.setProperty("display", isOpen ? "flex" : "none");

    if (!isOpen) hideAllNavbars();
}

// Event Listeners
button?.addEventListener("click", addNote);
burger?.addEventListener("click", toggleMobileMenu);

// Initialize nav bar on page load
initNavBar();
