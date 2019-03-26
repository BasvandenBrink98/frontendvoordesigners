var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
  var superHeroes = request.response;
  console.log("superHeroes",superHeroes)

//  instertInHeader(superHeroes);
  showHeroes(superHeroes);
}

function instertInHeader(jsonObj){

  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = "Hometown: " + jsonObj['homeTown'] + "// Formed: " + jsonObj['formed'];
  header.appendChild(myPara);
}

function showHeroes(jsonObj){
  var heroes = jsonObj;
        console.log("heroes",heroes.length)
  for (var i = 0; i < heroes.length; i++){
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    var superPowers = heroes[i].powers;
    for (var b = 0; b < superPowers.length; b++){
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[b];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
