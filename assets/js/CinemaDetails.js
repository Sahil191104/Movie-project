const handleOnload = () => {
    let localData = JSON.parse(localStorage.getItem("cinema"));
    let sessiondata = JSON.parse(sessionStorage.getItem("cinemade"));

    let cinemaData = localData.filter((value, i) => value.id === sessiondata);

    print = '<ul class="movies-list has-scrollbar">';
    cinemaData.map((value) => {
        print += '<li>';
        print += '<div class="movie-card">';
        print += '<div class="title-wrapper">';
        print += '<a href="CinemaDetails.html">';
        print += '<h3 class="card-title">Cinema Name : <time>' + value.name + '</time></h3>';
        print += '<br>';
        print += '<h3 class="card-title">Cinema Location : <time>' + value.locaton + '</time></h3>';
        print += '<br>';
        print += '<h3 class="card-title">Cinema Facility : <time>' + value.facilites + '</time></h3>';
        print += '</a>';
        print += '</div>';
        print += '</div>';
        print += '</li>';
    });
    print += '</ul>';

    document.querySelector(".displaydataCinema").innerHTML = print;
};

window.onload = handleOnload();