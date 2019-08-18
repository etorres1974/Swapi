// this Js is responsable for creating all Html components on our web =)

var request = new XMLHttpRequest();
request.onload = function () {
    if(request.status >= 200 && request.status < 400){
        movieList.forEach(movie => {
            const filme = document.createElement('div')
            const info = document.createElement('p')           
            const container = document.createElement('container')
            // Coloca o poster no cartão
            const poster = document.createElement('img');
            poster.src = `imagens/posters/${movie.id}.jpg`

            // Insere os htmls com seus appends
            container.appendChild(filme);
                filme.appendChild(h1);
                container.appendChild(poster);
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
