import { Link } from 'react-router-dom'

import './DownloadCard.css'

import { FaStar, FaDownload, } from 'react-icons/fa'

import  PrimaryButton  from '../Buttons/Buttons'






const  DownloadCard = (props) =>{
    return(
        <div className='page-games'>
        <div className='download-games-item'>
                <div className='card-wrapper-related-games'>

                    

                    <div className='related-games-item-content'>
                        <img className='related-games-item-image' src={props.image} alt='' />
                            <ul className='all-content'>

                                <li>                           
                                    <span className='txt'>
                                        <h5 className='related-games-item-title'>
                                            {props.title}
                                        </h5>
                                        <span className='sml-fnt dis-none'>{props.category}</span>
                                    </span>
                                </li>

                                <li className='dis-none'>
                                    <ul className='icns-pos'>

                                        <li>
                                            <span style={{"color":"var(--color-icons)"}}>
                                                <FaStar />
                                            </span> 
                                            <span>{props.rate}</span>
                                        </li>

                                        <li>
                                            <span style={{"color":"var(--color-primary)"}}>
                                                <FaDownload />
                                            </span> 
                                            <span>{props.download}</span>
                                        </li>

                                    </ul>
                                </li>

                            </ul>
                        </div>

                        <div className='btn-edit-5'>
                            
                            <PrimaryButton>
                                <Link to={props.to_path}>
                                    <FaDownload />
                                </Link>
                            </PrimaryButton>
                        </div>
                    

                </div>
        </div>
        </div>
    )
}

export default DownloadCard