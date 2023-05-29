const handleOnload = () => {
    let localData = JSON.parse(localStorage.getItem("cinema"));
    let sessiondata = JSON.parse(sessionStorage.getItem("cinemade"));

    let cinemaData = localData.filter((value, i) => value.id === sessiondata);

    print = '<div class="row">';
    cinemaData.map((value) => {
        print += '<div class="col-lg-3 col-2" id="col' + value.id + ' ">';
            print += '<div class="card bg-body-tertiary">';
            print += '<div class="card-body">';
            print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Name: </h6>' + '<span>' + value.name + '</span>' + '</div>';
            print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Location: </h6>' + '<span>' + value.locaton + '</span>' + '</div>';
            print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Facility: </h6>' + '<span>' + value.facilites + '</span>' + '</div>';
        print += '<div class="flexdiv">' + '<a href="#" class="btn btn-primary">BooK Now</a>' + '</div>';
        print += '</div></div></div>';
    });
    print += '</div>';

    document.getElementById("displaydataCinema").innerHTML = print;
};

window.onload = handleOnload();