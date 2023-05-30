const handleOnload = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let sessiondata = JSON.parse(sessionStorage.getItem("mname"));

    let movieData = localData.filter((value, i) => value.name === sessiondata);
    let temp = [];
    let temp1 = [];

    movieData.map((value) => {
        temp.push(localdata);
        console.log(temp);

        temp.map((value) => {
            temp1.push(temp);
            console.log(temp1);
            print = '<div class="row">';
            temp1.map((value) => {
                print += '<div class="col-lg-3 col-2" id="col' + value.id + ' ">';
                print += '<div class="card bg-body-tertiary">';
                print += '<div class="card-body">';
                print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Name: </h6>' + '<span>' + value.name + '</span>' + '</div>';
                print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Location: </h6>' + '<span>' + value.locaton + '</span>' + '</div>';
                print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Facility: </h6>' + '<span>' + value.facilites + '</span>' + '</div>';
                print += '</div></div></div>';
            });
            print += '</div>';
        });
        document.getElementById("displaydatacinama").innerHTML = print;
    });
};

window.onload = handleOnload();