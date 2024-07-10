import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PlayVideo from '../PlayVideo/PlayVideo';
import Recommended from '../Recommended/Recommended';
import { API_KEY } from '../../Data';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { valueConverter } from '../../Data';
import moment from 'moment';
import "./Video.css";


const Video = ({ menuBar, category, setCategory }) => {

  const { videoId, categoryId } = useParams();

  return (
    <>
      <div className='video'>
        <PlayVideo videoId={videoId} menuBar={menuBar} category={category} setCategory={setCategory} />
        <Recommended categoryId={category} />
      </div>
    </>
  )
}

export default Video