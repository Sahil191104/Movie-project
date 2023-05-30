const handleOnload = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));
    let sessiondata = JSON.parse(sessionStorage.getItem("moviede"));

    let movieData = localData.filter((value, i) => value.mid === sessiondata);

    print = '<div class="row">';
    movieData.map((value) => {
        print += '<div class="col-lg-3 col-2">';
        print += '<div class="card">';
        print += '<img class="img-fluid" src="' + value.poster + '" style="width: 100%; object-fit: cover; object-position: top; height: 350px;  aspect-ratio"; border-radius: 10px;">';
        print += '<div class="card-body">';
        print += '<div class="flexdiv">' + '<h6 class="card-title">' + value.name + '</h6>' + '</div>';
        print += '<div class="flexdiv">' + '<span>' + value.desc + '</span>' + '</div>';
        print += `<div class="flexdiv"><a href="DisplayCinemadata.html" class="btn btn-primary" onclick="Newciname('${value.name}')" />Book Now</a>`;
        print += '</div></div></div>';
    });
    print += '</div>';

    document.getElementById("displaydata").innerHTML = print;
};

const Newciname = (mname) => {
    sessionStorage.setItem("mname", JSON.stringify(mname));
    console.log(mname);
}

window.onload = handleOnload();