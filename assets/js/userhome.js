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

function search_animal() {
    let input = document.getElementById('myInput').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('name');
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        };
        else {
            x[i].style.display="list-item";
        };
    };
};

window.onload = useronload();