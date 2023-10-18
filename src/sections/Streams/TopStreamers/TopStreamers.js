import './TopStreamers.css'



import { TopStreamersCard, SectionHeader, SectionWrapper } from '../../../components'

import { TopStreamersData } from '../../../Data/mostPopularData'

const TopStreamers = () =>{
const cards = TopStreamersData.map(card => {
    return <TopStreamersCard key={card.id}  img={card.img}  title={card.title} />
    }) 

    return(
        <>
        <SectionWrapper>
            <div className='TopStreamers-page'>
                <SectionHeader>
                    <span className='related-title'>
                        <span>Top</span> <em>Streamers</em>
                    </span>
                </SectionHeader>
        
                <ul className='download-games-items'>
                    {cards}
                </ul>
            </div>
        </SectionWrapper>
        </>
    )
}


export default TopStreamers