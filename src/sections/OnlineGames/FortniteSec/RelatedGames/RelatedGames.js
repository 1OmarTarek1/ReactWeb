import './RelatedGames.css'

import { RelatedGamesCard, SectionHeader, SectionWrapper } from '../../../../components'

import RelatedGamesData from '../../../../Data/RelatedGamesData'


const RelatedGames = () =>{
const cards = RelatedGamesData.map(card => {
    return <RelatedGamesCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
}) 



    return(
        <>
            <SectionWrapper>

                <SectionHeader>
                    <span className='related-title'>
                        Other Related <em>Games</em>
                    </span>
                </SectionHeader>

                <div className='related-games-items'>
                    {cards}
                </div>
            </SectionWrapper>
        </>
 
    )
}

export default RelatedGames

    