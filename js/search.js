var container = document.querySelector(".elements-list");
var seachForm = document.querySelector('form');


function populateList(){
    let searchValue = document.querySelector("#field").value;
    let searchUrl = `http://www.omdbapi.com/?s=${searchValue}`;
    fetch (searchUrl)
    .then((response) => {
        return response.json();
    }).then( (m) => {
        let movies = m.Search;
        console.log(movies.Search);

        // iterating for each value
        movies.forEach((movie) => {
            // console.log(movie.Title);
            var movieElement = `<li>${movie.Title}<img src="${movie.Poster}"</li>`;
            // console.log(movieElement);
            container.insertAdjacentHTML('beforeend', movieElement);
        })
    })
}

function search(event){
    container.innerHTML = '';
    event.preventDefault();
    populateList();
}

//event listener earch form
seachForm.addEventListener('submit', search)
