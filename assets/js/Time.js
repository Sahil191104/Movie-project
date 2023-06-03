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
    document.getElementById("displaydataTime").innerHTML = print;
};

const Newtime = (time) => {
    sessionStorage.setItem("time", JSON.stringify(time));
    console.log(time);
    document.getElementById("displaydataSeat").style.display = "flex";
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
            print += '<div class="col-lg-3 col-2">';
            print += '<div class="flexdiv">' + '<a class="btn btn-primary">'+ value.seat[i] +'</a>' + '</div>';
            print += '</div>';
        };
    });
    print += '</div>';
    document.getElementById("displaydataSeat").innerHTML = print;
};

window.onload = handleSeat();
window.onload = handleTime();