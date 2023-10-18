import './MostPopularLiveStream.css'

import { MostPopularLiveCard, SectionHeader, SectionWrapper, PrimaryButtonCentered } from '../../../components'

import {MostPopularLiveStreamData} from '../../../Data/mostPopularData'



const MostPopularLiveStream = () =>{
const cards = MostPopularLiveStreamData.map(card => {
        return <MostPopularLiveCard 
        key      ={card.id} 
        image    ={card.image}
        img      ={card.img} 
        title    ={card.title} 
        category ={card.category} 
        gameName ={card.gameName}
        view     ={card.view} />
}) 



    return(
        <>
        <div className='most-pop-live'>
            <SectionWrapper>
                <SectionHeader>
                    <span className='live-title'>
                        Live <em>Streams</em> 
                    </span>
                </SectionHeader>

                <div className='most-profile-items'>
                    {cards}
                </div>
            </SectionWrapper>
            
            <PrimaryButtonCentered>
                    <span className='btn-live'>
                        Load More Streams
                    </span>
            </PrimaryButtonCentered>
        </div>
        </>
 
    )
}

export default MostPopularLiveStream