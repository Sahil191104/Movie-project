/** 
     * The function retrieves cinema data from local storage based on a selected movie and displays it on a 
     * webpage. 
     */ 
let showCinema = () => { 
    let sessionCinemaName = JSON.parse(sessionStorage.getItem("movieName")); 
    let localMovieData = JSON.parse(localStorage.getItem("movie")); 
    
    let updatedData = localMovieData.filter((value) => sessionCinemaName === value.name); 
    
    let cidAry = [];
    
    updatedData.map((value) => {
        cidAry.push(value.cid);
    }); 
    
    console.log(cidAry);
    
    let localCinemaData = JSON.parse(localStorage.getItem("cinema")); 
    
    let print = '<div class="row">';
    
    print += '<p class="my-3 fw-600 fs-5">' + sessionCinemaName + '</p>'; 
    
    localCinemaData.map((value) => {
    for (i = 0; i < cidAry.length; i++) {
        if (value.cid === cidAry[i]) { 
            print += '<div class="col-lg-3 col-2" id="col' + value.cid + ' ">'; 
            print += '<a class="card text-decoration-none" href="cinema-details.html" onclick="getCinemaId(' + value.cid + ')">'; 
            print += '<div class="card-body">'; 
            print += '<h6 class="card-title fw-600">Cinema Name: <span class="fw-400"> ' + value.name + '</span></h6>'; 
            print += '<div class="fw-600">Cinema location: <span class="fw-400">' + value.location + '</span></div>'; 
            print += '<div class="fw-600">Cinema facility: <span class="fw-400">' + value.facility + '</span></div>'; 
            print += '</div></a></div>'; 
        };
    }}); 
    
    print += '</div>'; 
    
    document.querySelector('.ShowMovieData').innerHTML = print;
}
    
window.onload = showCinema();