let movieForm = document.getElementById("movieForm");
let update = false;
let mid = null;
let timeForm = document.getElementById("timeForm");
let aryObj = [];

const displayData = (randomNumber, name, description, cinemaName, time, path) => {
  let showData = document.getElementById("showData");

  let tr = document.createElement("tr");
  tr.setAttribute("id", "row" + randomNumber);

  let td1 = document.createElement("td");
  let td1Text = document.createTextNode(name);
  td1.appendChild(td1Text);
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  let td2Text = document.createTextNode(description);
  td2.appendChild(td2Text);
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  let td3Text = document.createTextNode(cinemaName);
  td3.appendChild(td3Text);
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  let td4Text = document.createTextNode(time);
  td4.appendChild(td4Text);
  tr.appendChild(td4);

  let td5 = document.createElement("td");
  let img = document.createElement("img");
  img.setAttribute("src", path);
  td5.appendChild(img);
  tr.appendChild(td5);

  let td6 = document.createElement("td");
  let i1 = document.createElement("i");
  i1.setAttribute("onclick", "dataEdit(" + randomNumber + ")");
  i1.setAttribute("class", "fa-solid fa-pen-to-square");
  td6.appendChild(i1);
  let i2 = document.createElement("i");
  i2.setAttribute("onclick", "dataRemove(" + randomNumber + ")");
  i2.setAttribute("class", "fa-sharp fa-solid fa-trash");
  td6.appendChild(i2);
  tr.appendChild(td6);

  showData.appendChild(tr);
};

const dataRemove = (randomNumber) => {
  let localData = JSON.parse(localStorage.getItem("movie"));
  let tr = document.getElementById("row" + randomNumber);
  tr.remove();

  localData.map((value, index) => {
    if (value.mid === randomNumber) {
      localData.splice(index, 1);
      localStorage.setItem("movie", JSON.stringify(localData));
    }
  });
};


const dataEdit = (randomNumber) => {
  let localData = JSON.parse(localStorage.getItem("movie"));
  let updatedData = localData.filter((value) => value.id === randomNumber);

  let formBox = document.getElementById("formBox");
  let timeValue = document.getElementsByName('time');

  while (formBox.firstChild) {
    formBox.removeChild(formBox.firstChild);
  }

  for (i = 0; i<updatedData[0].time.length; i++) {
    addInputs();
  }

  for (i = 0; i<updatedData[0].time.length; i++) {
    timeValue[i].value = updatedData[0].time[i];
  }

  document.getElementById("name").value = updatedData[0].name;
  document.getElementById("description").value = updatedData[0].description;
  document.getElementById("cinema").value = updatedData[0].cid;
  // document.getElementById("time").value = updatedData[0].aryObj;
  // document.getElementById("poster").value = updatedData[0].path;

  update = true;
  mid = randomNumber;
};

const handleUpdate = () => {
  let localData = JSON.parse(localStorage.getItem("movie"));
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let cinema = document.getElementById("cinema").value;
  let poster = document.getElementById("poster");

  let filePath = poster.files[0].name;
  let path = '../assets/image/' + filePath;

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("cinema").value = "Select value";
  document.getElementById("poster").value = "";

  if (name !== "" || description !== "" || cinema !== "" || poster !== "") {
    let updatedData = localData.map((value) => {
      if (value.mid === mid) {
        return {
          mid: randomNumber,
          name: name,
          description: description,
          cid: cinema,
          time: aryObj,
          poster: path,
        };
      } else {
        return value;
      }
    });
    localData[mid] = updatedData;
    localStorage.setItem("movie", JSON.stringify(updatedData));
  }

  let tr = document.getElementById("row" + mid);

  tr.children[0].innerHTML = name;
  tr.children[1].innerHTML = description;
  tr.children[2].value = cinema;
  tr.children[3].innerHTML = time;
  tr.children[4].innerHTML = path;

  event.preventDefault();
};

const handleDisplay = () => {
  if (update) {
    handleUpdate();
  } else {
    handleMovieForm();
  }
  event.preventDefault();
};

const handleMovieForm = () => {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let cinema = parseInt(document.querySelector("#cinema").value);
  let poster = document.getElementById("poster");

  let filePath = poster.files[0].name;
  let path = '../assets/image/' + filePath;

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.querySelector("#cinema").value = "Select Cinema";
  document.getElementById("poster").value = "";

  let localData = JSON.parse(localStorage.getItem("movie"));
  let randomNumber = Math.floor(Math.random() * 1000);

  if (name !== "" || description !== "" || cinema !== "" || poster !== "") {
    if (localData) {
      localData.push({
        mid: randomNumber,
        name: name,
        description: description,
        cid: cinema,
        time: aryObj,
        poster: path,
      });
      localStorage.setItem("movie", JSON.stringify(localData));
    } else {
      localStorage.setItem(
        "movie",
        JSON.stringify([
          {
            mid: randomNumber,
            name: name,
            description: description,
            cid: cinema,
            time: aryObj,
            poster: path,
          },
        ])
      );
    }
  }
  let cinemaData = JSON.parse(localStorage.getItem("cinema"));
  let cinemaName;
  cinemaData.map((value) => {
    if (value.cid === parseInt(cinema)) {
      cinemaName = value.name;
      // console.log(value.name);
    }
  });
  console.log(parseInt(cinema));
  displayData(mid, name, description, cinemaName, aryObj, path);
  event.preventDefault();
};

const handleLoad = () => {
  let localData = JSON.parse(localStorage.getItem("movie"));

  if (localData) {
    localData.map((value) => {
      displayData(
        value.mid,
        value.name,
        value.description,
        value.cid,
        value.time,
        value.poster
      );
    });
  }
};

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

let addInputs = () => {
  let formBox = document.querySelector("#formBox");

  let randomNumber = Math.floor(Math.random() * 1000);

  let div = document.createElement("div");
  div.setAttribute("id", "row" + randomNumber);
  div.setAttribute("class", "datRow");

  let time = document.createElement("input");
  time.setAttribute("type", "time");
  time.setAttribute("name", "time");
  time.setAttribute("placeholder", "Add Time");

  let plusButton = document.createElement("button");
  plusButton.setAttribute("class", "fa-solid fa-plus");
  plusButton.setAttribute("type", "button");
  plusButton.setAttribute("onclick", "addInputs()");

  let minusButton = document.createElement("button");
  minusButton.setAttribute("class", "fa-solid fa-minus");
  minusButton.setAttribute("type", "button");
  minusButton.setAttribute("onclick", "removeRow(" + randomNumber + ")");

  div.appendChild(time);
  div.appendChild(plusButton);
  div.appendChild(minusButton);

  formBox.appendChild(div);

  event.preventDefault();
};

let removeRow = (randomNumber) => {
  let row = document.querySelector("#row" + randomNumber);
  row.remove();

  aryObj = [];
};

let handleTimeForm = () => {
  let timeData = document.getElementsByName("time");

  aryObj = [];
  for (let i = 0; i < timeData.length; i++) {
    aryObj.push(timeData[i].value);
  }
  event.preventDefault();
};

timeForm.addEventListener("click", handleTimeForm);


let windowsHeight = () => {
  if (window.innerHeight < 10000) {
    document.querySelector('.sidebar').style.height = '100vh';
  } else {
    document.querySelector('.sidebar').style.height = window.innerHeight;
  }
}

window.onload = handleLoad();
window.onload = handleOption();
window.onload = windowsHeight();
movieForm.addEventListener("submit", handleDisplay);