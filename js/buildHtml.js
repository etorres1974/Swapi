// this Js is responsable for creating all Html components on our page =)
    var main = document.getElementById("main");
        main.setAttribute("class", "bg-dark")
    var album = document.getElementById("album");
    var albumRow = document.getElementById("albumRow");

function createCards(){
    
    var cardsList = []
    movieList.forEach(movie => {
  
        //Creating elements
        var card = document.createElement("div");
            card.setAttribute("class","card mb-3 m-2");
            card.setAttribute("style","width: 18rem");
        var img = document.createElement("img");
            img.setAttribute("class","card-img-top");
            img.setAttribute("alt","Responsive image");     
            img.src = `imagens/posters/${movie.id}.jpg`;

        var cardTop = document.createElement("div");
            cardTop.setAttribute("class","card-top");
        var cardBody = document.createElement("div");
            cardBody.setAttribute("class","card-body");
        var cardTitle = document.createElement("h5");
            cardTitle.setAttribute("class","card-title");
            cardTitle.innerText = movie.name
        var cardSubTitle = document.createElement("footer")
            cardSubTitle.setAttribute("class","blockquote-footer")
            cardSubTitle.innerText = movie.ano + "\n Directed by " + movie.director
        var cardText = document.createElement("p");
            cardText.setAttribute("class","card-text");
        //<footer class="blockquote-footer">launched 12/07/1997 and direct by Eduardo Torres</footer>
        //Appending
        card.appendChild(cardTop)
            cardTop.appendChild(img)
        card.appendChild(cardBody)
            cardBody.appendChild(cardTitle)
                cardTitle.appendChild(cardSubTitle)
            cardBody.appendChild(cardText)
            button(cardBody,"Planets",movie.planets)
            button(cardBody,"Species",movie.species)
            button(cardBody,"Starhips",movie.ships)
            button(cardBody,"Characters",movie.characters)
            description(cardBody,movie.sinopse);

        cardsList.push(card)
    })
    
    createCardsDecksOf(cardsList,4);

    endLoadMsg();
}

function createCardsDecksOf(cardsList, n){ //create CardsDecks of N cards
    for(var i= 0; i < cardsList.length; i= i+n){
        createCardDecks(cardsList.slice(i,i+n))
    }
}

function createCardDecks(cardsList){ // Receive an array of cards and create a Deck with then;
    var cardDeck = document.createElement("div");
        cardDeck.setAttribute("class","card-deck");
        cardsList.forEach(card =>{
            cardDeck.appendChild(card)
        })
    
    album.appendChild(cardDeck)
}

function description(mother,content){
    var description = content;
    var p = document.createElement("p");
        p.setAttribute("class", "card text-center")
    p.innerText = description;
    mother.appendChild(p)
}

function poster(mother,img){
    var poster = document.createElement('img');
    poster.src = `imagens/posters/${img}.jpg`
    poster.setAttribute("class","img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}")
    poster.setAttribute("alt","");
    mother.appendChild(poster)
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
        //info.setAttribute("class","textArea")
    info.innerText = extra;
    expandedDescript.appendChild(info)
}

function endLoadMsg(){
    var loading = document.getElementById("loading")
    loading.innerText = "";
}
