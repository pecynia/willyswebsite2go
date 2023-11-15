import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';


function YoutubeComp({videoId}: {videoId: string}) {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const youtubeOpts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };
    return (
        <div><YouTube videoId={videoId} opts={youtubeOpts} onReady={onPlayerReady} /></div>
    )
}

export default YoutubeComp