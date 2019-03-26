var section = document.querySelector('section');
var btn = document.querySelector('button');


// function getJSON(){
  var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
//  var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';


  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function(){
    var films = request.response;
    // console.log("data lengte",request.response.length)
    // console.log("data",request.response)
    getTitles(request.response);
    getReviews(request.response);
  }

  function getTitles(jsonObj){
    var filmTitle = jsonObj;
    // console.log("jsonObj lengte:",jsonObj.length);
    // console.log('film lengte', );

    for (var i = 0; i < filmTitle.length; i++){

      var label = document.createElement('label');
      label.textContent =  filmTitle[i].title;
      unList.appendChild(label);


    }


}

var unList = document.createElement('ul');
section.appendChild(unList);


  function getReviews(jsonObj){
    var reviews = jsonObj;
    for (var r = 0; r < reviews.length; r++){
      var listItem = document.createElement('li');
      var para = document.createElement('p');

      listItem.textContent = 'Review ' + reviews[r].id + ':';
      para.textContent = 'Score: ' + reviews[r].score;

      unList.appendChild(listItem);
      listItem.appendChild(para);


    }
  }

//   var removeBtn = document.removeElement('button');
// }
//
//
// btn.addEventListener('click',getJSON);
