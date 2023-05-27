let search = document.getElementById("search");
let searchMovie = document.getElementById("searchMovie");

const search_CLUE = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    print = '<div class="row">';
    localdata.map((value) => {
        if (value.name.includes(search.value) || value.locaton.includes(search.value) || value.facilites.includes(search.value)) {
            print += '<div class="col-lg-3 col-2" id="col' + value.id + ' ">';
            print += '<div class="card bg-body-tertiary">';
            print += '<div class="card-body">';
            print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Name: </h6>' + '<span>' + value.name + '</span>' + '</div>';
            print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Location: </h6>' + '<span>' + value.locaton + '</span>' + '</div>';
            print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Facility: </h6>' + '<span>' + value.facilites + '</span>' + '</div>';
            print += '</div></div></div>';
        };
    });
    print += '</div>';

    document.querySelector(".login").innerHTML = print;
}

const search_Movie = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));

    print = '<div class="row">';
    localData.map((value) => {
        if (value.name.includes(searchMovie.value) || value.desc.includes(searchMovie.value)) {
            print += '<div class="col-lg-3 col-2" id="col' + value.id + ' ">';
            print += '<div class="card">';
            print += '<img class="img-fluid" src="' + value.poster + '" style="width: 100%; object-fit: cover; object-position: top; height: 350px;  aspect-ratio"; border-radius: 10px;">';
            print += '<div class="card-body">';
            print += '<div class="flexdiv">' + '<h6 class="card-title">' + value.name + '</h6>' + '</div>';
            print += '<div class="flexdiv">' + '<span>' + value.desc + '</span>' + '</div>';
            print += '<div class="flexdiv">' + '<a href="#" onclick="NewData()" class="btn btn-primary">Go somewhere</a>' + '</div>';
            print += '</div></div></div>';
        };
    });
    print += '</div>';

    document.querySelector(".Movie-data").innerHTML = print;
}

const NewData = () => {
    window.location = "MovieData.html";

    let localData = JSON.parse(localStorage.getItem("Movie"));

    localData.map((value) => {
        let display = value.mid

        console.log(display);
    })
}

search.addEventListener("keyup", search_CLUE);
searchMovie.addEventListener("keyup", search_Movie);
window.onload = search_CLUE();
window.onload = search_Movie();