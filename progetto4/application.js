var contenitore = {
    audioList : "#listaAudio",
    videoList : "#listaVideo",
    player: new AudioVideo(),
    init: function () {
        contenitore.player.mediaPath = "assets";
        contenitore.loadMedia();
    },
    loadMedia:function(){
       $.ajax({
           //type: "GET",
           url:"assets/data/media.json",
           dataType:"json",
           success: function (response) {
            contenitore.player.audioFiles = response.audio;
            contenitore.player.videoFiles = response.video;
            contenitore.stampa();
           }
       });
    },
    stampa:function(){
        audioSrc = "";
        videoSrc = "";
        for(i=0; i<contenitore.player.audioFiles.length; i++){
            audioSrc += "<li class='list-group-item' onclick=\"contenitore.player.playMedia('"+contenitore.player.audioFiles[i].file+"', '"+contenitore.player.types.audio+"')\">"+contenitore.player.audioFiles[i].title+"</li>";
        }
        for (i = 0; i < contenitore.player.videoFiles.length; i++) {
            videoSrc += "<li class='list-group-item' onclick=\"contenitore.player.playMedia('" + contenitore.player.videoFiles[i].file + "', '" + contenitore.player.types.video + "')\">" + contenitore.player.videoFiles[i].title + "</li>";
        }
        $(contenitore.audioList).html(audioSrc);
        $(contenitore.videoList).html(videoSrc);
    }
}

function AudioVideo (){
    this.audioFiles = [];
    this.videoFiles = [];
    this.mediaPath = "";
    this.types = {
        audio : "audio",
        video : "video"
    };
    this.playMedia = function(path, type){
        var media = document.getElementsByTagName(type)[0];
        media.setAttribute("src", this.mediaPath + "/" + type + "/" + path);
        media.play();
    }
}

$(document).ready(contenitore.init);