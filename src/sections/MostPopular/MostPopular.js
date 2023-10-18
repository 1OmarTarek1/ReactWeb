import './MostPopular.css'

import { Card, SectionHeader, SectionWrapper, PrimaryButtonCentered } from '../../components/index'

import MostPopularData from '../../Data/mostPopularData'


const MostPopular = () =>{
const cards = MostPopularData.map(card => {
    return <Card 
    key         =   {  card.id        } 
    image       =   {  card.image     } 
    title       =   {  card.title     } 
    category    =   {  card.category  } 
    rate        =   {  card.rate      } 
    download    =   {  card.download  } 
    to_path     =   {  card.to_path   } 
    />
}) 



    return(
        <>
            <SectionWrapper>
               <span className='media-title'>
                <SectionHeader>Most <em>Popular</em></SectionHeader>
               </span> 
                <div className='this-div'>
                    {cards}
                </div>
            </SectionWrapper>
            <PrimaryButtonCentered>Discover Popular</PrimaryButtonCentered>
        </>
 
    )
}

export default MostPopular
