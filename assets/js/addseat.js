const cinema = () => {
    console.log("dfs");
    window.location = "../admin/adminCinema.html"
    event.preventDefault();
}

const Movie = () => {
    console.log("dfs");
    window.location = "../admin/adminMovie.html"
    event.preventDefault();
}

const seat = () => {
    console.log("dfs");
    window.location = "../admin/addseat.html"
    event.preventDefault();
}

let cinemaName = document.getElementById("cinema-name");

const Seatonload = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.map((v) => {
        let optionref = document.getElementById("cinema-name");

        let optionEle = document.createElement("option");
        let optiontex = document.createTextNode(v.name);

        optionEle.appendChild(optiontex);
        optionEle.setAttribute("value", v.id);

        optionref.appendChild(optionEle);
    });
};

const handlseat = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));

    let FData = localData.filter((value, i) => value.cid === cinemaName.value);

    localData.map((v) => {
        let optionref = document.getElementById("Movie-name");

        let optionEle = document.createElement("option");
        let optiontex = document.createTextNode(v.name);

        optionEle.appendChild(optiontex);
        optionEle.setAttribute("value", v.id);

        optionref.appendChild(optionEle);
    })
}

const handlMovie = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));

    let FData = localData.filter((value, i) => value.cid === cinemaName.value);

    localData.map((v) => {
        let optionref = document.getElementById("Movie-name");

        let optionEle = document.createElement("option");
        let optiontex = document.createTextNode(v.name);

        optionEle.appendChild(optiontex);
        optionEle.setAttribute("value", v.id);

        optionref.appendChild(optionEle);
    });
};

window.onload = Seatonload;