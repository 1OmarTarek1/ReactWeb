import './GamingLibraryCard.css'

import { SecondaryButtonGL } from '../../components'
import { Link } from 'react-router-dom'



const GamingLibraryCard = (props) => {
    return(
        <div className='gaming-library-item'>
            <ul>

                <li className='G-L-I-img'>
                    <div><img src={props.image} alt=''></img></div>
                    <div className='G-L-I-txt big-media'><h4>{props.title}</h4><span>{props.category}</span></div>
                </li>

                <li className='all-content-without-img'>
                        <div className='G-L-I-txt small-media'><h4>{props.title}</h4><span>{props.category}</span></div>
                        <div><h4>Data Added</h4><span>{props.data_added}</span></div>
                        <div><h4>Hours Played</h4><span>{props.hours_played}</span></div>
                        <div><h4>Downloads</h4><span>{props.download}</span></div>
                        <div className='btn-li media-small-btn'>
                            <SecondaryButtonGL>
                                <Link className='path-over' to={props.to_path}>
                                    Download
                                </Link>
                            </SecondaryButtonGL>
                        </div>
                </li>

                <li className='btn-li'>                            
                    <SecondaryButtonGL>
                        <Link className='path-over' to={props.to_path}>
                            Download
                        </Link>
                    </SecondaryButtonGL>
                </li>

            </ul>
        </div>
    )
}







const GamingLibraryCardProf = (props) => {
    return(
        <div className='gaming-library-item'>
            <ul>

                <li className='G-L-I-img'>
                    <div><img src={props.image} alt=''></img></div>
                    <div className='G-L-I-txt big-media'><h4>{props.title}</h4><span>{props.category}</span></div>
                </li>

                <li className='all-content-without-img'>
                        <div className='G-L-I-txt small-media'><h4>{props.title}</h4><span>{props.category}</span></div>
                        <div><h4>Data Added</h4><span>{props.data_added}</span></div>
                        <div><h4>Hours Played</h4><span>{props.hours_played}</span></div>
                        <div><h4>Downloads</h4><span>{props.download}</span></div>
                        <div className='btn-li done  media-small-btn'>
                        <SecondaryButtonGL>
                            <Link className='path-over' to={props.to_path}>
                                Downloaded
                            </Link>
                        </SecondaryButtonGL>
                         </div>
                </li>

                <li className='btn-li done'>
                <SecondaryButtonGL>
                    <Link className='path-over'>
                        Downloaded
                    </Link>
                </SecondaryButtonGL>
                </li>

            </ul>
        </div>
    )
}


export default GamingLibraryCard

export { GamingLibraryCardProf }