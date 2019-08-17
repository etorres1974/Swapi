// Cria uma  variavel requerimento e atribui um objeto new XMLHttpRequest
var request = new XMLHttpRequest();
request.open('GET', 'https://swapi.co/api/films/?format=json', true);

request.onload = function () {
    // Acessando dados Json apartir daqui.
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400){
        data.results.forEach(movie => {

            const filme = document.createElement('div')
             filme.setAttribute('class', 'filme')

             filme.setAttribute('onclick', `filme(${movie.episode_id})`)
             filme.setAttribute('id', `${movie.episode_id}`)
             filme.setAttribute('nome', `${movie.title}`)
             filme.setAttribute('diretor', `${movie.director}`)
             filme.setAttribute('Sinopse', `${movie.opening_crawl}`)
             filme.setAttribute('Ano', `${movie.release_date}`)

             const info = document.createElement('p')           
             info.textContent = '\nSinopse: ' + movie.opening_crawl;
            
            
            // Coloca o poster no cartão
            const poster = document.createElement('img');
            poster.src = `imagens/posters/${movie.episode_id}.jpg`

            const h1 = document.createElement('h1')
            h1.textContent = `${movie.title}(${movie.release_date})`;
            
            const detalhes = document.createElement('p') 
            detalhes.textContent = "Temporário";
            // To do: Adicionar lista de Personagens, Planetas, Espécies e Naves.



            // Insere os htmls com seus appends
            container.appendChild(filme);
                filme.appendChild(h1);
                filme.appendChild(poster);
                filme.appendChild(info);
                filme.appendChild(detalhes);
                
        })
    } else {
        console.log('error')
    }
}

const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'imagens/StarWarsLogo.png'

//Criando Container para organizar as divs dos filmes
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(logo)
app.appendChild(container)

request.send();








