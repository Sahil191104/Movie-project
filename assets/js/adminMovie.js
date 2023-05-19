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

let MovieformRef = document.getElementById("Movie_form");

const Movieonload = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    localdata.map((v) => {
        let optionref = document.getElementById("cinema-name");

        let optionEle = document.createElement("option");
        let optiontex = document.createTextNode(v.name);

        optionEle.appendChild(optiontex);
        optionEle.setAttribute("value",v.id);

        optionref.appendChild(optionEle);
    });
};

const hadlebtn = () => {
    let formnewref = document.getElementById("time-display");
    console.log("bfgb");
    let formtag = document.createElement("form");

    let btninput1 = document.createElement("input");
    btninput1.setAttribute("placeholder","Time");
    formtag.appendChild(btninput1);

    let btninput3 = document.createElement("button");
    btninput4.setAttribute("onclick","addbtn()");
    btninput3.setAttribute("id","btn2");
    let btninput3Text = document.createTextNode("+");
    btninput3.appendChild(btninput3Text);
    formtag.appendChild(btninput3);

    let btninput4 = document.createElement("button");
    btninput4.setAttribute("onclick","removebtn()");
    btninput3.setAttribute("id","btn1");
    let btninput4Text = document.createTextNode("-");
    btninput4.appendChild(btninput4Text);
    formtag.appendChild(btninput4);

    formnewref.appendChild(formtag);
}

const handleMovie = () => {
    console.log("scdc");
    let Movieame =document.getElementById("moname").value;
    let MovieDiscription =document.getElementById("moviedis").value;
    let MovieFile =document.getElementById("Moviefile").value;

    let randomMo = Math.floor(Math.random() * 1000);

    let localDatamovie = JSON.parse(localStorage.getItem("Movie"));

    if (localDatamovie) {
        localDatamovie.push({
            id: randomMo,
            name: Movieame,
            desc:MovieDiscription,
            poster:MovieFile
        });
        localStorage.setItem("Movie", JSON.stringify(localDatamovie));
    } else {
        localStorage.setItem("Movie", JSON.stringify([{
            id: randomMo,
            name: Movieame,
            desc:MovieDiscription,
            poster:MovieFile
        }]));
    };

    event.preventDefault();
}

window.onload = Movieonload();
MovieformRef.addEventListener("submit", handleMovie);