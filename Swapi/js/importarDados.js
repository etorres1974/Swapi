// Este Js fica responsável por importar os dados da API e organiza-los em objetos
var movieList = [];
var planetsList = [];
var charactersList = [];
var speciesList = [];
var shipsList = [];
var apiLinks =  [];

function importMovies(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://swapi.co/api/films/?format=json', true);
    
    request.onload = function () {
        // Acessando dados Json apartir daqui.
        var data = JSON.parse(this.response);
        if(request.status >= 200 && request.status < 400){
            data.results.forEach(result => {
                movieList.push(new Movie(result.title,result.episode_id, result.release_date, result.director, result.opening_crawl, result.url))
        })
        } else {
            console.log('error')
        }
        console.log("successfully imported Movies")
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
        // Acessando dados Json apartir daqui.
            var data = JSON.parse(this.response);    
                if(request.status >= 200 && request.status < 400){
                    data.results.forEach(result => {
                        planetsList.push(new Planet(result.name, result.films))
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
        // Acessando dados Json apartir daqui.
            var data = JSON.parse(this.response);    
                if(request.status >= 200 && request.status < 400){
                    data.results.forEach(result => {
                        charactersList.push(new Character(result.name, result.films))
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
        // Acessando dados Json apartir daqui.
            var data = JSON.parse(this.response);    
                if(request.status >= 200 && request.status < 400){
                    data.results.forEach(result => {
                        speciesList.push(new Species(result.name, result.films, result.classification))
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
        // Acessando dados Json apartir daqui.
            var data = JSON.parse(this.response);    
                if(request.status >= 200 && request.status < 400){
                    data.results.forEach(result => {
                        shipsList.push(new Ship(result.name, result.films, result.starship_class))
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
    constructor(nome, id, ano, diretor, sinopse, url){
        this.nome = nome;
        this.id = id;
        this.ano = ano;
        this.diretor = diretor;
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








    
