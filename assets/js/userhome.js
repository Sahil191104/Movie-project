let search = document.getElementById("search");

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

search.addEventListener("keyup", search_CLUE);
window.onload = search_CLUE();