function addToFavorite1() {

    console.log(film1);
    
    var test = document.getElementById("favoFilm1");
    
    test.classList.toggle("active");
    if(add1.innerHTML=="Remove")
        add1.innerHTML = "Add";
    else add1.innerHTML = "Remove";
}


var film1 = document.getElementById("favoFilm1");
var add1 = document.getElementById("addFilm1");

console.log(add1);
add1.addEventListener('click', addToFavorite1);


function addToFavorite2(){

    console.log(film2);
    
    var test = document.getElementById("favoFilm2");
    
    test.classList.toggle("active");
    if(add2.innerHTML=="Remove")
        add2.innerHTML = "Add";
    else add2.innerHTML = "Remove";
}

var film2 = document.getElementById("favoFilm2");
var add2 = document.getElementById("addFilm2");

add2.addEventListener('click', addToFavorite2);


function addToFavorite3(){

    console.log(film3);
    
    var test = document.getElementById("favoFilm3");
    
    test.classList.toggle("active");
    if(add3.innerHTML=="Remove")
        add3.innerHTML = "Add";
    else add3.innerHTML = "Remove";
}

var film3 = document.getElementById("favoFilm3");
var add3 = document.getElementById("addFilm3");

add3.addEventListener('click', addToFavorite3);
