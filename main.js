const $button = document.querySelector(".button");
const $main = document.querySelector(".main");
const $cookie = document.querySelector(".cookie");
const $cookieMonster = document.querySelector(".cookiemonster_eat");
const $yum = document.querySelector(".yum");

$button.addEventListener("click", scrollDown);
$main.addEventListener("click", openSection);
$cookie.addEventListener("dragstart", dragStart);
// $cookie.addEventListener("drag", dragCookie);
$cookie.addEventListener("dragend", dragEnd);
$cookieMonster.addEventListener("dragenter", dragEnter);
$cookieMonster.addEventListener("dragover", dragOver);
$cookieMonster.addEventListener("drop", dragDrop)

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


function dragStart() {
  this.className += 'hold';
  setTimeout(()=> this.className = 'invisible',0)
}

function dragEnd() {
  console.log("dragEnd")
}

function dragEnter(ev) {
  ev.preventDefault();
  // this.className += 'hovered';
  console.log("enter")
}

function dragOver(ev) {
  ev.preventDefault();
  console.log("over")
}

function dragDrop() {
  $yum.classList.remove('hidden');
  setTimeout(()=>{
    $yum.classList.add('hidden');
  },1000);
}

