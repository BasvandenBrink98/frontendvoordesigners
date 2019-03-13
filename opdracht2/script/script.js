var onScroll = document.querySelector('#bas');
var myWork = document.querySelector('#work');
var nav = document.querySelector('#navBar');
var workBtn = document.querySelector('#goToWork')

console.log("onscroll",onScroll);


function move(){
  onScroll.classList.add("scrolling");
  nav.classList.add("shadow");
  console.log("hoi", onScroll.offsetTop);
  console.log("myWork", myWork.offsetTop);
  console.log("window", window.scrollY);

}

window.addEventListener('scroll', move);

// if (offsetTop = 1280) {
//   myWork.classList.add("test")
// }

function work(){
  window.scrollTop = 1000;
  console.log("testtest", window.scrollY)
}

workBtn.addEventListener('click', work);
