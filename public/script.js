
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true;

let myVideoStream;
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    myVideoStream = stream;
    addVideoStram(myVideo, stream);
});

const addVideoStram = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
     videoGrid.append(video);
}