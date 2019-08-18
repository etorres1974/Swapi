// Este Js fica responsável por importar os dados da API e organiza-los em objetos
var movieList = [];
var planetsList = [];
importPlanets();
importMovies();


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
    }
    
  request.send();
}
    
function importPlanets(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://swapi.co/api/planets/?format=json', true);
        
    request.onload = function () {
        // Acessando dados Json apartir daqui.
            var data = JSON.parse(this.response);
            if(request.status >= 200 && request.status < 400){
                data.results.forEach(result => {
                    planetsList.push(new Planet(result.name, result.films) )
            })
            } else {
                console.log('error')
            }
        }
        
    request.send();
}

class Movie{ 
    constructor(nome, id, ano, diretor, sinopse, url){
        this.nome = nome=nome = nome;
 ;
        this.id = id;
        this.ano = ano;
        this.diretor = diretor;
        this.sinopse = sinopse;
        this.url = url;
        this.planets = [];
        this.findPlanets();
    }
    findPlanets(){
        for(var i = 0; i < planetsList.length; i++){
            planetsList[i].movies.forEach(url => {
                if(url.includes(this.id)){
                    this.planets.push(planetsList[i].name)
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

//const Database = new Data();

    
