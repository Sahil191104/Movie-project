let cinemaformRef = document.getElementById("cinema_form");

let update = false;
let uid = null;
// let cinemaarr = []

const cinema = () => {
    console.log("dfs");
    document.getElementById("formcinema").style.display = 'block';
    event.preventDefault();
}

const displayData = (cinemaname, cinemalocaton, cinemafacilites, cid) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", "row" + cid);

    let td = document.createElement("td");
    td.setAttribute("id", "bordertd");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td3.setAttribute("id", "bordertd1");

    let button = document.createElement("button");
    button.setAttribute("id", "btnadmin");
    button.setAttribute("onclick", "dataEdit(" + cid + ")");

    let button1 = document.createElement("button");
    button1.setAttribute("id", "btnadmin1");
    button1.setAttribute("onclick", "dataRemove(" + cid + ")");
    let tdvle = document.createTextNode(cinemaname);
    let tdvle1 = document.createTextNode(cinemalocaton);
    let tdvle2 = document.createTextNode(cinemafacilites);

    let btn1 = document.createTextNode("Edit");
    let btn2 = document.createTextNode("Delete");

    let tableref = document.getElementById("tablebody");

    td.appendChild(tdvle);
    tr.appendChild(td);

    td1.appendChild(tdvle1);
    tr.appendChild(td1);

    td2.appendChild(tdvle2);
    tr.appendChild(td2);

    button.appendChild(btn1);
    button1.appendChild(btn2);
    td3.appendChild(button);
    td3.appendChild(button1);
    tr.appendChild(td3);

    tableref.appendChild(tr);
}
const dataEdit = (cid) => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let upadatenew = localdata.filter((v, i) => v.id === cid);

    document.getElementById("name").value = upadatenew[0].name;
    document.getElementById("locaton").value = upadatenew[0].locaton;
    document.getElementById("facilites").value = upadatenew[0].facilites;

    update = true;
    uid = cid;
}

const dataRemove = (cid) => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let trref = document.getElementById("row" + cid);
    trref.remove();

    localdata.map((v, i) => {
        if (v.id === cid) {
            localdata.splice(i, 1);
            localStorage.setItem("cinema", JSON.stringify(localdata));
        };
    });
};

const handleupdate = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let newname = document.getElementById("name").value;
    let newlocaton = document.getElementById("locaton").value;
    let newfacilites = document.getElementById("facilites").value;

    document.getElementById("name").value = "";
    document.getElementById("locaton").value = "";
    document.getElementById("facilites").value = "";

    let updatevalue = localdata.map((a) => {
        console.log(a);
        if (a.id === uid) {
            return {
                id: uid,
                name: newname,
                locaton: newlocaton,
                facilites: newfacilites
            };
        } else {
            return a;
        };
    });
    localdata[uid] = updatevalue;
    localStorage.setItem("cinema", JSON.stringify(updatevalue));
    console.log(updatevalue);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = newname;
    tr.children[1].innerHTML = newlocaton;
    tr.children[2].innerHTML = newfacilites;

    event.preventDefault();
}

const handledeisplay = () => {
    if (update) {
        handleupdate();
    } else {
        cinemaFormUser();
    }
    event.preventDefault();
}

const cinemaFormUser = () => {
    let cinemaname = document.getElementById("name").value;
    let cinemalocaton = document.getElementById("locaton").value;
    let cinemafacilites = document.getElementById("facilites").value;

    document.getElementById("name").value = "";
    document.getElementById("locaton").value = "";
    document.getElementById("facilites").value = "";

    // console.log(cinemaname,cinemalocaton,cinemafacilites);
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let cid = Math.floor(Math.random() * 10);

    if (localdata) {
        localdata.push({
            id: cid,
            name: cinemaname,
            locaton: cinemalocaton,
            facilites: cinemafacilites
        })
        localStorage.setItem("cinema", JSON.stringify(localdata));
    } else {
        localStorage.setItem("cinema", JSON.stringify([{
            id: cid,
            name: cinemaname,
            locaton: cinemalocaton,
            facilites: cinemafacilites
        }]));
        // localStorage.setItem("cinema", JSON.stringify(localdata));
    };

    displayData(cinemaname, cinemalocaton, cinemafacilites, cid);
    document.getElementById("cinematable").style.display = 'inline-block';
    event.preventDefault();
}

const Useronload = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    if (localdata) {
        localdata.map((a) => {
            displayData(a.name, a.locaton, a.facilites, a.id);
            document.getElementById("cinematable").style.display = 'inline-block';
            document.getElementById("formcinema").style.display = 'block';
        });
    };
};

window.onload = Useronload();
cinemaformRef.addEventListener("submit", handledeisplay);