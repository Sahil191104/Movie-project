const handleOnload = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let sessiondata = JSON.parse(sessionStorage.getItem("mname"));

    let cinemaData = localData.filter((value, i) => value.name === sessiondata);

    console.log(cinemaData);
    print = '<div class="row">';
    cinemaData.map((value) => {
        let temp = [];
        temp = value.id;
        console.log(temp);
    });
    print += '</div>';

    document.getElementById("displaydatacinama").innerHTML = print;
};

window.onload = handleOnload();