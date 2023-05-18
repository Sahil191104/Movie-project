let registerformRef = document.getElementById("register_form")
// let userarr =[];

const registerform = ()  => {
    let userformRef = document.getElementById("register_form");
    let useremail =document.getElementById("useremail").value;
    let userpsaw =document.getElementById("userpassword").value;
    let username = document.getElementById("userid").value;
    let date = document.getElementById("dateofDOB").value;

    let localdata = JSON.parse(localStorage.getItem("register"));

    if(localdata){
        localdata.push({
            name:username,
            email:useremail,
            password:userpsaw,
            DOB:date
        });
        localStorage.setItem("register", JSON.stringify(localdata));
    }else{
        localStorage.setItem("register", JSON.stringify([{
            name:username,
            email:useremail,
            password:userpsaw,
            DOB:date
        }]));
        // localStorage.setItem("register", JSON.stringify(localdata));
    }
    
    if(userformRef != ''){
        window.location.href= "../index.html";
    }

    // console.log(localStorage.key[0].value);
    event.preventDefault();
}

registerformRef.addEventListener("submit" ,registerform);