import './RelatedGamesCard.css'

import { FaStar, FaDownload } from 'react-icons/fa'






const  RelatedGamesCard = (props) =>{
    return(
        <div className='related-games-item'>

                <div className='card-wrapper-related-games'>

                    
                    <div className='related-games-item-content'>
                        <span className='img-txt'>
                            <img className='related-games-item-image' src={props.image} alt='' />
                            <span className='txt'>
                                <h5 className='related-games-item-title'>{props.title}</h5>
                                <span className='sml-fnt'>{props.category}</span>
                            </span>
                        </span>
                       
                        <ul className='icns-pos'>
                            <li><span style={{"color":"var(--color-icons)"}}><FaStar /></span> <span>{props.rate}</span></li>
                            <li><span style={{"color":"var(--color-primary)"}}><FaDownload /></span> <span>{props.download}</span></li>
                        </ul>
                    </div>
                



                </div>

        </div>
    )
}

export default RelatedGamesCard