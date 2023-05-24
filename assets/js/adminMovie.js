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

let update = false;
let id = null;
let arr = [];

let MovieformRef = document.getElementById("Movie_form");

const Movieonload = () => {
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
    let formnewref = document.getElementById("time-form");

    let formdiv = document.createElement("div");
    formdiv.classList.add("inputmovie");
    formdiv.setAttribute("id", "row" + randomMo);

    let btninput1 = document.createElement("input");
    btninput1.setAttribute("id", "inbtn");
    btninput1.setAttribute("name", "time");
    btninput1.setAttribute("type", "time");
    btninput1.setAttribute("placeholder", "Time");
    formdiv.appendChild(btninput1);

    let btninput3 = document.createElement("button");
    btninput3.setAttribute("onclick", "addbtn()");
    let btninput3Text = document.createTextNode("+");
    btninput3.setAttribute("id", "btn1");
    btninput3.appendChild(btninput3Text);
    formdiv.appendChild(btninput3);

    let btninput4 = document.createElement("button");
    btninput4.setAttribute("onclick", "removebtn(" + randomMo + ")");
    btninput4.setAttribute("id", "btn2");
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

const displayData = (randomMo, Movieame, MovieDiscription, time, Path) => {

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
    let td3Text = document.createTextNode(time);
    td3.appendChild(td3Text);
    tr.appendChild(td3);

    // let td4 = document.createElement("td");
    // let td4Text = document.createTextNode(time);
    // td4.appendChild(td4Text);
    // tr.appendChild(td4);

    let td5 = document.createElement("td");
    let td5div = document.createElement("div");
    td5div.setAttribute("id","divtd6");
    let img = document.createElement("img");
    img.setAttribute("src", Path);
    td5div.appendChild(img);
    td5.appendChild(td5div);
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

const dataEdit = (randomMo) => {
    let localData = JSON.parse(localStorage.getItem("Movie"));

    update = true;
    uid = randomMo;

    let upadatenew = localData.filter((value, i) => value.id === randomMo);

    let formtime = document.getElementById("time-form");

    while (formtime.firstChild) {
        formtime.firstChild.remove();
    }

    for (let i=0; i<upadatenew[0].time.length; i++) {
        addbtn();
        console.log("ascdsv");
    }

    let MovieTime = document.getElementsByName("time");

    for (let i=0; i<upadatenew[0].time.length; i++) {
        console.log(upadatenew[0][i]);
        MovieTime[i].value = upadatenew[0].time[i];
    }

    document.getElementById("moname").value = upadatenew[0].name;
    document.getElementById("moviedis").value = upadatenew[0].desc;
    document.getElementById("Moviefile").value = upadatenew[0].poster;

    console.log(poster);
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

const handleupdate = () => {
    // console.log('handleupdate Call Method');
    // let localData = JSON.parse(localStorage.getItem("Movie"));
    // let newname = document.getElementById("moname").value;
    // let newdis = document.getElementById("moviedis").value;
    // let newfile = document.getElementById("Moviefile").value;

    // document.getElementById("moname").value = "";
    // document.getElementById("moviedis").value = "";
    // document.getElementById("Moviefile").value = "";

    console.log("scdc");
    let Movieame = document.getElementById("moname").value;
    let MovieDiscription = document.getElementById("moviedis").value;
    let MovieFile = document.getElementById("Moviefile");
    let MovieTime = document.getElementsByName("time");
    let Mcid = document.getElementById("cinema-name").value;

    console.log(MovieTime);

    for (let i=0; i<MovieTime.length; i++) {
        arr.push(MovieTime[i].value);
    }

    let filePath = MovieFile.files[0].name;
    let Path = '../assets/image/' + filePath;

    console.log(arr);

    let randomMo = Math.floor(Math.random() * 1000);

    let localData = JSON.parse(localStorage.getItem("Movie"));

    let updatevalue = localData.map((a) => {
        console.log(a);
        if (a.id === uid) {
            return {
                id: randomMo,
                cid:Mcid,
                name: Movieame,
                desc: MovieDiscription,
                time: arr,
                poster: Path
            };
        } else {
            return a;
        };
    });
    localData[uid] = updatevalue;
    localStorage.setItem("Movie", JSON.stringify(updatevalue));
    console.log(updatevalue);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = newname;
    tr.children[1].innerHTML = newdis;
    tr.children[2].innerHTML = newfile;

    event.preventDefault();
}

const handledeisplay = () => {
    if (update) {
        handleupdate();
    } else {
        handleMovie();
    }
    event.preventDefault();
}

const handleMovie = () => {
    console.log("scdc");
    let Movieame = document.getElementById("moname").value;
    let MovieDiscription = document.getElementById("moviedis").value;
    let MovieFile = document.getElementById("Moviefile");
    let MovieTime = document.getElementsByName("time");
    let Mcid = document.getElementById("cinema-name").value;

    console.log(Mcid);

    for (let i=0; i<MovieTime.length; i++) {
        arr.push(MovieTime[i].value);
    }

    let filePath = MovieFile.files[0].name;
    let Path = '../assets/image/' + filePath;

    console.log(arr);

    let randomMo = Math.floor(Math.random() * 1000);

    let localData = JSON.parse(localStorage.getItem("Movie"));

    if (localData) {
        localData.push({
            id: randomMo,
            cid:Mcid,
            name: Movieame,
            desc: MovieDiscription,
            time: arr,
            poster: Path
        });
        localStorage.setItem("Movie", JSON.stringify(localData));
    } else {
        localStorage.setItem("Movie", JSON.stringify([{
            id: randomMo,
            cid:Mcid,
            name: Movieame,
            desc: MovieDiscription,
            time: arr,
            poster: Path
        }]));
    };
    displayData(id, name, desc, time, poster);
    event.preventDefault();
}

window.onload = Movieonload();
window.onload = handleLoad();
MovieformRef.addEventListener("submit", handledeisplay);