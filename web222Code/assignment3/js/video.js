// Data for the "HTML Video" Page

var video = {
    controls: true,
    width: 320,
    height: 240,
    source: [
        { src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4" },
        { src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg" }
    ]
};

window.onload = function() {
    var videoContent = document.querySelector("#video")
    var myVideo = "<video";
    myVideo += (video.controls == true) ? " controls " : " "
    myVideo += 'width="' + video.width + '" height="' + video.height + '">'
    for (var i = 0; i < video.source.length; i++) {
        myVideo += '<source src="' + video.source[i].src + '" type="' + video.source[i].type + '">'
    }
    myVideo += "Your browser does not support the video tag / type" + "</video>"
    videoContent.innerHTML = myVideo
}