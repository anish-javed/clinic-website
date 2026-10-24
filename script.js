// Phone menu: tap the button to open or close the menu
var menuButton = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
  });
}

// FAQ: click a question to show or hide its answer
var questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    var item = question.parentElement;
    var answer = item.querySelector(".faq-answer");
    var isOpen = item.classList.toggle("open");
    question.setAttribute("aria-expanded", isOpen);
    answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0";
  });
});

// Show the current year in the footer
var year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
