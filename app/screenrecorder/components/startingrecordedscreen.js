"use client"
import React, { useState, useRef, useEffect } from "react";
import ScreenEditor from "../../screeneditor/page.js";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

export default function StartingRecordScreen() {
  const [recording, setRecording] = useState(false);
  const [screenActive, setScreenActive] = useState(false);
  const [recordedVideoURL, setRecordedVideoURL] = useState("");
  const recorderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const video = document.getElementById("videoPlayer");
    if (video) {
      video.onloadedmetadata = () => {
        setVideoDuration(video.duration);
      };
    }
  }, [recordedVideoURL]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
      });
      recorderRef.current = new MediaRecorder(stream);
      const chunks = [];

      recorderRef.current.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      recorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const videoURL = URL.createObjectURL(blob);
        setRecordedVideoURL(videoURL);
        setRecording(false);
        setScreenActive(false);
      };

      recorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error starting screen recording:", error);
    }
  };

  const stopRecording = () => {
    if (
      recorderRef.current &&
      recorderRef.current.state !== "inactive"
    ) {
      recorderRef.current.stop();
    }
  };

  const handlePlayPause = () => {
    const video = document.getElementById("videoPlayer");
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleForward = () => {
    const video = document.getElementById("videoPlayer");
    video.currentTime += 10; 
    setCurrentTime(video.currentTime);
  };

  const handleBackward = () => {
    const video = document.getElementById("videoPlayer");
    video.currentTime -= 10; 
    setCurrentTime(video.currentTime);
  };

  const handleSeek = (event) => {
    const video = document.getElementById("videoPlayer");
    const seekTime = event.target.value;
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleClickScreen = () => {
    setScreenActive(true);
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
       {!recording && !recordedVideoURL && (
        <div>
          <div className="text-center mb-6 max-w-[293px] p-0 sm:mb-8 sm:max-w-[370px] md:max-w-none md:mb-[50px]">
            <div className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent text-5xl font-semibold leading-12">
              Capture Your Screen for Free
            </div>
            <div className="text-lg pt-2 font-normal">
              Quickly and effortlessly record professional-quality videos
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className={`max-w-sm rounded overflow-hidden shadow-lg ${
                screenActive ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              onClick={handleClickScreen}
            >
              <div className="py-4">
                <div
                  className={`flex h-40 w-52 flex-col items-center justify-center rounded-2xl md:h-52 md:w-56 card-bg ${
                    screenActive ? "bg-blue-200" : ""
                  }`}
                >
                  <div className="[&_svg]:transform-['scale(0.88)'] md:[&_svg]:transform-['scale(1)'] m-0 w-auto p-0 text-center sm:m-auto flex items-center flex-col">
                    <img src="./screen.svg" width={100} height={100} />
                    <div className="pt-2.5 text-sm">Screen</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="flex h-40 w-52 flex-col items-center justify-center rounded-2xl md:h-52 md:w-56 card-bg">
                  <div className="[&_svg]:transform-['scale(0.88)'] md:[&_svg]:transform-['scale(1)'] m-0 w-auto p-0 text-center sm:m-auto flex items-center flex-col">
                    <img
                      src="./camera-and-screen.svg"
                      width={100}
                      height={100}
                    />
                    <div className="pt-2.5 text-sm">Screen & Camera</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <button
                className={`mt-4 flex h-[72px] w-64 items-center justify-around gap-6 rounded-2xl ${
                  recording ? "bg-red-600" : "bg-green-600"
                } text-white hover:bg-red-700 active:bg-red-800 md:mt-1`}
                onClick={recording ? stopRecording : startRecording}
                disabled={!screenActive}
              >
                <div className="ml-3 text-sm">
                  {recording ? "Stop Recording" : "Start Recording"}
                </div>
                <div className="flex h-12 w-12 content-center items-center rounded-2xl bg-white shadow-md">
                  <div
                    className={`mx-auto h-4 w-4 rounded-full bg-${
                      recording ? "red" : "green"
                    }-600 p-0`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      {!recording && recordedVideoURL && (
        <div className="mt-4 relative w-full">
          <ScreenEditor recordedVideoURL={recordedVideoURL}> 
            <video
              id="videoPlayer"
              className="video-render-screen"
              width="500"
              height="250"
              onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            >
              <source src={recordedVideoURL} type="video/mp4" />
            </video>
            <div className="player-controls flex items-center justify-center">
              <div className="mx-8">{formatTime(currentTime)}</div>
              <button onClick={handleBackward}>
                <FaBackward className="text-2xl"/>
              </button>
              <button onClick={handlePlayPause} className="mx-8">
                {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl" />}
              </button>
              <button onClick={handleForward}>
                <FaForward className="text-2xl"/>
              </button>
              {videoDuration > 0 && (
                    <div className="mx-8">{formatTime(videoDuration)}</div>
                  )}
            </div>
          </ScreenEditor>
        </div>
      )}
    </div>
  );
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
