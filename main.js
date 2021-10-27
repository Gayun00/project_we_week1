const $button = document.querySelector(".button");
const $main = document.querySelector(".main");

$button.addEventListener("click", scrollDown);
$main.addEventListener("click", openSection);

function scrollDown() {
  $main.scrollIntoView({behavior: "smooth"});
}

function openSection(ev) {
  const target = ev.target;
  const $openedSection = document.querySelector(".open");
  if ($openedSection && $openedSection !== target) {
      $openedSection.classList.remove("open");
    target.classList.toggle('open');
  } else {
    target.classList.toggle('open');
  }



}


