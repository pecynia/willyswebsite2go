"use client"

import React, { useEffect } from 'react';

function LightWidget() {
  useEffect(() => {
    // Check if the LightWidget script is already loaded
    const scriptAlreadyLoaded = document.querySelector('script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]');

    if (!scriptAlreadyLoaded) {
      // Create script element for LightWidget
      const script = document.createElement('script');
      script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
      script.async = true;

      // Append the script to the document
      document.body.appendChild(script);

      return () => {
        // Cleanup the script when the component unmounts
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
        <h1 className='text-4xl text-center font-youngSerif p-16 pt-24'>
            Volg ons op Instagram
        </h1>
        <div className='max-w-7xl mx-auto pb-24 px-10'>
            <iframe 
            src="//cdn.lightwidget.com/widgets/2d3e153452275f3fba57e4dd4c4bdfd2.html" 
            style={{ width: '100%', border: 0, overflow: 'hidden' }}
            />
        </div>
    </div>
  );
}

export default LightWidget;
