window.onload=function(){

  var myAudio = document.getElementById('my-audio');
  var audioplay = document.getElementById('audio-play');
  var audiopause = document.getElementById('audio-pause');

  // refer to the functions below 
	
  function playAudio() {
    myAudio.play();  
    return false;
  }

  function pauseAudio() {
    myAudio.pause(); 
    return false;   
  }
  
  audioplay.onclick = playAudio;
  audiopause.onclick = pauseAudio;   
  
  var myVideo = document.getElementById('my-video');
  var videoplay = document.getElementById('video-play');
  var videopause = document.getElementById('video-pause');

  // refer to the functions below 

  function playVideo() {    
    myVideo.play();  
    return false;
  }

  function pauseVideo() {
    myVideo.pause(); 
    return false;   
  }

  videoplay.onclick = playVideo;
  videopause.onclick = pauseVideo;
};