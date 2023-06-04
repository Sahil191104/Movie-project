let search = document.querySelector(".search");
let searchMovie = document.querySelector(".searchMovie");

const search_CLUE = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    print = '<ul class="movies-list has-scrollbar">';
    localdata.map((value) => {
        if (value.name.includes(search.value) || value.locaton.includes(search.value) || value.facilites.includes(search.value) || value.name.toLowerCase().includes(search.value) || value.locaton.toLowerCase().includes(search.value) || value.facilites.toLowerCase().includes(search.value)) {
            print += '<li>';
            print += '<div class="movie-card">';
            print += '<div class="title-wrapper">';
            print += '<a href="CinemaDetails.html" onclick="NewDatacinema('+ value.id +')">';
            print += '<h3 class="card-title">Cinema Name : <time>' + value.name + '</time></h3>';
            print += '<br>';
            print += '<h3 class="card-title">Cinema Location : <time>' + value.locaton + '</time></h3>';
            print += '<br>';
            print += '<h3 class="card-title">Cinema Facility : <time>' + value.facilites + '</time></h3>';
            print += '</a>';
            print += '</div>';
            print += '</div>';
            print += '</li>';
        };
    });
    print += '</ul>';

    document.querySelector(".login").innerHTML = print;
}

const search_Movie = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));

    print = '<ul class="movies-list as-scrollbar">';
    localData.map((value) => {
        if (value.name.includes(searchMovie.value) || value.desc.includes(searchMovie.value) || value.name.toLowerCase().includes(searchMovie.value) || value.desc.toLowerCase().includes(searchMovie.value)) {
            print += '<li>';
            print += '<div class="movie-card">';
            print += '<a href="MovieDetalis.html" onclick="NewData('+ value.mid +')">';
            print += '<figure class="card-banner">';
            print += '<img src="'+ value.poster +'" alt="The Northman movie poster">';
            print += '</figure>';
            print += '<h3 class="card-title">' + value.name + '</h3>';
            print += '</a>';
            print += '</div>';
            print += '</li>';
        };
    });
    print += '</ul>';

    document.querySelector(".Movie-data").innerHTML = print;
}

const NewData = (moviede) => {
    // window.location = "MovieDetalis.html";
    sessionStorage.setItem("moviede", JSON.stringify(moviede));
    console.log(moviede);
}

const NewDatacinema = (cinemade) => {
    // window.location = "CinemaDetails.html";
    sessionStorage.setItem("cinemade", JSON.stringify(cinemade));
    console.log(cinemade);
}

search.addEventListener("keyup", search_CLUE);
searchMovie.addEventListener("keyup", search_Movie);
window.onload = search_CLUE();
window.onload = search_Movie();