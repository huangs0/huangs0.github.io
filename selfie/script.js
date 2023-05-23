// Copyright 2023 The MediaPipe Authors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//      http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { FaceDetector, HandLandmarker, FilesetResolver } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0";

let handLandmarker;
let faceDetector;
let runningMode = "VIDEO";
let enableWebcamButton;

let eyeEffect;
let noseEffect;
let mouthEffect

// Initialize the face detector
const initializefaceDetector = async () => {
    const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");
    faceDetector = await FaceDetector.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: `./blaze_face_short_range.tflite`,
            delegate: "GPU"
        },
        runningMode: runningMode
    });
};

// Initialize the hand detector
const createHandLandmarker = async () => {
    const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");
    handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: `./hand_landmarker.task`,
            delegate: "GPU"
        },
        runningMode: runningMode,
        numHands: 1
    });
};

function initializeEffects() {
    mouthEffect = document.createElement('img');
    mouthEffect.src = './img/mouth.png';
    mouthEffect.className = 'effect'
    noseEffect = document.createElement('img');
    noseEffect.src = './img/nose.png';
    noseEffect.className = "effect"
    eyeEffect = document.createElement('img');
    eyeEffect.src = './img/eyes.png'
    eyeEffect.className = 'effect'
}

initializefaceDetector();
createHandLandmarker();
initializeEffects()

let video = document.getElementById("webcam");
const liveView = document.getElementById("liveView");
const predictionOutput = document.getElementById("overlay")

// Check if webcam access is supported.
const hasGetUserMedia = () => {
    var _a;
    return !!((_a = navigator.mediaDevices) === null || _a === void 0 ? void 0 : _a.getUserMedia);
};
// Keep a reference of all the child elements we create
// so we can remove them easilly on each render.
var children = [];
// If webcam supported, add event listener to button for when user
// wants to activate it.
if (hasGetUserMedia()) {
    enableWebcamButton = document.getElementById("webcamButton");
    enableWebcamButton.addEventListener("click", enableCam);
} else {
    console.warn("getUserMedia() is not supported by your browser");
}

// Enable the live webcam view and start detection.
async function enableCam(event) {
    if (!faceDetector) {
        alert("Face Detector is still loading. Please try again..");
        return;
    }
    if (!handLandmarker) {
        console.log("Wait! objectDetector not loaded yet.");
        return;
    }

    // Hide the button.
    enableWebcamButton.classList.add("removed");
    // getUsermedia parameters
    const constraints = {
        video: true
    };
    // Activate the webcam stream.
    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        video.srcObject = stream;
        video.addEventListener("loadeddata", predictWebcam);
    })
}

let lastVideoTime = -1;
let faceDetections;
let handDetections;

let prediction;
let isEye;
let isNose;
let isMouth;
let size;
let operationCount = 20;

async function predictWebcam() {

    // if image mode is initialized, create a new classifier with video runningMode
    if (runningMode === "IMAGE") {
        runningMode = "VIDEO";
        await faceDetector.setOptions({ runningMode: "VIDEO" });
    }
    let startTimeMs = performance.now();
    // Detect faces using detectForVideo
    if (video.currentTime !== lastVideoTime) {
        lastVideoTime = video.currentTime;
        faceDetections = faceDetector.detectForVideo(video, startTimeMs).detections;
        handDetections = handLandmarker.detectForVideo(video, startTimeMs);

        // Clear
        // Remove any highlighting from previous frame.
        for (let child of children) {
            liveView.removeChild(child);
        }
        children.splice(0);
        
        if (faceDetections.length >= 1) {
            displaySelfie(faceDetections[0].keypoints)
        }
        if (handDetections.landmarks.length >= 1 && faceDetections.length >= 1) { 
            prediction = makePrediction(handDetections.landmarks[0], faceDetections[0].keypoints)
            predictionOutput.innerText = "Prediction: " + prediction
            if (operationCount == 0) {
                if (prediction == "leftEye" || prediction == "rightEye") {
                    operationCount = 20
                    isEye = ! isEye
                } else if (prediction == "nose") {
                    operationCount = 20
                    isNose = !isNose
                } else if (prediction == "mouth") {
                    operationCount = 20
                    isMouth = !isMouth
                }
            }
            if (operationCount > 0) {
                operationCount -= 1
            }
        }
    }
    // Call this function again to keep predicting when the browser is ready
    window.requestAnimationFrame(predictWebcam);
}

