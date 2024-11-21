const boxes = document.querySelectorAll(".box");
let currentIndex = 0;

function getIndex(offset) {
  return (currentIndex + offset + boxes.length) % boxes.length;
}

function updateBoxes() {
  if (boxes.length === 0) {
    console.error("No boxes found. Make sure .box elements exist.");
    return;
  }

  boxes.forEach((box) => {
    box.classList.remove("center", "left", "right", "hidden");
  });

  boxes[getIndex(0)].classList.add("center");
  boxes[getIndex(-1)].classList.add("left");
  boxes[getIndex(1)].classList.add("right");
  boxes[getIndex(2)].classList.add("hidden");
}

function previousBox() {
  currentIndex = getIndex(-1);
  updateBoxes();
}

function nextBox() {
  currentIndex = getIndex(1);
  updateBoxes();
}

let autoSlide = setInterval(nextBox, 3000);

document.querySelector(".container").addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

document.querySelector(".container").addEventListener("mouseleave", () => {
  autoSlide = setInterval(nextBox, 3000);
});

updateBoxes();

// window.onscroll = () => {
//   let header = document.querySelector("header");

//   header.classList.toggle("sticky", window.scrollY > 100);
// };
