// this Js is responsable for creating all Html components on our web =)
function Criar(){
    var main = document.getElementById("main")
    var album = document.getElementById("album")
    main.appendChild(album)

    var container = document.createElement("div")
        container.setAttribute("class","container")

    var row = document.createElement('div')
        row.setAttribute("class","row")

    var logo = document.createElement('img');
        logo.src = 'imagens/StarWarsLogo.png'

        album.appendChild(container)
        container.appendChild(row)

    movieList.forEach(movie => {
        var card = document.createElement('card')

        var p = document.createElement('p');

        var colum = document.createElement('div');
        colum.setAttribute("class","col-md-4")
        populateHtml()

        var button = document.createElement("button")
        button.setAttribute("class","btn btn-primary")
        button.setAttribute("type","button")
        button.setAttribute("data-toggle","collapse")
        button.setAttribute("data-target","#contentId")
        button.setAttribute("aria-expanded","false")
        button.setAttribute("aria-controls","contentId")
        
        

    
    row.appendChild(colum)
    colum.appendChild(button)
    });
}

function createText(){
    var row = document.getElementById("row");
    movieList.forEach(movie =>{
        var colum = document.createElement('div');
        colum.setAttribute("class","col-md-4")
        row.appendChild(colum)

        var card = document.createElement('div')
        card.setAttribute("class", "car mb-4 shadow-sm")
        colum.appendChild(card)

        

        var poster = document.createElement('img');
        poster.src = `imagens/posters/${movie.id}.jpg`
        poster.setAttribute("class","img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}")
        poster.setAttribute("alt","");
        card.appendChild(poster)

        var button = document.createElement("button")
        button.setAttribute("class","btn btn-primary")
        button.setAttribute("type","button")
        button.setAttribute("data-toggle","collapse")
        button.setAttribute("data-target","#contentId")
        button.setAttribute("aria-expanded","false")
        button.setAttribute("aria-controls","contentId")
        card.appendChild(button);
        var buttonMSG = document.createElement("p");
        buttonMSG.innerText = "Planets"
        button.appendChild(buttonMSG)

        var expandedDescript = document.createElement("div")
        expandedDescript.setAttribute("class","collapse")
        expandedDescript.setAttribute("id","contentId")
        card.appendChild(expandedDescript)
        
        var extra = movie.planets; 
        var info = document.createElement("p");
        info.innerText = extra;

        expandedDescript.appendChild(info)

        var description = movie.sinopse;
        var p = document.createElement("p");
        p.innerText = description;
        card.appendChild(p)
    })
}
createText()

            


/*

            // Coloca o poster no cartão
            

            /

            function Criar(){
    var main = document.getElementById("main")
    var album = document.getElementById("album")
    main.appendChild(album)

    var logo = document.createElement('img');
        logo.src = 'imagens/StarWarsLogo.png'

    movieList.forEach(movie => {
        var card = document.createElement('card')

        var container = document.createElement("div")
        container.setAttribute("class","container-fluid")

        var p = document.createElement('p');

        var row = document.createElement('div')
        row.setAttribute("class","row")

        var colum = document.createElement('div');
        colum.setAttribute("class","col-md-4")

        var button = document.createElement("button")
        button.setAttribute("class","btn btn-primary")
        button.setAttribute("type","button")
        button.setAttribute("data-toggle","collapse")
        button.setAttribute("data-target","#contentId")
        button.setAttribute("aria-expanded","false")
        button.setAttribute("aria-controls","contentId")

        var expandedDescript = document.createElement("div")
        expandedDescript.setAttribute("class","collapse")
        expandedDescript.setAttribute("id","contentId")
        expandedDescript.textContent("Alot stuff")

    album.appendChild(container)
    cotainer.appendChild(row)
    row.appendChild(colum)
    colum.appendChild(button)
    });
}
*/
