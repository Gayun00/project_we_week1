const $button = document.querySelector(".button");
const $main = document.querySelector(".main");
const $cookie = document.querySelector(".cookie");
const $cookieMonster = document.querySelector(".cookiemonster_eat");
const $yum = document.querySelector(".yum");
const $nope = document.querySelector(".nope");
const $notCookies = document.querySelectorAll(".not-cookie");

$button.addEventListener("click", scrollDown);
$main.addEventListener("click", openSection);
$cookie.addEventListener("dragstart", dragStart);
// $cookie.addEventListener("drag", dragCookie);
$cookie.addEventListener("dragend", dragEnd);
$cookieMonster.addEventListener("dragenter", dragEnter);
$cookieMonster.addEventListener("dragover", dragOver);
$cookieMonster.addEventListener("drop", dragDrop)
$notCookies.forEach((notCookie) => {notCookie.addEventListener("dragstart", dragStart)});
$notCookies.forEach((notCookie) => {notCookie.addEventListener("dragend", dragEnd)});
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

let isCookie = false;

function dragStart(ev) {
  // isCookie = ev.target.dataset.isCookie;
  // ev.target.dataset.cookie ? isCookie=true: isCookie=false;
  // console.log(ev.target.dataset.cookie, isCookie)
  this.className += 'hold';
  setTimeout(()=> this.className = 'invisible',0)
}

function dragEnd(ev) {
  
  const checkCookie = ev.target.dataset.cookie;
  console.log('checkCookie'+checkCookie)
  // if(checkCookie === "true") {
  //   console.log("true")
  // } else{console.log("false")}
  checkCookie === "true" ? isCookie=true: isCookie=false;
  console.log('isCookie'+isCookie)
}

function dragEnter(ev) {
  ev.preventDefault();
  // ev.target.dataset.cookie ? isCookie=true: isCookie=false;
  // console.log('enter'+isCookie)

  // this.className += 'hovered';
  // console.log("enter")
}

function dragOver(ev) {
  ev.preventDefault();
  // ev.target.dataset.cookie ? isCookie=true: isCookie=false;
  // console.log('enter'+isCookie)
  // console.log("over")
  // console.log('over'+isCookie)
}

function dragDrop() {
  console.log('drop'+isCookie)
  setTimeout(()=>{
    if (isCookie === true) {
      console.log("yum")
      $yum.classList.remove('hidden');
      setTimeout(()=>{
        $yum.classList.add('hidden');
      },1000);
    } else {
      // console.log("nope")
  
        $nope.classList.remove('hidden');
        setTimeout(()=>{
          $nope.classList.add('hidden');
        },1000);
    
  }
  },100)
}
