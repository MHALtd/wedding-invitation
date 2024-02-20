// COUNTDOWN SCRIPT
simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 3, // required
  day: 28, // required
  hours: 8, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

// FIX OFFCANVAS
// const stickyTop = document.querySelector(".sticky-top");
// const offCanvas = document.querySelector(".offcanvas");

// offCanvas.addEventListener("show.bs.offcanvas", function () {
//   stickyTop.style.overflow = "visible";
// });

// offCanvas.addEventListener("hidden.bs.offcanvas", function () {
//   stickyTop.style.overflow = "hidden";
// });

// PAGE SCRIPT VARIABLE
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const bgm = document.querySelector("#bgm");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
let isPlaying = false;

// DISABLE SCROLL
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  // localStorage.setItem("opened", "true");
  playAudio();
}

// if (!localStorage.getItem("opened")) {
//   disableScroll();
// }

disableScroll();

// BGM
function playAudio() {
  bgm.volume = 0.2;
  audioIconWrapper.style.display = "flex";
  bgm.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    bgm.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    bgm.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

// INVITATION GUEST NAME
const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get("g") || "Bapak/Ibu/Saudara/i";
const prons = urlParams.get("p");

const guestContainer = document.querySelector(".hero h4 span");
guestContainer.innerText = `${prons} ${guest}`;

if (!prons) {
  guestContainer.innerText = `${guest}`;
}
