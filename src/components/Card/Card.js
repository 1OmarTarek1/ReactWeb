import './Card.css'
import { Link } from 'react-router-dom'

import { FaStar, FaDownload } from 'react-icons/fa'


const  Card = (props) =>{
    return(
            <div className='just-for-pop  most-card'>

                    <div className='card-wrapper'>
                        <div className='img-wrapper'>
                            <img className='most-popular-item-image' src={props.image} alt='' />
                            <div className='D-after'><Link to={props.to_path} ><FaDownload /></Link></div>
                        </div> 
                        

                        <div className='most-popular-item-content'>
                            <h4 className='most-popular-item-title'>
                                <span className='title'>{props.title}</span>
                                <span className='sml-txt'>{props.category}</span>
                            </h4>
                            <ul>
                                <li><span style={{"color":"var(--color-icons)"}}><FaStar /></span> <span>{props.rate}</span></li>
                                <li><span style={{"color":"var(--color-primary)"}}><FaDownload /></span> <span>{props.download}</span></li>
                            </ul>
                        </div>
                        
                    </div>

            </div>
    )
}

export default Card