const div = document.querySelector(".container");

//div.setAttribute("style","background-color:darkblue; height: 600px;");

const API = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";
const API_2 = "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

const getMovies = async function () {
    const respuesta = await fetch(`${API}`)
    console.log(respuesta);
    const data = await respuesta.json();
    console.log(data.Search);
    readMovies(data.Search);

}

getMovies();

function readMovies(movies) {
    div.innerHTML = "";
    movies.forEach((movie,index) => {
        div.innerHTML += 
        `<div class="card">
            <div class="poster">
            <img class="poster__img" src="${movie.Poster}" alt="Poster">
             </div>
            <div class="description">
                <h2 class="description__title">
                    ${movie.Title}
                </h2>
                <p class="description__year">
                    Año del Estreno: ${movie.Year}
                </p>
             </div>
            </div>`
        ;
    });
}
