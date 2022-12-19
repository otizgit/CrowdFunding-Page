const book = document.querySelector(".book");
const bookMark = document.querySelector(".bookmark");
const inputs = document.querySelectorAll(".modal-input input");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const overlayTwo = document.querySelector(".overlay2");
const modalDivs = document.querySelectorAll(".modal-div");
const backupMain = document.querySelector(".backup-main");
const close = document.querySelectorAll(".close");
const pledgeBoxes = document.querySelectorAll(".pledge-box");
const check = document.querySelectorAll(".backup2");
const popUp = document.querySelector(".pop-up");
const checkExit = document.querySelector(".check-exit");
const reward = document.querySelectorAll(".reward");
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')

hamburger.addEventListener('click', function(){
  nav.classList.toggle('show-nav')
  overlayTwo.classList.toggle("overlay-pop2");
})

bookMark.addEventListener("click", function () {
  book.innerHTML = "Bookmarked";
  bookMark.classList.add("bookmark-clicked");
  alert("Bookmark successful");
});

backupMain.addEventListener("click", function () {
  modal.classList.add("show-modal");
  overlay.classList.add("overlay-pop");
});

close.forEach(function (closeToggle) {
  closeToggle.addEventListener("click", function () {
    modal.classList.remove("show-modal");
    modal.classList.remove("bamboo-modal");
    overlay.classList.remove("overlay-pop");
    popUp.classList.remove("show-pop");
  });
});

inputs[0].addEventListener("click", function (e) {
  pledgeBoxes[0].classList.add("show-pledge-box");
  pledgeBoxes[1].classList.remove("show-pledge-box");
  pledgeBoxes[2].classList.remove("show-pledge-box");
  modalDivs[0].classList.add("active-modal-div");
  modalDivs[1].classList.remove("active-modal-div");
  modalDivs[2].classList.remove("active-modal-div");
});

inputs[1].addEventListener("click", function () {
  pledgeBoxes[1].classList.add("show-pledge-box");
  pledgeBoxes[0].classList.remove("show-pledge-box");
  pledgeBoxes[2].classList.remove("show-pledge-box");
  modalDivs[1].classList.add("active-modal-div");
  modalDivs[0].classList.remove("active-modal-div");
  modalDivs[2].classList.remove("active-modal-div");
});

inputs[2].addEventListener("click", function () {
  pledgeBoxes[2].classList.add("show-pledge-box");
  pledgeBoxes[0].classList.remove("show-pledge-box");
  pledgeBoxes[1].classList.remove("show-pledge-box");
  modalDivs[2].classList.add("active-modal-div");
  modalDivs[1].classList.remove("active-modal-div");
  modalDivs[0].classList.remove("active-modal-div");
});

check.forEach(function (checkToggle) {
  checkToggle.addEventListener("click", function () {
    modal.classList.remove("show-modal");
    modal.classList.remove("bamboo-modal");
    popUp.classList.add("show-pop");
  });
});

checkExit.addEventListener("click", function () {
  popUp.classList.remove("show-pop");
  overlay.classList.remove("overlay-pop");
});

reward.forEach(function(rewardDiv) {
  rewardDiv.addEventListener('click', function(){
    modal.classList.add("show-modal");
    overlay.classList.add("overlay-pop");
  })
})
