

import './Browse.css'


import { FeaturedGames ,DownloadedGames, HowStartLive, MostPopularLive } from '../../sections'




const Browse = () =>{


    return(
    <>
    <div className='featuredGames-and-downloadedGames'>
        <FeaturedGames /> 
        <DownloadedGames/>
    </div>
    <HowStartLive />
    <MostPopularLive />
    
    </>
    )
}


export default Browse