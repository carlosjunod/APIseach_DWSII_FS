var container = document.querySelector(".elements-list");
var seachForm = document.querySelector('form');
var msgSearch = document.querySelector('h3.message');


function populateList(){
    let searchValue = document.querySelector("#field").value;
    let searchUrl = `http://www.omdbapi.com/?s=${searchValue}`;

    fetch (searchUrl)
    .then((response) => {
        return response.json();
    }).then( (m) => {
        let movies = m.Search;
        console.log(movies);
        //console.log(movies.Search);

        // iterating for each value
        movies.forEach((movie) => {
            // console.log(movie.Title);
            var movieElement = `<li style="background-image:url('${movie.Poster}')">

            <h2>${movie.Title} <span>${movie.Year}</span></h2>
            </li>`;
            // console.log(movieElement);
            container.insertAdjacentHTML('beforeend', movieElement);
        })

        msgSearch.innerHTML = `Showing results for: <strong>${searchValue}</strong>`
    })
}

function search(event){
    event.preventDefault();
    container.innerHTML = '';
    msgSearch.innerHTML = '';
    populateList();
}

//event listener earch form
seachForm.addEventListener('submit', search)
