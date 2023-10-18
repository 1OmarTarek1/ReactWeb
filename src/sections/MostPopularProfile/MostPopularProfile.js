import './MostPopularProfile.css'

import { ProfileStream } from '../../sections/'

import { MostPopularProfileCard, SectionHeader, SectionWrapper, PrimaryButtonProfileEdit } from '../../components/index'

import MostPopularProfileData from '../../Data/MostPopularProfileData'



const MostPopularProfile = () =>{
const cards = MostPopularProfileData.map(card => {
    return <MostPopularProfileCard key={card.id} image={card.image} title={card.title} view={card.view} />
}) 



    return(
        <>
            <SectionWrapper>

                <ProfileStream />

                <SectionHeader>
                    <span className='clips-title'>
                        Your Most Popular <em>Clips</em> 
                    </span>
                </SectionHeader>

                <div className='most-profile-items'>
                    {cards}
                </div>

                <div className='btn-load'>
                    <PrimaryButtonProfileEdit>
                        Load More Clips
                    </PrimaryButtonProfileEdit>
                </div>


            </SectionWrapper>
           
        </>
 
    )
}

export default MostPopularProfile