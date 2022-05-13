function addNewField(){
    var field=["Artistic occupations", "Dance occupations", "Entertainer occupations", "Film and television occupations", "Theatre personnel", "Writing occupations"];
    var link=["../../roadmap-arts-expanded.html"];
    var dynamic=document.querySelector('.rb');
    for (let i = 0; i < field.length; i++) {
            dynamic.innerHTML +=  `<li class="rb-item" ng-repeat="itembx">
            <div class="timestamp">
              ${i+1} List of : <br>
            </div>
            <div class="item-title"><a href="${link[0]}">${field[i]}</a>
            </div>
          </li>`;
    }
}

addNewField();