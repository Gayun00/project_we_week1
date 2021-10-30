const $cookieMonsterGreet = document.querySelector(".cookie_monster_greet");
const $button = document.querySelector(".button");
const $main = document.querySelector(".main");
const $cookie = document.querySelector(".cookie");
const $guide = document.querySelector(".guide");
const $cookieMonster = document.querySelector(".cookiemonster_eat");
const $yum = document.querySelector(".yum");
const $nope = document.querySelector(".nope");
const $notCookies = document.querySelectorAll(".not-cookie");
const $box = document.querySelector(".box-background");
const $info = document.querySelector(".invisible");
const $articles = document.querySelectorAll(".article");

$cookieMonsterGreet.addEventListener("click", scrollDown);
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
  if(target.className === "article") return;
  const clickedSectionNum = target.dataset.section;
  const $openedSection = document.querySelector(".open");
  const $clickedArticle = document.querySelector(`article[data-article="${clickedSectionNum}"]`);

  if ($openedSection && $openedSection !== target) {
    $openedSection.classList.remove("open");
    target.classList.toggle('open');

    const openedSectionNum = $openedSection.dataset.section;
    const $openedArticle = document.querySelector(`article[data-article="${openedSectionNum}"]`)

    $openedArticle.classList.add("hidden")
    $clickedArticle.classList.toggle("hidden")

  } else {
    target.classList.toggle('open');
    $clickedArticle.classList.toggle("hidden")
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
      yumOrNope($yum);
      $box.style.display="none";
      $guide.innerText = "저에 대해 소개할게요!"
      $info.classList.add("my-info");
      $cookieMonster.src = "./img/cookie_ate_cookie.png";
    } else {
      yumOrNope($nope);
      $cookieMonster.src = "./img/nope_head.png";
      setTimeout(()=>{
        $cookieMonster.src = "./img/cookie_monster_eat.png";
      }, 1000);
    }
  },100);
};

function yumOrNope(text) {
  text.classList.remove('hidden');
  setTimeout(()=>{
    text.classList.add('hidden');
  },1000);
}
