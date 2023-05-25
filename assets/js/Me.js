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
let sid = null;

let cinemaName = document.getElementById("cinema-name");
let SeatForm = document.getElementById("seat_form");

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

    let FData = localData.filter((value) => value.cid === cinemaName.value);

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
    let timeName = document.getElementById("Movie-name");

    let FData = localData.filter((value) => value.mid === parseInt(timeName.value));
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

const displayData = (cinemaName, MovieName, time, seat, randomset) => {

    let timeForm = document.getElementById("tablebody");

    let tr = document.createElement("tr");
    tr.setAttribute("id", "row" + randomset);

    let td1 = document.createElement("td");
    let td1Text = document.createTextNode(cinemaName);
    td1.appendChild(td1Text);
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    let td2Text = document.createTextNode(MovieName);
    td2.appendChild(td2Text);
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    let td3Text = document.createTextNode(time);
    td3.appendChild(td3Text);
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    let td4Text = document.createTextNode(seat);
    td4.appendChild(td4Text);
    tr.appendChild(td4);

    let td6 = document.createElement("td");
    let td6div = document.createElement("div");
    td6div.setAttribute("id", "divbtn");
    let i1 = document.createElement("button");
    i1.setAttribute("onclick", "dataEdit(" + randomset + ")");
    i1.setAttribute("id", "btnadmin1");
    let btn1 = document.createTextNode("Edit");
    i1.appendChild(btn1);
    td6div.appendChild(i1);
    td6.appendChild(td6div);

    let i2 = document.createElement("button");
    i2.setAttribute("onclick", "dataRemove(" + randomset + ")");
    i2.setAttribute("id", "btnadmin1");
    let btn2 = document.createTextNode("Delete");
    i2.appendChild(btn2);
    td6div.appendChild(i2);
    td6.appendChild(td6div);
    tr.appendChild(td6);

    timeForm.appendChild(tr);
}

const dataEdit = (randomset) => {
    let localData = JSON.parse(localStorage.getItem("seat"));

    let upadatenew = localData.filter((value, i) => value.sid === randomset);

    document.getElementById("cinema-name").value = upadatenew[0].cid;
    document.getElementById("Movie-name").value = upadatenew[0].mid;
    document.getElementById("Time-name").value = upadatenew[0].time;
    document.getElementById("moname").value = upadatenew[0].seat.length;

    update = true;
    sid = randomset;
    
    console.log(poster);
}

const dataRemove = (randomset) => {
    let localData = JSON.parse(localStorage.getItem("seat"));
    let tr = document.getElementById("row" + randomset);
    tr.remove();

    localData.map((value, index) => {
        if (value.sid === randomset) {
            localData.splice(index, 1);
            localStorage.setItem("seat", JSON.stringify(localData));
        };
    });
};

const handleupdate = () => {
    let cinema = parseInt(document.getElementById('cinema-name').value);
    let movie = parseInt(document.getElementById('Movie-name').value);
    let time = document.getElementById('Time-name').value;
    let seat = parseInt(document.getElementById('moname').value);
    let timeame = document.getElementById("Time-name").value;

    // let cinemaData = JSON.parse(localStorage.getItem("cinema"));
    // let movieData = JSON.parse(localStorage.getItem("Movie"));

    // let cinemaName;
    // let MovieName;

    // cinemaData.map((value) => {
    //     if (value.id === cinema) {
    //         cinemaName = value.name;
    //     };
    // });
    // console.log(cinemaName);

    // movieData.map((value) => {
    //     if (value.mid === movie) {
    //         MovieName = value.name;
    //     };
    // });

    let randomset = Math.floor(Math.random() * 1000);

    let localData = JSON.parse(localStorage.getItem("seat"));

    let seatarray = [];

    for (let i = 0; i < seat; i++) {
        seatarray.push(0);
    };

    let updatevalue = localData.map((a) => {
        if (a.sid === sid) {
            return {
                sid: sid,
                cid: cinema,
                mid: movie,
                time: time,
                seat: seatarray
            };
        } else {
            return a;
        };
    });
    localData[sid] = updatevalue;
    localStorage.setItem("seat", JSON.stringify(updatevalue));

    let tr = document.getElementById("row" + sid);

    tr.children[0].innerHTML = cinema;
    console.log(tr.children[0].innerHTML);
    tr.children[1].innerHTML = movie;
    tr.children[2].innerHTML = timeame;
    tr.children[3].innerHTML = seat;

    event.preventDefault();
}

const handledeisplay = () => {
    if (update) {
        handleupdate();
    } else {
        handleSubmit();
    }
    event.preventDefault();
}

let handleSubmit = () => {
    let cinema = parseInt(document.getElementById('cinema-name').value);
    let movie = parseInt(document.getElementById('Movie-name').value);
    let time = document.getElementById('Time-name').value;
    let seat = parseInt(document.getElementById('moname').value);
    // let timeame = document.getElementById("Time-name").value;

    document.getElementById('cinema-name').value = "";
    document.getElementById('Movie-name').value = "";
    document.getElementById('Time-name').value = "";
    document.getElementById('moname').value = "";

    let randomset = Math.floor(Math.random() * 1000);

    // let cinemaData = JSON.parse(localStorage.getItem("cinema"));
    // let movieData = JSON.parse(localStorage.getItem("Movie"));
    let localData = JSON.parse(localStorage.getItem("seat"));

    // let cinemaName;
    // let MovieName;

    // cinemaData.map((value) => {
    //     if (value.id === cinema) {
    //         cinemaName = value.name;
    //     };
    // });
    // console.log(cinemaName);

    // movieData.map((value) => {
    //     if (value.mid === movie) {
    //         MovieName = value.name;
    //     };
    // });

    let seatarray = [];

    for (let i = 0; i < seat; i++) {
        seatarray.push(0);
    };

    if (localData) {
        localData.push({
            cid: cinema,
            mid: movie,
            time: time,
            sid:randomset,
            seat: seatarray
        });
        localStorage.setItem("seat", JSON.stringify(localData));
    } else {
        localStorage.setItem("seat", JSON.stringify([{
            cid: cinema,
            mid: movie,
            time: time,
            sid:randomset,
            seat: seatarray
        }]));
    }

    displayData(cinema, movie, time, seat, randomset);

    event.preventDefault();
}

const handleLoad = () => {
    let localData = JSON.parse(localStorage.getItem('seat'));

    if (localData) {
        localData.map((value) => {
            displayData(value.cid, value.mid, value.time, value.seat.length);
        });
    };
};

window.onload = Seatonload;
// window.onload = handleLoad();
// console.log(handleLoad());
SeatForm.addEventListener('submit', handledeisplay);