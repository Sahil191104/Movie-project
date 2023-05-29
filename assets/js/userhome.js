let search = document.getElementById("search");
let searchMovie = document.getElementById("searchMovie");

const search_CLUE = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    print = '<div class="row">';
    localdata.map((value) => {
        if (value.name.includes(search.value) || value.locaton.includes(search.value) || value.facilites.includes(search.value) || value.name.toLowerCase().includes(search.value) || value.locaton.toLowerCase().includes(search.value) || value.facilites.toLowerCase().includes(search.value)) {
            print += '<div class="col-lg-3 col-2" id="col' + value.id + ' ">';
            print += '<div class="card bg-body-tertiary">';
            print += '<div class="card-body">';
            print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Name: </h6>' + '<span>' + value.name + '</span>' + '</div>';
            print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Location: </h6>' + '<span>' + value.locaton + '</span>' + '</div>';
            print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Facility: </h6>' + '<span>' + value.facilites + '</span>' + '</div>';
            print += '<div class="flexdiv">' + '<a href="CinemaDetails.html" onclick="NewDatacinema('+ value.id +')" class="btn btn-primary">Cinema Details</a>' + '</div>';
            print += '</div></div></div>';
        };
    });
    print += '</div>';

    document.querySelector(".login").innerHTML = print;
}

const search_Movie = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));

    print = '<div class="row1">';
    localData.map((value) => {
        if (value.name.includes(searchMovie.value) || value.desc.includes(searchMovie.value) || value.name.toLowerCase().includes(searchMovie.value) || value.desc.toLowerCase().includes(searchMovie.value)) {
            print += '<div class="col-lg-3 col-2" id="col' + value.id + ' ">';
            print += '<div class="card">';
            print += '<div class="container">';
            print += '<div class="child">';
            print += '<img class="img-fluid" src="' + value.poster + '" style="width: 100%; object-fit: cover; object-position: top; height: 450px;  aspect-ratio";">';
            print += '<a href="MovieDetalis.html" onclick="NewData('+ value.mid +')" class="btn btn-primary">'+ '<span>' + value.name + '</span>' +'</a>';
            print += '</div>';
            print += '</div>';
            // print += '<a href="MovieDetalis.html" onclick="NewData('+ value.mid +')" class="btn btn-primary">Movie Details</a>';
            print += '</div></div>';
        };
    });
    print += '</div>';

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