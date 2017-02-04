var container = document.querySelector(".elements-list");
var seachForm = document.querySelector('form');
var msgSearch = document.querySelector('h3.message');


function populateList(){
    let searchValue = document.querySelector("#field").value;
    let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=82ba59d3ee5b386cb7d3b0a2adda70a7&language=en-US&query=${searchValue}&page=1&include_adult=false`;
    console.log(searchUrl);

    fetch (searchUrl)
    .then((response) => {
        return response.json();
    }).then( (m) => {
        let movies = m.results;
        console.log(movies);
        //console.log(movies.Search);

        // iterating for each value
        movies.forEach((movie) => {
            // console.log(movie.Title);

            var relase = new Date(movie.release_date).getFullYear();

            var movieElement = `<li style="background-image:url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')">
            <h2>${movie.title} <span>${relase}</span></h2>
            </li>`;
            // console.log(movieElement);
            container.insertAdjacentHTML('beforeend', movieElement);
        })

        msgSearch.innerHTML = `Showing results for: <strong>${searchValue}</strong>`
    }).catch(function(error) {
        msgSearch.innerHTML = `ERROR: <strong>${searchValue}</strong> <br/> ${error.message}`
});
}

function search(event){
    event.preventDefault();
    container.innerHTML = '';
    msgSearch.innerHTML = '';
    populateList();
}

//event listener earch form
seachForm.addEventListener('submit', search)
