var onScroll = document.querySelector('#bas');
var myWork = document.querySelector('#work');

console.log("onscroll",onScroll);


function move(){
  onScroll.classList.add("scrolling");
  console.log("hoi", onScroll.offsetTop);
  console.log("myWork", myWork.offsetTop);
  console.log("window", window.scrollY);

}

window.addEventListener('scroll', move);

if (offsetTop = 1280) {
  myWork.classList.add("test")
}
