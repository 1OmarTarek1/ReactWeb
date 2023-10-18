import './Streams.css'

import {  TopStreamers, LiveStreams, MostPopularLiveStream  } from '../../sections'



const Streams = () =>{
    return(
    <>
    <div className='Streams-and-Streamers'>
        <LiveStreams />
        <TopStreamers />
    </div>
        <MostPopularLiveStream />
    </>
    )
}


export default Streams