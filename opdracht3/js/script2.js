var section = document.querySelector('section');
var start = document.getElementById('start');



function getJSON() {
  var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';


  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var films = request.response;
    getTitles(request.response);
    console.log("response");

  }

  function getTitles(jsonObj) {
    var filmTitle = jsonObj;
    for (var i = 0; i < filmTitle.length; i++) {
      var article = document.createElement('article');
      var div = document.createElement('div');
      var img = document.createElement('img');
      var container = document.createElement('div');
      var h2 = document.createElement('h2');
      var label = document.createElement('label');
      var p = document.createElement('p');
      var btn = document.createElement('button');

      article.setAttribute("tabindex", "0");
      div.classList.add('articleContainer');
      img.setAttribute("src", filmTitle[i].cover);
      container.setAttribute("class", "container");
      h2.textContent = filmTitle[i].title;
      label.textContent = "Short plot:";
      p.textContent = filmTitle[i].simple_plot;
      btn.textContent = "read more";
      btn.setAttribute("class", "rmBtn");
      btn.setAttribute("tabindex", "-1")

      var reviews = filmTitle[i].reviews;

      div.appendChild(img);
      div.appendChild(container);
      container.appendChild(h2);
      container.appendChild(label);
      container.appendChild(p);
      container.appendChild(btn);
      article.appendChild(div);
      section.appendChild(article);

      var newP = document.createElement('p');
      newP.textContent = filmTitle[i].plot;
      newP.classList.add('hide');
      newP.setAttribute("id","extPlot");

      container.appendChild(newP);


      btn.addEventListener('click', function() {
        console.dir(this);

        console.log(this.parentNode.querySelector('p.hide'));
        if (this.textContent == "read more") {
          this.textContent = "read less";
          var longP = this.parentNode.querySelector('p.hide');
          longP.classList.add('longPlot');
        } else {
          this.textContent = "read more";
          var longP = this.parentNode.querySelector('p.hide');
          longP.classList.remove('longPlot');
        }

        console.log("btn state: ", this.textContent);
        // this.parentNode.querySelector('p.hide') = log de parent van de button en selecteer de p met class "longShot"

      }); //end function
      var ul = document.createElement('ul');
      ul.textContent = 'Reviews:';

      for (var r = 0; r < reviews.length; r++) {
        var li = document.createElement('li');
        var li2 = document.createElement('li');


        li.textContent = 'Review ' + reviews[r].id + ':';
        li2.textContent = 'Score: ' + reviews[r].score;


        ul.appendChild(li);
        ul.appendChild(li2);


      } //end for
      container.appendChild(ul);

    } //end for
    console.dir(section);
  } //end function

  var changeH1 = document.querySelector('h1');
  var removeBtn = document.getElementById('start');
  var removeImg = document.getElementById('arrow');
  var removeImg2 = document.getElementById('arrow2');
  changeH1.textContent = "Movies";
  changeH1.classList.add('afterStart');
  changeH1.classList.remove('beforeStart');
  removeBtn.parentNode.removeChild(removeBtn); //= spreek de parent van de button aan en verwijder child met id="start"
  removeImg.parentNode.removeChild(removeImg);
  removeImg2.parentNode.removeChild(removeImg2);

} //end function


start.addEventListener('click', getJSON);
