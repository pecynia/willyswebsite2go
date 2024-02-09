// function LandingVideo({ videoPath, posterURL } : { videoPath: string, posterURL: string }) {

//   return (
//     <div className="relative w-full h-screen top-0">
//       <video 
//           playsInline 
//           autoPlay 
//           muted 
//           loop 
//           preload="auto"
//           poster={posterURL}
//           className="absolute top-0 left-0 w-full h-full object-cover 0"
//       >
//         <source src={videoPath} type="video/webm" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   )
// }

// export default LandingVideo

"use client"

import React, { useRef, useEffect } from "react"

export default function LandingVideo({ videoPathWebm, videoPathMP4, posterURL }: { videoPathWebm: string, videoPathMP4: string, posterURL: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    videoRef.current!.defaultMuted = true
  })
  return (
    <video
      className="relative top-0 left-0 w-full h-screen object-cover"
      ref={videoRef}
      loop
      autoPlay
      muted
      poster={posterURL}
      playsInline
    >
      <source src={videoPathWebm} type="video/webm" />
      <source src={videoPathMP4} type="video/mp4" />
    </video>
  )
}