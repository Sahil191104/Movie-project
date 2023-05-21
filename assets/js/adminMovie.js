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

let update = false;
let id = null;

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

const handleLoad = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));

    if (localData) {
        localData.map((value) => {
            displayData(value.id, value.name, value.desc, value.time, value.poster);
            document.getElementById("FormMovie1").style.display = "block";
        });
    };
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

const displayData = (randomMo, Movieame, MovieDiscription, MovieTime, MovieFile) => {

    let timeForm = document.getElementById("tablebody");

    let tr = document.createElement("tr");
    tr.setAttribute("id", "row" + randomMo);

    let td1 = document.createElement("td");
    let td1Text = document.createTextNode(Movieame);
    td1.appendChild(td1Text);
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    let td2Text = document.createTextNode(MovieDiscription);
    td2.appendChild(td2Text);
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    let td3Text = document.createTextNode(MovieTime);
    td3.appendChild(td3Text);
    tr.appendChild(td3);

    // let td4 = document.createElement("td");
    // let td4Text = document.createTextNode(time);
    // td4.appendChild(td4Text);
    // tr.appendChild(td4);

    let td5 = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", MovieFile);
    td5.appendChild(img);
    tr.appendChild(td5);

    let td6 = document.createElement("td");

    let td6div = document.createElement("div");
    td6div.setAttribute("id", "divbtn");

    let i1 = document.createElement("button");
    i1.setAttribute("onclick", "dataEdit(" + randomMo + ")");
    i1.setAttribute("id", "btnadmin1");
    let btn1 = document.createTextNode("Edit");
    i1.appendChild(btn1);
    td6div.appendChild(i1);
    td6.appendChild(td6div);

    let i2 = document.createElement("button");
    i2.setAttribute("onclick", "dataRemove(" + randomMo + ")");
    i2.setAttribute("id", "btnadmin1");
    let btn2 = document.createTextNode("Delete");
    i2.appendChild(btn2);
    td6div.appendChild(i2);
    td6.appendChild(td6div);
    tr.appendChild(td6);

    timeForm.appendChild(tr);
}

const dataRemove = (randomMo) => {
    let localData = JSON.parse(localStorage.getItem("Movie"));
    let tr = document.getElementById("row" + randomMo);
    tr.remove();

    localData.map((value, index) => {
        if (value.id === randomMo) {
            localData.splice(index, 1);
            localStorage.setItem("Movie", JSON.stringify(localData));
        };
    });
};

const handleMovie = () => {
    console.log("scdc");
    let Movieame =document.getElementById("moname").value;
    let MovieDiscription =document.getElementById("moviedis").value;
    let MovieTime =document.getElementById("time").value;
    let MovieFile =document.getElementById("Moviefile").value;

    let randomMo = Math.floor(Math.random() * 1000);

    let localData = JSON.parse(localStorage.getItem("Movie"));

    if (localData) {
        localData.push({
            id: randomMo,
            name: Movieame,
            desc:MovieDiscription,
            time:[MovieTime],
            poster:MovieFile
        });
        localStorage.setItem("Movie", JSON.stringify(localData));
    } else {
        localStorage.setItem("Movie", JSON.stringify([{
            id: randomMo,
            name: Movieame,
            desc:MovieDiscription,
            time:[MovieTime],
            poster:MovieFile
        }]));
    };
    displayData(id, name, desc, time, poster);
    event.preventDefault();
}

window.onload = Movieonload();
window.onload = handleLoad();
MovieformRef.addEventListener("submit", handleMovie);