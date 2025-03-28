import React, { useEffect, useState } from 'react';
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "./PlayVideo.css";
import { API_KEY } from '../../Data';
import { valueConverter } from '../../Data';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const PlayVideo = ({ videoId, menuBar }) => {
  const [apiData, setApiData] = useState({});
  const [channelData, setChannelData] = useState({});
  const [commentData, setCommentData] = useState([]);

  const getVideoData = async () => {
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    fetch(video_url).then((response) => response.json()).then((responseData) => setApiData(responseData.items[0]));
  };

  const getChannelData = async () => {
    const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`;
    await fetch(channel_url).then((response) => response.json()).then((responseData) => setChannelData(responseData.items ? responseData.items[0] : {}));
  };

  const getCommentData = async () => {
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url).then((response) => response.json()).then((responseData) => setCommentData(responseData.items));
  };

  useEffect(() => {
    getVideoData();
    getCommentData();
  }, [videoId]);

  useEffect(() => {
    getChannelData();
  }, [apiData]);

  return (
    <div className='playvideo-container'>
      <div className={`playvideo ${menuBar ? 'playvideo-shifted' : ''}`}>
        <iframe className="iframe-embed" 
        width="100%" height="auto" 
        style={{ aspectRatio: '16/9' }} 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>

        <h3>{apiData ? apiData?.snippet?.title : "Title here"}</h3>
        <hr />
        <div className='playvideo-info'>
          <div className='creater-details'>
            <div>
              {channelData ? <img src={channelData?.snippet?.thumbnails.default.url} alt="Channel" /> : <CgProfile size={30} style={{ marginRight: "5px", display: "inline" }} />}
            </div>
            <div>
              {apiData ? apiData?.snippet?.channelTitle : "Channel Title"} <br />
              <span style={{ float: "left" }}>{channelData ? valueConverter(channelData?.statistics?.subscriberCount) : "Subscriber Count"}</span>
            </div>
            <div><button>Subscribe</button></div>
          </div>
          <div className='video-reaction'>
            <BiLike size={30} />
            {apiData ? valueConverter(apiData?.statistics?.likeCount) : "Like Count"}
            <BiDislike size={30} />
            <FaRegShareSquare size={30} />
            <MdSaveAlt size={30} />
          </div>
        </div>
        <div className='video-description'>
          <p>{apiData ? valueConverter(apiData?.statistics?.viewCount) : "View Count"} views {apiData ? moment(apiData?.snippet?.publishedAt, "YYYYMMDD").fromNow() : "Published Time"} </p>
          <h4>{apiData ? apiData?.snippet?.description : "Description"}</h4>
        </div>
        <hr />
        <div className='comment'>
          <h4>{apiData ? valueConverter(apiData?.statistics?.commentCount) : "Comment Count"} Comments</h4>
          {commentData.map((item) => (
            <div key={uuidv4()}>
              <div className='user-info'>
                <img src={item?.snippet?.topLevelComment.snippet.authorProfileImageUrl} alt="User" />
                {item?.snippet?.topLevelComment.snippet.authorDisplayName}
                <span className='comment-time'>{moment(item?.snippet?.topLevelComment.snippet.publishedAt, "YYYYMMDD").fromNow()}</span>
              </div>
              <p>{item?.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className='comment-reaction'>
                <BiLike size={20} style={{ marginRight: "10px" }} />
                {item?.snippet.topLevelComment.snippet.likeCount}
                <BiDislike size={20} style={{ marginLeft: "10px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;