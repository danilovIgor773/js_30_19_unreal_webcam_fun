import './index.scss';

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


//---getVideo() -function gets the video from the webcam and puts it on the stream
function getVideo(){
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`Error detected`, err);
    });
}

function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;
  console.log(video);


  console.log(width, height);
  canvas.width = width;
  canvas.height = height;


  console.log(width, height);
  setInterval(function(){
    ctx.drawImage(video, 0, 0, width, height);
  },16);
}

//paintToCanvas();
getVideo();
paintToCanvas();



//console.log("Hi there!");
