let cinema = document.getElementById('cinema');
let movie = document.getElementById('movie');
let time = document.getElementById('time');
let SeatForm = document.getElementById('SeatForm');

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

let handleSeatSubmit = () => {
    let cinema = parseInt(document.getElementById('cinema').value);
    let movie = parseInt(document.getElementById('movie').value);
    let time = document.getElementById('time').value;
    let seat = parseInt(document.getElementById('seat').value);

    let cinemaData = JSON.parse(localStorage.getItem("cinema"));
    let movieData = JSON.parse(localStorage.getItem("movie"));
    let localData = JSON.parse(localStorage.getItem("seat"));

    let cinemaName;
    let MovieName;

    cinemaData.map((value) => {
        if (value.cid === cinema) {
            cinemaName = value.name;
        }
    });

    movieData.map((value) => {
        if (value.mid === movie) {
            MovieName = value.name;
        }
    });

    if (localData) {
        localData.push({
            cinema: cinemaName,
            movie: MovieName,
            time: time,
            seat: seat
        });
        localStorage.setItem("seat", JSON.stringify(localData));
    } else {
        localStorage.setItem(
            "seat",
            JSON.stringify([
                {
                    cinema: cinemaName,
                    movie: MovieName,
                    time: time,
                    seat: seat
                },
            ])
        );
    }
    // localStorage.setItem('seat', JSON.stringify(seatObj));

    document.getElementById('cinema').value

    event.preventDefault();

}
SeatForm.addEventListener('submit', handleSeatSubmit)



window.onload = handleOption();