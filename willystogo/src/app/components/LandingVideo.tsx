import React from 'react'

function LandingVideo() {
  return (
    <div className="w-full h-screen top-0 ">
        <video 
            playsInline 
            autoPlay 
            muted 
            loop 
            preload="auto"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto min-w-full min-h-full object-cover"
        >
            <source src="/imgs/full_video.mp4" type="video/mp4" />
            {/* Fallback content */}
            Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default LandingVideo