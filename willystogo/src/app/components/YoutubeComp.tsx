import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

function YoutubeComp({ videoId }: { videoId: string }) {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    };

    const youtubeOpts: YouTubeProps['opts'] = {
        height: '480',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
      <div className="w-full h-full">
          <YouTube videoId={videoId} opts={youtubeOpts} onReady={onPlayerReady} />
      </div>
    );
}

export default YoutubeComp;
