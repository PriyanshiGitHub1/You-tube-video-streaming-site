import React, {useState, useEffect} from 'react';
import "./Recommended.css";
import { API_KEY } from '../../Data';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { valueConverter } from '../../Data';
import moment from 'moment';

const Recommended = ({categoryId}) => {

  const [recommendedData, setRecommendedData] = useState([]);

  const getRecommendedData = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      await fetch(url).then((response) => response.json()).then((responseData) => setRecommendedData(responseData.items))
  }

  useEffect(() => {
    getRecommendedData();
  }, [categoryId])

  return (
      <>
          <div className='recommended-Data'>
              {recommendedData.map((item) => <Link to={`/videos/${item.id}`} key={uuidv4()}>
                  <div className='recommended-vdo-container'>
                      <div className='recommended-thumbnail'><img src={item.snippet.thumbnails.medium.url} /></div>
                      <div className='recommended-description'>
                      <h2>{item.snippet.title && item.snippet.title.length > 8 ? item.snippet.title.slice(0, 35) + "..." : item.snippet.title}</h2>
                      <p>{item.snippet.channelTitle}< br />
                          {valueConverter(item.statistics.viewCount)}
                          .
                          {moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()}
                      </p>
                      </div>
                  </div>
              </Link>

              )

              }
          </div>

      </>
  )
}

export default Recommended


