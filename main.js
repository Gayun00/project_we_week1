const $button = document.querySelector(".button");
const $main = document.querySelector(".main");
const $cookie = document.querySelector(".cookie");

$button.addEventListener("click", scrollDown);
$main.addEventListener("click", openSection);
$cookie.addEventListener("dragstart", dragStart)
$cookie.addEventListener("drag", dragCookie)
$cookie.addEventListener("dragend", dragEnd)

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

function dragCookie(ev) {
  const x = ev.offsetX;
  const y = ev.offsetY;
  console.log(x,y)
  $cookie.style.left=x;
  $cookie.style.top=y;
}

function dragStart() {
  this.className += 'hold';
  setTimeout(()=> this.className = 'invisible',0)
}

function dragEnd() {
  console.log('end')
}

