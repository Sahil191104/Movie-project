const handleOnload = () => {
    let localData = JSON.parse(localStorage.getItem("Movie"));
    let sessiondata = JSON.parse(sessionStorage.getItem("moviede"));

    let movieData = localData.filter((value, i) => value.mid === sessiondata);

    print = '<div class="container">';
    movieData.map((value) => {
        print += '<figure class="movie-detail-banner">';
        print += '<a href="">';
        print += '<img src="' + value.poster + '" alt="Free guy movie poster">';
        print += '<button class="play-btn">';
        print += '<ion-icon name="play-circle-outline"></ion-icon>';
        print += '</button>';
        print += '</a>';
        print += '</figure>';
        print += '<div class="movie-detail-content">';
        print += '<h1 class="h1 detail-title">' + value.name + '</h1>';
        print += '<div class="meta-wrapper">';
        print += '<div class="badge-wrapper">';
        print += '<div class="badge badge-fill">PG 13</div>';
        print += '<div class="badge badge-outline">HD</div>';
        print += '</div>';
        print += '<div class="date-time">';
        print += '<i class="fa-solid fa-timer"></i>';
        print += '<div>';
        print += '<time>' + value.time + '</time>';
        print += '</div>';
        print += '</div>';
        print += '</div>';
        print += '<p class="storyline">' + value.desc + '</p>';
        print += '<div class="details-actions">';
        print += '<button class="share">';
        print += '<ion-icon name="share-social"><i class="fa-sharp fa-solid fa-share-nodes"></i></ion-icon>';
        print += '<span>Share</span>';
        print += '</button>';
        print += '<div class="title-wrapper">';
        print += '<p class="title">Prime Video</p>';
        print += '<p class="text">Streaming Channels</p>';
        print += '</div>';
        print += '<button class="btn btn-primary">';
        print += '<ion-icon name="play"></ion-icon>';
        print += `<a href="DisplayCinemadata.html" onclick="Newciname('${value.name}')" />Book Now</a>`;
        print += '</button>';
        print += '</div>';
        print += '</div>';
    });
    print += '</div>';

    document.querySelector(".movie-detail").innerHTML = print;
};

const Newciname = (mname) => {
    sessionStorage.setItem("mname", JSON.stringify(mname));
    console.log(mname);
}

window.onload = handleOnload();