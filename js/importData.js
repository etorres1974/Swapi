// This Js imports the data from API and create Objects for them;
var movieList = [];
var planetsList = [];
var charactersList = [];
var speciesList = [];
var shipsList = [];
var apiLinks =  [];
importAll()

function importAll(){
    importCharacters();
    importPlanets();
    importShips();
    importSpecies();        
       
}

function importMovies(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://swapi.co/api/films/?format=json', true);
    
    request.onload = function () {
        // Json data avaible below.
        var data = JSON.parse(this.response);
        var limit = data.count
        if(request.status >= 200 && request.status < 400){
            data.results.forEach(result => {
                movieList.push(new Movie(result.title,result.episode_id, result.release_date, result.director, result.opening_crawl, result.url))
        })
        } else {
            console.log('error')
        }
        console.log(`Successfully imported ${movieList.length}/${limit} Movies`)
        createCards();
    }
    
  request.send();
}
    
function importPlanets(url){
    if (url == undefined){
        url = "https://swapi.co/api/planets/?format=json";
    }
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        // Json data avaible below
            var data = JSON.parse(this.response); 
            var limit = data.count;   
                if(request.status >= 200 && request.status < 400){
                    data.results.forEach(result => {
                        planetsList.push(new Planet(result.name, result.films))
                        if(planetsList.length == limit){
                            planetsImport = true;
                            console.log( `Sucessefully imported ${planetsList.length}/${limit} planets.`)
                        }
                })
                if(data.next != null){
                    importPlanets(data.next);
                }
                } else {
                    console.log('error')
                  }
        }
    request.send();
}

function importCharacters(url){
    if (url == undefined){
        url = "https://swapi.co/api/people/?format=json";
    }
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        // Json data avaible below
            var data = JSON.parse(this.response);
            var limit = data.count;    
                if(request.status >= 200 && request.status < 400){
                    data.results.forEach(result => {
                        charactersList.push(new Character(result.name, result.films))
                        if(charactersList.length == limit){
                            charactersImport = true;
                            console.log( `Sucessefully imported ${charactersList.length}/${limit} characters.`)
                            importMovies();
                        }
                })
                if(data.next != null){
                    importCharacters(data.next);
                }
                } else {
                    console.log('error')
                  }
        }
    request.send();
    
} 
function importSpecies(url){
    if (url == undefined){
        url = "https://swapi.co/api/species/?format=json";
    }
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        // Json data avaible below
            var data = JSON.parse(this.response);
            var limit = data.count;    
                if(request.status >= 200 && request.status < 400){
                    data.results.forEach(result => {
                        speciesList.push(new Species(result.name, result.films, result.classification))
                        if(speciesList.length == limit){
                            speciesImport = true;
                            console.log( `Sucessefully imported ${speciesList.length}/${limit} species.`)
                        }
                })
                if(data.next != null){
                    importSpecies(data.next);
                }
                } else {
                    console.log('error')
                  }
        }
    request.send();
}
function importShips(url){
    if (url == undefined){
        url = "https://swapi.co/api/starships/?format=json";
    }
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        // Json data avaible below
            var data = JSON.parse(this.response);
            var limit = data.count;    
                if(request.status >= 200 && request.status < 400){
                    data.results.forEach(result => {
                        shipsList.push(new Ship(result.name, result.films, result.starship_class))
                        if(shipsList.length == limit){
                            shipsImport = true;
                            console.log( `Sucessefully imported ${shipsList.length}/${limit} ships.`)
                        }
                })
                if(data.next != null){
                    importShips(data.next);
                }
                } else {
                    console.log('error')
                  }
        }
    request.send();
}

class Movie{ 
    constructor(name, id, ano, director, sinopse, url){
        this.name = name;
        this.id = id;
        this.ano = ano;
        this.director = director;
        this.sinopse = sinopse;
        this.url = url;

        this.planets = [];
        this.findPlanets();
        this.characters = [];
        this.findCharacters();
        this.species = [];
        this.findSpecies();
        this.ships = [];
        this.findShips();
    }
    findPlanets(){
        for(var i = 0; i < planetsList.length; i++){
            planetsList[i].movies.forEach(url => {
                if(url == this.url){
                    this.planets.push(planetsList[i].name)
                }
            })
        }
    }
    findCharacters(){
        for(var i = 0; i < charactersList.length; i++){
            charactersList[i].movies.forEach(url => {
                if(url == this.url){
                    this.characters.push(charactersList[i].name)
                }
            })
        }
    }
    findSpecies(){
        for(var i = 0; i < speciesList.length; i++){
            speciesList[i].movies.forEach(url => {
                if(url == this.url){
                    this.species.push(speciesList[i].name)
                }
            })
        }
    }
    findShips(){
        for(var i = 0; i < shipsList.length; i++){
            shipsList[i].movies.forEach(url => {
                if(url == this.url){
                    this.ships.push(shipsList[i].name)
                }
            })
        }
    }
    
}

class Planet {
    constructor(name, movies){
        this.name = name;
        this.movies = movies; // urls from the movies
    }
}
class Character {
    constructor(name, movies){
        this.name = name;
        this.movies = movies; // urls from the movies
    }
}
class Species {
    constructor(name, movies, classification){
        this.name = name;
        this.movies = movies; // urls from the movies
        this.classification = classification; 
    }
}
class Ship {
    constructor(name, movies, classification){
        this.name = name;
        this.movies = movies; // urls from the movies
        this.classification = classification; 
    }
}








    
