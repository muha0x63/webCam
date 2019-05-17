var constraints = {video: {faceingMode: "user", audio: false}};


const cameraView = document.querySelector("#camera--view");
const cameraOutput = document.querySelector("#camera--output");
const cameraSensor = document.querySelector("#camera--sensor");
const cmaeraTrigger = document.querySelector("#camera--trigger");

function cmaeraStart() {
	navigator.mediaDevices
	.getUserMedia(constraints)
	.then(function(stream){
		track = stream.getTracks()[0];
		cameraView.srcObject = stream
	})
	.catch(function(error){
		console.error("Oops, Something is broken", error)
	})
}

cmaeraTrigger.onclick = function(){
	cameraSensor.width = cameraView.videoWidth;
	cameraSensor.height = cameraView.videoHeight;
	cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
	cameraOutput.src = cameraSensor.toDataURL("image/webp");
	cameraOutput.classList.add("taken")
}


window.addEventListener("load", cmaeraStart, false);


