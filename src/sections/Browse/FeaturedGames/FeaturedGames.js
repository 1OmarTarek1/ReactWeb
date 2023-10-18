import './FeaturedGames.css'

// assets/images/featured-01.jpg"


import { FeaturedGamesCard, SectionHeader, SectionWrapper } from '../../../components'

import { FeaturedGamesData } from '../../../Data/RelatedGamesData'


const FeaturedGames = () =>{
const cards = FeaturedGamesData.map(card => {
    return <FeaturedGamesCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
    }) 

    return(
        <>
        <div className='FeaturedGames-page'>
        <SectionWrapper>
        
            <SectionHeader>
                <span className='related-title'>
                    Featured <em>Games</em>
                </span>
            </SectionHeader>
    
            <div className='related-games-items FeaturedGames-items'>
                {cards}
            </div>
        
        </SectionWrapper>
        </div>
        </>
    )
}


export default FeaturedGames