function distance(point1, point2) { 
    return Math.sqrt( ( point1.x - point2.x ) ** 2 + ( point1.y - point2.y ) ** 2 )
}

function midpoint(point1, point2) { 
    return { x: ( point1.x + point2.x ) / 2, y: ( point1.y + point2.y ) / 2 }
}

function makePrediction(handLandmarks, faceLandmarks) { 
    let rightEye = faceLandmarks[0], leftEye = faceLandmarks[1], nose = faceLandmarks[2], mouth = faceLandmarks[3]
    let indexTip = handLandmarks[8], middleTip = handLandmarks[12], ringTip = handLandmarks[16];
    size = distance(rightEye, leftEye)
    if (distance(indexTip, middleTip) > 0.3 * size) {
        return "N/A"
    }
    if (distance(middleTip, ringTip) < 0.6 * size) { 
        return "N/A"
    }
    let cursor = midpoint(indexTip, middleTip)
    if (distance(cursor, leftEye) < 0.5 * size) {
        return "leftEye"
    } else if (distance(cursor, rightEye) < 0.5 * size) {
        return "rightEye"
    } else if (distance(cursor, nose) < 0.4 * size) {
        return "nose"
    } else if (distance(cursor, mouth) < 0.4 * size) {
        return "mouth"
    } else { 
        return "N/A"
    }
}

function displayHandDetections(detections) {
    // Iterate through predictions and draw them to the live view
    for (let landmarks of detections.landmarks) {
        landmarks = [landmarks[8], landmarks[12], landmarks[16]]
        for (let keypoint of landmarks) {
            const keypointEl = document.createElement("spam");
            keypointEl.className = "hand-point";
            keypointEl.style.top = `${keypoint.y * video.offsetHeight - 6}px`;
            keypointEl.style.left = `${video.offsetWidth - keypoint.x * video.offsetWidth - 6}px`;
            liveView.appendChild(keypointEl);
            children.push(keypointEl);
        }
    }
}

function displayFaceDetections(detections) {
    // Iterate through predictions and draw them to the live view
    for (let detection of detections) {
        for (let keypoint of detection.keypoints.slice(0, 4)) {
            const keypointEl = document.createElement("spam");
            keypointEl.className = "face-point";
            keypointEl.style.top = `${keypoint.y * video.offsetHeight - 6}px`;
            keypointEl.style.left = `${video.offsetWidth - keypoint.x * video.offsetWidth - 6}px`;
            liveView.appendChild(keypointEl);
            children.push(keypointEl);
        }
    }
}

function displaySelfie(faceLandmarks) { 
    let rightEye = faceLandmarks[0], leftEye = faceLandmarks[1], nose = faceLandmarks[2], mouth = faceLandmarks[3]
    let midEye = midpoint(rightEye, leftEye)
    if (isEye) {
        eyeEffect.style.width = `${2.2 * size * video.offsetWidth}px`
        eyeEffect.style.height = `${0.7 * size * video.offsetWidth}px`
        eyeEffect.style.top = `${midEye.y * video.offsetHeight - 0.35 * size * video.offsetWidth}px`
        eyeEffect.style.left = `${(1 - midEye.x) * video.offsetWidth - 1.1 * size * video.offsetWidth}px`
        liveView.appendChild(eyeEffect);
        children.push(eyeEffect);
    }
    if (isNose) {
        noseEffect.style.width = `${0.4 * size * video.offsetWidth}px`
        noseEffect.style.height = `${0.4 * size * video.offsetWidth}px`
        noseEffect.style.top = `${nose.y * video.offsetHeight - 0.2 * size * video.offsetWidth}px`
        noseEffect.style.left = `${(1 - nose.x) * video.offsetWidth - 0.2 * size * video.offsetWidth}px`
        liveView.appendChild(noseEffect);
        children.push(noseEffect);
    }
    if (isMouth) {
        mouthEffect.style.width = `${1.6 * size * video.offsetWidth}px`
        mouthEffect.style.height = `${1.6 * size * video.offsetWidth}px`
        mouthEffect.style.top = `${mouth.y * video.offsetHeight - 0.8 * size * video.offsetWidth}px`
        mouthEffect.style.left = `${(1 - mouth.x) * video.offsetWidth - 0.8 * size * video.offsetWidth}px`
        liveView.appendChild(mouthEffect);
        children.push(mouthEffect)
    }
}
