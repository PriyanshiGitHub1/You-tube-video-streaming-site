
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PlayVideo from '../PlayVideo/PlayVideo';
import Recommended from '../Recommended/Recommended';
import "./Video.css";

const Video = ({ menuBar, category, setCategory }) => {
  const { videoId, categoryId } = useParams();

  return (
    <div className='video'>
      <div className='video-content'> {/* Added wrapper div */}
        <PlayVideo videoId={videoId} menuBar={menuBar} category={category} setCategory={setCategory} />
      </div>
      <div className='recommended-section'>
        <Recommended categoryId={category} />
      </div>
    </div>
  );
};

export default Video;
