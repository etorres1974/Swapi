// this Js is responsable for creating all Html components on our web =)
    var main = document.getElementById("main");
    //main.setAttribute("style", "style:background-color = black")
    //var logo = document.createElement('img');
    //logo.src = 'imagens/StarWarsLogo.png'
    //main.append(logo);
function createText(){



    var row = document.getElementById("row");
    movieList.forEach(movie =>{
        var colum = document.createElement('div');
        colum.setAttribute("class","col-md-4")
        row.appendChild(colum)

        var card = document.createElement('div')
        card.setAttribute("class", "car mb-4 shadow-sm")
        colum.appendChild(card)

        button(card,"See Planets",movie.planets);
        button(card,"See Characters",movie.characters);
        button(card,"See Species",movie.species);
        button(card,"See Ships",movie.ships);

        var poster = document.createElement('img');
        poster.src = `imagens/posters/${movie.id}.jpg`
        poster.setAttribute("class","img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}")
        poster.setAttribute("alt","");
        card.appendChild(poster)

        var description = movie.sinopse;
        var p = document.createElement("p");
        p.innerText = description;
        card.appendChild(p)
    })
}

function button(mother,title,content){
    var button = document.createElement("button")
    button.setAttribute("class","btn btn-primary")
    button.setAttribute("type","button")
    button.setAttribute("data-toggle","collapse")
    button.setAttribute("data-target","#contentId")
    button.setAttribute("aria-expanded","false")
    button.setAttribute("aria-controls","contentId")
    mother.appendChild(button);
    var buttonMSG = document.createElement("p");
    buttonMSG.innerText = title;
    button.appendChild(buttonMSG)

    var expandedDescript = document.createElement("div")
    expandedDescript.setAttribute("class","collapse")
    expandedDescript.setAttribute("id","contentId")
    mother.appendChild(expandedDescript)
    
    var extra = content
    var info = document.createElement("p");
    info.innerText = extra;
    expandedDescript.appendChild(info)
}