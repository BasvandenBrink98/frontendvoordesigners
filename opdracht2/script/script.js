var onScroll = document.querySelector('#bas');
var myWork = document.querySelector('#work');
var nav = document.querySelector('#navBar');
var workBtn = document.querySelector('#goToWork')

console.log("onscroll",onScroll);



// function work(){
//   window.scrollTop = 1000;
//   // console.log("testtest", window.scrollY)
// }
//
// workBtn.addEventListener('click', work);

var scrollPos = window.scrollY;


function scroll(){
  if(window.scrollY != 0){
    nav.classList.add("belowTop");
    nav.classList.remove("topPage");
    console.log(window.scrollY);

  }
  else{
    nav.classList.add("topPage");
    nav.classList.remove("belowTop");


  }
}

window.addEventListener('scroll', scroll);
console.log(window.scrollY);




// function addBas(){
//   if(window.scrollY >= 288.79998779296875){
//     var li = document.createElement("li");
//     var bas = document.createTextNode("Bas van den Brink");
//     li.appendChild(bas);
//     navList.appendChild(li);
//     bas.setAttribute("id","bas2");
//     console.log("addBas");
//   }
//   else{
//     // li.removeElement("li");
//     // bas.removeTextNode("Bas van den Brink");
//     // bas.removeAttribute("id","bas2");
//   }
// }
//
// window.addEventListener('scroll', addBas);
//
//
//////     Hij bleef maar list items toevoegen terwijl er gescrollt werd, dus ivm tijd heb ik het anders op gelost     //////
