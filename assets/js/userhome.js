const useronload = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    if (localdata) {
        print = '<div id=""row>';
        localdata.map((value) => {
            print += '<div id = "div1">' + '<h2>' + "Cinema Name:-" + '</h2>' + '<span>' + value.name + '</span>' + '</div>';
            print += '<div id = "div1">' + '<h2>' + "Cinema Locaton:-" + '</h2>' + '<span>' + value.locaton + '</span>' + '</div>';
            print += '<div id = "div1">' + '<h2>' + "Cinema Facilites:-" + '</h2>' + '<span>' + value.facilites + '</span>' + '</div>';
            print += '<br>' + '</br>';
        });
        print += '</div>';
    };

    document.querySelector(".login").innerHTML = print;
}

// function myFunction () {
//     var input, filter, ul, di, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("row");
//     di = ul.getElementsByTagName("div");
//     for (i = 0; i < di.length; i++) {
//         a = di[i].getElementsByTagName("span")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             di[i].style.display = "";
//         } else {
//             di[i].style.display = "none";
//         }
//     }
// }

window.onload = useronload();