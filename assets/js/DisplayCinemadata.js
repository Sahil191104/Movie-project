const handleOnload = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));
    let sessiondata = JSON.parse(sessionStorage.getItem("mname"));

    let movieData = localData.filter((value, i) => sessiondata === value.name);
    let temp = [];

    movieData.map((value) => {
        temp.push(value.cid);
        console.log(temp);

        let localdata = JSON.parse(localStorage.getItem("cinema"));
        print = '<ul class="movies-list has-scrollbar">';
        localdata.map((value) => {
            for (let i = 0; i < temp.length; i++) {
                // console.log(temp.length);
                // console.log(value.id);
                // console.log(parseInt(temp[i]));
                if (value.id === parseInt(temp[i])) {
                    print += '<li>';
                    print += '<div class="movie-card">';
                    print += '<div class="title-wrapper">';
                    print += '<a href="Time.html" onclick="NewDataTime('+ value.id +')">';
                    print += '<h3 class="card-title">Cinema Name : <time>' + value.name + '</time></h3>';
                    print += '<br>';
                    print += '<h3 class="card-title">Cinema Location : <time>' + value.locaton + '</time></h3>';
                    print += '<br>';
                    print += '<h3 class="card-title">Cinema Facility : <time>' + value.facilites + '</time></h3>';
                    print += '</a>';
                    print += '</div>';
                    print += '</div>';
                    print += '</li>';
                };
            };
        });
        print += '</ul>';
        console.log(print);
        document.querySelector(".displaydatacinama").innerHTML = print;
    });
};

const NewDataTime = (cuid) => {
    sessionStorage.setItem("cuid", JSON.stringify(cuid));
    console.log(cuid);
}

window.onload = handleOnload();