function addNewDomain(){
    var domain=["Arts and entertainment", "Business administration", "Industrial and manufacturing", "Law enforcement and armed forces", "Science and technology", "Service"];
    var link=["../../roadmap-arts.html"];
    var dynamic=document.querySelector('#container');
    for (let i = 0; i < domain.length; i++) {
            dynamic.innerHTML += ` <li>
            <a href=${link[0]}>
              <i class="fa"></i>
              <span>${domain[i]}</span>
            </a>
          </li>`;
    }
}

addNewDomain();