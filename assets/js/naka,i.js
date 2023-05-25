// let cinema = document.getElementById('cinema');
// let movie = document.getElementById('movie');
// let time = document.getElementById('time');
// let SeatForm = document.getElementById('SeatForm');
let update = false;
let sid = null;


const displayData = (cinemaName, MovieName, time, seat, randomNumber) => {

    let showData = document.getElementById("showData");

    let tr = document.createElement("tr");
    tr.setAttribute("id", "row" + randomNumber);

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

    let td5 = document.createElement("td");
    let i1 = document.createElement("i");
    i1.setAttribute("onclick", "dataEdit(" + randomNumber + ")");
    i1.setAttribute("class", "fa-solid fa-pen-to-square");
    td5.appendChild(i1);
    let i2 = document.createElement("i");
    i2.setAttribute("onclick", "dataRemove(" + randomNumber + ")");
    i2.setAttribute("class", "fa-sharp fa-solid fa-trash");
    td5.appendChild(i2);
    tr.appendChild(td5);

    showData.appendChild(tr);
}

const dataRemove = (randomNumber) => {
    let localData = JSON.parse(localStorage.getItem('seat'));
    let tr = document.getElementById("row" + randomNumber);
    tr.remove();

    localData.map((value, index) => {
        if (value.sid === randomNumber) {
            localData.splice(index, 1);
            localStorage.setItem('seat', JSON.stringify(localData));
        };
    });
};


const dataEdit = (randomNumber) => {
    let localData = JSON.parse(localStorage.getItem('seat'));
    let updated = localData.filter((value) => value.sid === randomNumber);

    document.getElementById('cinema').value = updated[0].cid;
    document.getElementById('movie').value = updated[0].mid;
    document.getElementById('time').value = updated[0].time;
    document.getElementById('seat').value = updated[0].seat.length;

    update = true;
    sid = randomNumber;
}

const handleUpdate = () => {
    let localData = JSON.parse(localStorage.getItem("seat"));
    let cinema = parseInt(document.getElementById('cinema').value);
    let movie = parseInt(document.getElementById('movie').value);
    let time = document.getElementById('time').value;
    let time2 = document.getElementById('time').value;
    let seat = parseInt(document.getElementById('seat').value);

    document.getElementById('cinema').value = 'Select Cinema';
    document.getElementById('movie').value = 'Select Movie';
    time = document.getElementById('time').value = 'Select Time';
    document.getElementById('seat').value = '';

    // let cinemaData = JSON.parse(localStorage.getItem("cinema"));
    // let movieData = JSON.parse(localStorage.getItem("movie"));

    // let cinemaName;
    // let MovieName;

    // cinemaData.map((value) => {
    //     if (value.cid === cinema) {
    //         cinemaName = value.name;
    //     }
    // });

    // movieData.map((value) => {
    //     if (value.mid === movie) {
    //         MovieName = value.name;
    //     }
    // });

    let seatAry = [];

    for (let i = 0; i <seat; i++) {
        seatAry.push(0);
    };

    let updatedData = localData.map((value) => {
        if (value.sid === sid) {
            return {
                sid: sid,
                cid: cinema,
                mid: movie,
                time: time,
                seat: seatAry
            };
        } else {
            return value;
        };
    });
    localData[sid] = updatedData;
    localStorage.setItem('seat', JSON.stringify(updatedData));

    let tr = document.getElementById("row" + sid);

    tr.children[0].innerHTML = cinema;
    tr.children[1].innerHTML = movie;
    tr.children[2].innerHTML = time2;
    tr.children[3].innerHTML = seat;

    console.log(seat);

    event.preventDefault();
}

let handleOption = () => {
    let localData = JSON.parse(localStorage.getItem("cinema"));
    let select = document.querySelector("#cinema");
    if (localData) {
        localData.map((value) => {
            let option = document.createElement("option");
            option.setAttribute("value", value.cid);
            let optionText = document.createTextNode(value.name);
            option.appendChild(optionText);
            select.appendChild(option);
        });
    }
};

let handleMovie = () => {
    let localData = JSON.parse(localStorage.getItem("movie"));

    let updatedData = localData.filter((value) => value.cid === parseInt(cinema.value));
    let select = document.querySelector("#movie");
    updatedData.map((value) => {
        let option = document.createElement("option");
        option.setAttribute("value", value.mid);
        let optionText = document.createTextNode(value.name);
        option.appendChild(optionText);
        select.appendChild(option);
    });
}
cinema.addEventListener('change', handleMovie);

let handleTime = () => {
    let localData = JSON.parse(localStorage.getItem("movie"));

    let updatedData = localData.filter((value) => value.mid === parseInt(movie.value));
    let select = document.querySelector("#time");
    updatedData.map((value) => {
        for (i = 0; i < value.time.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", value.time[i]);
            let optionText = document.createTextNode(value.time[i]);
            option.appendChild(optionText);
            select.appendChild(option);
        }
    });
}
movie.addEventListener('change', handleTime);


const handleDisplay = () => {
    if (update) {
        handleUpdate();
    } else {
        handleSeatSubmit();
    }
    event.preventDefault();
}

let handleSeatSubmit = () => {

    let cinema = parseInt(document.getElementById('cinema').value);
    let movie = parseInt(document.getElementById('movie').value);
    let time = document.getElementById('time').value;
    let seat = parseInt(document.getElementById('seat').value);

    let randomNumber = Math.floor(Math.random() * 1000);

    // let cinemaData = JSON.parse(localStorage.getItem("cinema"));
    // let movieData = JSON.parse(localStorage.getItem("movie"));
    let localData = JSON.parse(localStorage.getItem("seat"));

    // let cinemaName;
    // let MovieName;

    // cinemaData.map((value) => {
    //     if (value.cid === cinema) {
    //         cinemaName = value.name;
    //     }
    // });

    // movieData.map((value) => {
    //     if (value.mid === movie) {
    //         MovieName = value.name;
    //     }
    // });

    let seatAry = [];

    for (i = 0; i < seat; i++) {
        seatAry.push(0);
    }

    if (localData) {
        localData.push({
            sid: randomNumber,
            cid: cinema,
            mid: movie,
            time: time,
            seat: seatAry
        });
        localStorage.setItem("seat", JSON.stringify(localData));
    } else {
        localStorage.setItem(
            "seat",
            JSON.stringify([
                {
                    sid: randomNumber,
                    cid: cinema,
                    mid: movie,
                    time: time,
                    seat: seatAry
                },
            ])
        );
    }

    // displayData(randomNumber, cinemaName, MovieName, time, seat);
    displayData(cinema, movie, time, seat, randomNumber);

    document.getElementById('cinema').value = 'Select Cinema';
    document.getElementById('movie').value = 'Select Movie';
    time = document.getElementById('time').value = 'Select Time';
    document.getElementById('seat').value = '';

    event.preventDefault();

}
SeatForm.addEventListener('submit', handleDisplay);

const handleLoad = () => {
    let localData = JSON.parse(localStorage.getItem('seat'));

    if (localData) {
        localData.map((value) => {
            displayData(value.cid, value.mid, value.time, value.seat.length);
        });
    };
};

window.onload = handleLoad();
window.onload = handleOption();