import './DownloadedGames.css'

// import { Link } from 'react-router-dom'

import { DownloadCard, SectionHeader, SectionWrapper } from '../../../components'

import RelatedGamesData from '../../../Data/RelatedGamesData'

const DownloadedGames = () =>{
const cards = RelatedGamesData.map(card => {
    return <DownloadCard 
    key         =  { card.id        } 
    image       =  { card.image     } 
    title       =  { card.title     } 
    category    =  { card.category  } 
    rate        =  { card.rate      } 
    download    =  { card.download  } 
    to_path     =  { card.to_path   }
    />
    }) 

    return(
        <>
        <SectionWrapper>
            <div className='DownloadedGames-page'>
                <SectionHeader>
                    <span className='related-title'>
                        <span>Top</span> <em>Downloaded</em>
                    </span>
                </SectionHeader>
        
                <div className='download-games-items'>
                    {cards}
                </div>
                <a href='/Browse' className='view-all-games'>View All Games</a>
            </div>
        </SectionWrapper>
        </>
    )
}


export default DownloadedGames