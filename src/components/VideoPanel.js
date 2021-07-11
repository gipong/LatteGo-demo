import React from 'react';

const VideoPanel = () => {
    

    return (
        <section name="videoPanel" className="flex items-center justify-center w-full h-screen bg-gray-900 relative">
            <div className="flex-1 shadow-xl videoBlock">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe title="video" src="https://www.youtube.com/embed/rCsFvbPwV40?autoplay=0&modestbranding=1&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.saeco.philips.com.tw&widgetid=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            
        </section>
    )
}

export default VideoPanel;