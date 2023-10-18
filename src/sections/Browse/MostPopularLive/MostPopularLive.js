import './MostPopularLive.css'

import { MostPopularLiveCard, SectionHeader, SectionWrapper, PrimaryButtonCentered } from '../../../components'

import {mostPopularLiveData} from '../../../Data/mostPopularData'



const MostPopularLive = () =>{
const cards = mostPopularLiveData.map(card => {
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
                        Most Popular <em>Streams</em> 
                    </span>
                </SectionHeader>

                <div className='most-live-items'>
                    {cards}
                </div>
            </SectionWrapper>
            
            <PrimaryButtonCentered>
                    <span className='btn-live'>
                        Discover All Streams
                    </span>
            </PrimaryButtonCentered>
        </div>
        </>
 
    )
}

export default MostPopularLive