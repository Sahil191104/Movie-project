const useronload = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    if (localdata) {
        localdata.map((value) => {
            print += '<h5>' + "Cinema Name:-" + '</h5>' + '<p>' + value.name + '</p>';
            print += '<h5>' + "Cinema Locaton:-" + '</h5>' + '<p>' + value.locaton + '</p>';
            print += '<h5>' + "Cinema Facilites:-" + '</h5>' + '<p>' + value.facilites + '</p>';
        });
    };

    document.querySelector(".login").innerHTML = print;
}

function search_CLUE() {
    let input = document.getElementById('myInput').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('name');
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        };
    };
};

window.onload = useronload();