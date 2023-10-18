import './GamingLibrary.css'
import { GamingLibraryCard, SectionHeader, SectionWrapper, PrimaryButtonCentered } from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'





const GamingLibrary = () => {

    const cards = GamingLibraryData.map(card => {
        return <GamingLibraryCard 
        key          = {  card.id            } 
        title        = {  card.title         } 
        image        = {  card.image         } 
        category     = {  card.category      } 
        data_added   = {  card.data_added    } 
        hours_played = {  card.hours_played  } 
        download     = {  card.download      } 
        to_path      = {  card.to_path       } 
        />
    }) 
    


    return(
        <>
        <div className='section-media'>
            <SectionWrapper>
                <span className='media-gm-title'>
                    <SectionHeader>Gaming <em>Library</em></SectionHeader>
                </span>
                <div className='gaming-library-cards'>
                    {cards}
                </div>
            </SectionWrapper>
            <PrimaryButtonCentered>View Your Library</PrimaryButtonCentered>
        </div>

        </>
    )
}


export default GamingLibrary