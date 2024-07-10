import React, { useEffect, useState } from 'react';
import "./Feed.css";
import { Link } from 'react-router-dom';
import { API_KEY } from '../../Data';
import { valueConverter } from '../../Data';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';



const Feed = ({ category, searchTerm, menuBar}) => {

    const [data, setData] = useState([]);
    const getData = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(url).then((response) => response.json()).then((responseData) => setData(responseData.items))
    }

    useEffect(() => {
        getData();
    }, [category])

    return (
        <>
            <div className={'feed'}>
                {data.filter((item) => {
                    if(searchTerm == ""){
                        return item;
                    }else if(item.snippet.title && item.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return item;
                    }
                    }).map((item) => <Link to={ `/videos/${item.id}`} key={uuidv4()}>
                    <div  className='vdo-container'>
                        <div className='thumbnail'><img src={item.snippet.thumbnails.medium.url} /></div>
                        <div className='profile'><img src={item.profile} /></div>
                        <h2>{item.snippet.title && item.snippet.title.length > 8 ? item.snippet.title.slice(0, 35) + "..." : item.snippet.title}</h2>
                        <p>{item.snippet.channelTitle}< br />
                            {valueConverter(item.statistics.viewCount)}
                            .
                            {moment(item.snippet.publishedAt, "YYYYMMDD").fromNow()}
                        </p>
                    </div>
                </Link>
                )
                }
            </div>

        </>
    )
}

export default Feed