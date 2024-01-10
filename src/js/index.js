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

let counter = 0;

function hideAllNavbars() {
  for (const { nav } of Object.values(navs)) {
    if (nav) {
      nav.style.display = "none";
    }
  }
}

function initNavBar() {
  for (const { a, nav } of Object.values(navs)) {
    a.addEventListener("mouseover", () => {
      hideAllNavbars();
      if (nav) {
        const mainNav = document.getElementById("main-nav");
        mainNav.classList.toggle("main-nav-sub-nav-open");
        mainNav.style.borderRadius = "0.25rem 0.25rem 0px 0px";
        nav.style.display = "flex";
        nav.style.borderRadius = "0px 0px 0.25rem 0.25rem";
      }
    });

    if (nav) {
      nav.addEventListener("mouseleave", () => {
        const mainNav = document.getElementById("main-nav");
        mainNav.style.borderRadius = "0.25rem";
        hideAllNavbars();
      });
    }
  }
}

function addNote() {
  const newNote = document.createElement("section");
  const quoteDiv = document.createElement("p");
  const paraDiv = document.createElement("p");
  const choices = ["quote-three", "quote-two", "quote-one"];
  const choice = choices[counter];
  counter = (counter + 1) % choices.length;
  const newContent = document.createTextNode("❝");

  const noteContent = prompt("Write your note");

  if (noteContent === null || noteContent.trim() === "") {
    return;
  }

  newNote.appendChild(quoteDiv);
  newNote.appendChild(paraDiv);

  quoteDiv.appendChild(newContent);
  quoteDiv.classList.add(choice);

  paraDiv.classList.add("quote-content");

  paraDiv.appendChild(document.createTextNode(noteContent));

  const currentDiv = document.getElementById("section-note");
  currentDiv.insertAdjacentElement("afterbegin", newNote);
}

const button = document.getElementById("add-note");
button.addEventListener("click", addNote);

initNavBar();
