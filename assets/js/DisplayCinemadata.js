const handleOnload = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));
    let sessiondata = JSON.parse(sessionStorage.getItem("mname"));

    let movieData = localData.filter((value, i) => sessiondata === value.name);
    let temp = [];

    movieData.map((value) => {
        temp.push(value.cid);
        console.log(temp);

        let localdata = JSON.parse(localStorage.getItem("cinema"));
        print = '<div class="row">';
        localdata.map((value) => {
            for (let i = 0; i < temp.length; i++) {
                // console.log(temp.length);
                // console.log(value.id);
                // console.log(parseInt(temp[i]));
                if (value.id === parseInt(temp[i])) {
                    console.log("vfvf");
                    print += '<div class="col-lg-3 col-2">';
                    print += '<div class="card bg-body-tertiary">';
                    print += '<div class="card-body">';
                    print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Name: </h6>' + '<span>' + value.name + '</span>' + '</div>';
                    print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Location: </h6>' + '<span>' + value.locaton + '</span>' + '</div>';
                    print += '<div class="flexdiv">' + '<h6 class="card-title">Cinema Facility: </h6>' + '<span>' + value.facilites + '</span>' + '</div>';
                    print += '</div></div></div>';
                };
            };
        });
        print += '</div>';
        console.log(print);
        document.getElementById("displaydatacinama").innerHTML = print;
    });
};

window.onload = handleOnload();