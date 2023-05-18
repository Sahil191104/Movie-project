let loginformRef =document.getElementById("login_form");

const loginform = () => {
    let localdata = JSON.parse(localStorage.getItem("register"));

    let emaillogin = document.getElementById("email").value;
    let passwordlogin = document.getElementById("password").value;

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // if (localdata) {
    //     localStorage.setItem("register", JSON.stringify([{}]));
    //     localdata.push({
    //         logemail:emaillogin,
    //         logpassword:passwordlogin,
    //     })
    //     localStorage.setItem("register", JSON.stringify(localdata));
    // }

    if(emaillogin === 'sahilrupareliya95@gamil.com'){
        if(passwordlogin === 'sahil123'){
            alert('The login successful.');
            window.location="./admin/adminhome.html";
        };
    } else {
        localdata.map((value)=>{
            if(emaillogin === value.email){
                if(passwordlogin === value.password){
                    window.location ="./user/userhome.html";
                };
            };
        });
    };

    event.preventDefault();
}

loginformRef.addEventListener("submit",loginform);