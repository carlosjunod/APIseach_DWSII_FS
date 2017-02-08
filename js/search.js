var container = document.querySelector(".elements-list");
var seachForm = document.querySelector('form');
var msgSearch = document.querySelector('h3.message');
var byTitle = document.querySelector('#movie-title');
var byName = document.querySelector('#actor-name');


function populateList(){
    let searchValue = document.querySelector("#field").value;
    let searchUrl = '';
    if (byTitle.checked) {
        searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=82ba59d3ee5b386cb7d3b0a2adda70a7&language=en-US&query=${searchValue}&page=1&include_adult=false`;

        fetch (searchUrl)
        .then((response) => {
            return response.json();
        }).then( (m) => {
            let movies = m.results;

            console.log(movies);

            if (movies.length > 0) {
                // iterating for each value
                movies.forEach((movie) => {
                    // console.log(movie.Title);

                    var relase = new Date(movie.release_date).getFullYear();

                    var movieElement = `<li style=" url('http://placehold.it/400x600/061535/1E8BC4?text=movie+poster')">
                    <div class="img-cont"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" /></div>
                    <h2>${movie.title} <span>${relase}</span></h2>
                    </li>`;
                    // console.log(movieElement);
                    container.insertAdjacentHTML('beforeend', movieElement);
                })

                msgSearch.innerHTML = `Showing results for: <strong>${searchValue}</strong>`
            } else {
                msgSearch.innerHTML = `there are no resutls for: <strong>${searchValue}</strong>, try it again`
            }



        }).catch(function(error) {
            msgSearch.innerHTML = `ERROR: <strong>${searchValue}</strong> <br/> ${error.message}`
        });


    } else if (byName.checked) {
        searchUrl = `https://api.themoviedb.org/3/search/person?api_key=82ba59d3ee5b386cb7d3b0a2adda70a7&language=en-US&query=${searchValue}&page=1&include_adult=false`;

        fetch (searchUrl)
        .then((response) => {
            return response.json();
        }).then( (m) => {
            let actors = m.results;


            console.log(actors);

            if (actors.length > 0) {
                // iterating for each value
                actors.forEach((actor) => {

                    console.log('ACTOR: ' + actor.name);
                    let movies = actor.known_for;


                    movies.forEach((movie) => {
                        console.log('MOVIE: ' + movie.title);

                        var movieElement = `<li style="background-image:url('https://image.tmdb.org/t/p/w500/${movie.poster_path}'), url('http://placehold.it/400x600/061535/1E8BC4?text=movie+poster')">
                        <h2>${movie.title}</h2>
                            <div class='actor'>
                            <h3>${actor.name}</h3>
                            <span class="actor-pic" style="background-image:url('https://image.tmdb.org/t/p/w150${actor.profile_path}')"></span>
                            </div>
                        </li>`;

                        container.insertAdjacentHTML('beforeend', movieElement);

                    })


                })

                msgSearch.innerHTML = `Showing results for: <strong>${searchValue}</strong>`
            } else {
                msgSearch.innerHTML = `there are no resutls for: <strong>${searchValue}</strong>, try it again`
            }





        }).catch(function(error) {
            msgSearch.innerHTML = `ERROR: <strong>${searchValue}</strong> <br/> ${error.message}`
        });

    }

    console.log(searchUrl);
}

function search(event){
    event.preventDefault();
    container.innerHTML = '';
    msgSearch.innerHTML = '';
    populateList();
}

//event listener earch form
seachForm.addEventListener('submit', search)
