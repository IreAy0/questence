import React from 'react';

const VideoPlayer = ({ videoSrc, posterImage }) => {
  return (
    <div className="relative w-full h-[700px] mx-auto mt-4">
      {/* Video element */}
      <video
        src={videoSrc}
        poster={posterImage}
        className="w-full h-[700px] object-cover "
        controls
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          className="bg-black bg-opacity-50 rounded-full p-3"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('video').play();
          }}
        >
          <svg
            className="w-12 h-12 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.674-11.29l4.953 2.927a1 1 0 010 1.726l-4.953 2.927A1 1 0 018 14.927V9.073a1 1 0 01.326-.726z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
