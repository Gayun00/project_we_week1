const $button = document.querySelector(".button");
const $main = document.querySelector(".main");
const $cookie = document.querySelector(".cookie");
const $cookieMonster = document.querySelector(".cookiemonster_eat");
const $yum = document.querySelector(".yum");
const $nope = document.querySelector(".nope");
const $notCookies = document.querySelectorAll(".not-cookie");
const $box = document.querySelector(".box-background");
const $info = document.querySelector(".invisible");

$button.addEventListener("click", scrollDown);
$main.addEventListener("click", openSection);
$cookie.addEventListener("dragstart", dragStart);
$cookie.addEventListener("dragend", dragEnd);
$cookieMonster.addEventListener("dragenter", dragEnter);
$cookieMonster.addEventListener("dragover", dragOver);
$cookieMonster.addEventListener("drop", dragDrop)
$notCookies.forEach((notCookie) => {notCookie.addEventListener("dragstart", dragStart)});
$notCookies.forEach((notCookie) => {notCookie.addEventListener("dragend", dragEnd)});

function scrollDown() {
  $main.scrollIntoView({behavior: "smooth"});
  $cookieMonster.style.transform="translateY(-99%)"
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

let isCookie = false;

function dragStart(ev) {
  this.className += 'hold';
  setTimeout(()=> this.className = 'invisible',0)
}

function dragEnd(ev) {
  const checkCookie = ev.target.dataset.cookie;
  checkCookie === "true" ? isCookie=true: isCookie=false;
}

function dragEnter(ev) {
  ev.preventDefault();

}

function dragOver(ev) {
  ev.preventDefault();
}

function dragDrop() {
  setTimeout(()=>{
    if (isCookie === true) {
      yumOrNope($yum)
      $box.style.display="none";
      $info.classList.add("my-info");
      console.log($cookieMonster)
      $cookieMonster.src = "./img/cookie_ate_cookie.png"
    } else {
      yumOrNope($nope)
    }
  },100)
}

function yumOrNope(text) {
  text.classList.remove('hidden');
  setTimeout(()=>{
    text.classList.add('hidden');
  },1000);
}
