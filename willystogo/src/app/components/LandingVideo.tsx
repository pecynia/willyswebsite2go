function LandingVideo({ videoPath, posterURL } : { videoPath: string, posterURL: string }) {

  return (
    <div className="relative w-full h-screen top-0">
      <video 
          playsInline 
          autoPlay 
          muted 
          loop 
          preload="auto"
          poster={posterURL}
          className="absolute top-0 left-0 w-full h-full object-cover 0"
      >
        <source src={videoPath} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default LandingVideo
