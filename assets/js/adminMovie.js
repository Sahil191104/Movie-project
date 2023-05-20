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

const addbtn = () => {
    let randomMo = Math.floor(Math.random() * 1000);

    console.log("bfgb");
    let formnewref = document.getElementById("time-display");

    let formdiv = document.createElement("div");
    formdiv.classList.add("inputmovie");
    formdiv.setAttribute("id", "row" + randomMo);

    let btninput1 = document.createElement("input");
    btninput1.setAttribute("id","time");
    btninput1.setAttribute("type","text");
    btninput1.setAttribute("placeholder","Time");
    formdiv.appendChild(btninput1);

    let btninput3 = document.createElement("button");
    btninput3.setAttribute("onclick","addbtn()");
    btninput3.setAttribute("id","btn1");
    let btninput3Text = document.createTextNode("+");
    btninput3.appendChild(btninput3Text);
    formdiv.appendChild(btninput3);

    let btninput4 = document.createElement("button");
    btninput4.setAttribute("onclick","removebtn("+randomMo+")");
    btninput4.setAttribute("id","btn2");
    let btninput4Text = document.createTextNode("-");
    btninput4.appendChild(btninput4Text);
    formdiv.appendChild(btninput4);

    formnewref.appendChild(formdiv);

    event.preventDefault();
}

const removebtn = (randomMo) => {
    let trref = document.getElementById("row" + randomMo);

    trref.remove();

    event.preventDefault();
}

const handleMovie = () => {
    console.log("scdc");
    let Movieame =document.getElementById("moname").value;
    let MovieDiscription =document.getElementById("moviedis").value;
    let MovieTime =document.getElementById("time").value;
    let MovieFile =document.getElementById("Moviefile").value;

    let randomMo = Math.floor(Math.random() * 1000);

    let localDatamovie = JSON.parse(localStorage.getItem("Movie"));

    if (localDatamovie) {
        localDatamovie.push({
            id: randomMo,
            name: Movieame,
            desc:MovieDiscription,
            time:[MovieTime],
            poster:MovieFile
        });
        localStorage.setItem("Movie", JSON.stringify(localDatamovie));
    } else {
        localStorage.setItem("Movie", JSON.stringify([{
            id: randomMo,
            name: Movieame,
            desc:MovieDiscription,
            time:[MovieTime],
            poster:MovieFile
        }]));
    };

    event.preventDefault();
}

window.onload = Movieonload();
MovieformRef.addEventListener("submit", handleMovie);