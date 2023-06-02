const handleOnload = () => {
    let sessiondataId = parseInt(JSON.parse(sessionStorage.getItem("cuid")));
    let sessiondata = JSON.parse(sessionStorage.getItem("mname"));
    let localData = JSON.parse(localStorage.getItem("Movie"));

    console.log(sessiondataId);
    console.log(sessiondata);
    console.log(localData);

    let TimeData = localData.filter((value, i) => sessiondata === value.name && sessiondataId == value.cid);

    console.log(TimeData);
    print = '<div class="row">';
    TimeData.map((value) => {
        console.log("avdfvbf");
        for (let i = 0; i < value.time.length; i++) {
            print += '<div class="col-lg-3 col-2">';
            print += `<div class="flexdiv"><a href="Seat.html" class="btn btn-primary" onclick="Newtime('${value.time[i]}')" />${value.time[i]}</a>`;
            print += '</div>';
        }
    });
    print += '</div>';
    document.getElementById("displaydataTime").innerHTML = print;
};

const Newtime = (time) => {
    sessionStorage.setItem("time", JSON.stringify(time));
    console.log(time);
}

window.onload = handleOnload();