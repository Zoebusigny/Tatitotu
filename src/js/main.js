var tenses = document.querySelectorAll(".list-des-temps-links button");
tenses.forEach(function (tense) {
  tense.addEventListener("click", function () {
    tense.classList.toggle("is-active");
  });
});
