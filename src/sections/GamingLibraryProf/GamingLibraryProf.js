import './GamingLibraryProf.css'
import { GamingLibraryCardProf, SectionHeader, SectionWrapper, PrimaryButtonCentered } from '../../components/index'
import { GamingLibraryDownloadedData } from '../../Data/GamingLibraryData'





const GamingLibraryProf = () => {

    const cards = GamingLibraryDownloadedData.map(card => {
        return <GamingLibraryCardProf key={card.id} title={card.title} image={card.image} category={card.category} data_added={card.data_added} hours_played={card.hours_played} download={card.download} />
    }) 
    


    return(
        <>
            <SectionWrapper>
                <SectionHeader>
                    <span className='gaming-profile-title'>
                        Your <em>Library</em>   
                    </span>
                </SectionHeader>
                <div className='gaming-library-cards'>
                    {cards}
                </div>
            </SectionWrapper>
            <PrimaryButtonCentered>View Your Library</PrimaryButtonCentered>
        </>
    )
}


export default GamingLibraryProf
