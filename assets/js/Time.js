const handleTime = () => {
    let sessiondataId = parseInt(JSON.parse(sessionStorage.getItem("cuid")));
    let sessiondata = JSON.parse(sessionStorage.getItem("mname"));
    let localData = JSON.parse(localStorage.getItem("Movie"));

    let TimeData = localData.filter((value, i) => sessiondata === value.name && sessiondataId == value.cid);

    console.log(TimeData);
    print = '<div class="row">';
    TimeData.map((value) => {
        console.log("avdfvbf");
        for (let i = 0; i < value.time.length; i++) {
            print += '<div class="col-lg-3 col-2">';
            print += `<div class="flexdiv"><a class="btn btn-primary" onclick="Newtime('${value.time[i]}')" />${value.time[i]}</a>`;
            print += '</div></div>';
        }
    });
    print += '</div>';
    document.querySelector(".displaydataTime").innerHTML = print;
};

const Newtime = (time) => {
    sessionStorage.setItem("time", JSON.stringify(time));
    console.log(time);
    document.querySelector(".displaydataSeat").style.display = "flex";
    handleSeat();
}

const handleSeat = () => {
    // let NameMovie = JSON.parse(sessionStorage.getItem("mname"));
    let Movieid = JSON.parse(sessionStorage.getItem("moviede"));
    let CinemaID = parseInt(JSON.parse(sessionStorage.getItem("cuid")));
    let MovieTime = JSON.parse(sessionStorage.getItem("time"));
    console.log(MovieTime);
    let SeatData = JSON.parse(localStorage.getItem("seat"));

    let SeatDataDisplay = SeatData.filter((value, i) => Movieid === value.mid && CinemaID === value.cid && MovieTime === value.time);

    print = '<div class="row">';
    SeatDataDisplay.map((value) => {
        console.log("VCBGBG");
        for (let i = 0; i < value.seat.length; i++) {
            if (value.seat[i] === 0) {
                print += '<div class="col-lg-3 col-2">';
                print += '<div class="flexdiv">' + '<a id="Seatid' + i + '" onclick="SeatNew(' + value.sid + "," + i + ')" class="btn btn-primary btnMain">' + (i + 1) + '</a>' + '</div>';
                print += '</div>';
            } else {
                print += '<div class="col-lg-3 col-2">';
                print += '<div class="flexdiv">' + '<a id="Seatid' + i + '" onclick="SeatNew(' + value.sid + "," + i + ')" disabled class="btn btn-primary btnMain btncss">' + (i + 1) + '</a>' + '</div>';
                print += '</div>';
            }
        };
        print += '<p class="text"></span> seats for the total price of Rs. <span id="total">0</span></p>';
        print += '<div class="flexdiv widhtdiv">' + '<a onclick="CheckOut(' + value.sid + ')" class="btn btn-primary">Check Out</a>' + '</div>';
    });
    print += '</div>';
    document.querySelector(".displaydataSeat").innerHTML = print;
};

let Seat = [];

const SeatNew = (sid, i) => {
    Seat.push(i);
    console.log(Seat);

    let SeatData = JSON.parse(localStorage.getItem("seat"));
    let SIDSeat = SeatData.filter((value, i) => value.sid * sid);

    SIDSeat.map((value) => {
        if (value.seat[i] === 0) {
            document.getElementById("Seatid" + i).style.background = "var(--citrine)";
            document.getElementById("Seatid" + i).style.color = "#000";
            let Total = SIDSeat[0].Price * Seat.length;
            document.getElementById("total").innerHTML = Total;
        };
    });
};

const CheckOut = (sid) => {
    let SeatData = JSON.parse(localStorage.getItem("seat"));
    let CinemaID = parseInt(JSON.parse(sessionStorage.getItem("cuid")));
    let Movieid = JSON.parse(sessionStorage.getItem("moviede"));
    let MovieTime = JSON.parse(sessionStorage.getItem("time"));

    let SeatDataDisplay = SeatData.filter((value, i) => Movieid === value.mid && CinemaID === value.cid && MovieTime === value.time);

    console.log(SeatDataDisplay);

    SeatDataDisplay[0].seat.map((value, i) => {
        Seat.map((h) => {
            if (i === h) {
                SeatDataDisplay[0].seat[i] = 1;
            };
        });
    });

    let newdatareplace = SeatData.map((value) => {
        if (value.sid === sid) {
            return SeatDataDisplay[0];
        } else {
            return value;
        }
    })

    localStorage.setItem("seat", JSON.stringify(newdatareplace));

    console.log(SeatDataDisplay);

    if (Seat.length !== 0) {
        window.location = "success.html";
    }
}



window.onload = handleSeat();
window.onload = handleTime();