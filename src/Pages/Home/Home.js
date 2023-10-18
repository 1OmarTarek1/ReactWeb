
import './Home.css'


import {  Hero, MostPopular, GamingLibrary,  } from '../../sections'

import Streams from '../Streams/Streams'




const Home = () =>{

    return(
        <>
            <Hero />
            <MostPopular />
            <GamingLibrary />
            <Streams />
        </>
    )
}


export default Home