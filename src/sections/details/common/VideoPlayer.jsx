"use client";
import React, { useRef, useState } from "react";
import "./videoplayer.scss";
import "./loader.scss";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to handle loader

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleWaiting = () => {
    setIsLoading(true); // Show loader when buffering
  };

  const handlePlaying = () => {
    setIsLoading(false); // Hide loader when video starts playing
  };

  const handleCanPlay = () => {
    setIsLoading(false); // Hide loader when video is ready to play
  };

  return (
    <div className='_custom_video_player'>
      <div
        className='video-container'
        onClick={handlePlayPause}>
        <video
          ref={videoRef}
          className={`video-element ${isPlaying ? "hide-overlay" : ""}`}
          width='100%'
          height='auto'
          preload='auto' // Preload the video
          poster='/img/details/finVideoCover.png' // Add cover image here
          onWaiting={handleWaiting} // When the video is buffering
          onPlaying={handlePlaying} // When the video starts playing
          onCanPlay={handleCanPlay} // When the video can be played
        >
          <source
            src='https://img.finlete.com/fiv.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div className='overlay'>
            <div className='play-button'>
              <img
                src='/img/details/playBtn.svg'
                alt='play'
              />
            </div>
          </div>
        )}

        {/* Show loader when the video is buffering or loading */}
        {isLoading && (
          <div className='loader'>
            <div className='spinner'></div>
          </div>
        )}
      </div>
    </div>
  );
}
