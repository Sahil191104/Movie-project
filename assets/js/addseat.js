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
let timeName = document.getElementById("Movie-name");

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

    FData.map((v) => {
        let optionref = document.getElementById("Movie-name");

        let optionEle = document.createElement("option");
        optionEle.setAttribute("value", v.mid);

        let optiontex = document.createTextNode(v.name);

        optionEle.appendChild(optiontex);
        optionref.appendChild(optionEle);
    })
}

const handlMovie = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));

    let FData = localData.filter((value, i) => value.mid === timeName.value);
    console.log(timeName.value);
    
    FData.map((v) => {
        for (i = 0; i < v.time.length; i++) {
            let optionref = document.getElementById("Time-name");

            let optionEle = document.createElement("option");
            optionEle.setAttribute("value", v.time[i]);

            let optiontex = document.createTextNode(v.time[i]);

            optionEle.appendChild(optiontex);
            optionref.appendChild(optionEle);
        }
    });
};

window.onload = Seatonload;