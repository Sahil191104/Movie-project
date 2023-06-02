const handleOnload = () => {
    let NameMovie = JSON.parse(sessionStorage.getItem("mname"));
    let Movieid = JSON.parse(sessionStorage.getItem("moviede"));
    let sessiondataId = parseInt(JSON.parse(sessionStorage.getItem("cuid")));
    let MovieTime = JSON.parse(sessionStorage.getItem("time"));
    let SeatData = JSON.parse(localStorage.getItem("seat"));

    // print = '<div class="row">';
    // TimeData.map((value) => {
    //     console.log("avdfvbf");
    //     for (let i = 0; i < value.time.length; i++) {
    //         print += '<div class="col-lg-3 col-2">';
    //         print += '<div class="flexdiv">' + '<a href="Time.html" onclick="NewDataTime('+ value.id +')" class="btn btn-primary">'+ +'</a>' + '</div>';
    //         print += '</div>';
    //     }
    // });
    // print += '</div>';
    // document.getElementById("displaydataTime").innerHTML = print;
};

window.onload = handleOnload();