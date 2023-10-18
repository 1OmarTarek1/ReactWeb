import PrimaryButtonStream from '../Buttons/Buttons'


import './TopStreamersCard.css'

import { FaCheck } from 'react-icons/fa'


const  TopStreamersCard = (props) =>{
    return(
        <>
            <li className='the-li-here'>
                <div className='top-streams'>
                    <div className='most-popular-item live-card'>
                            <div className='card-wrapper'>

                                <div className='most-popular-item-content'>

                                    <h4 className='most-popular-item-title'>
                                        <img src={props.img} alt='' />
                                        <div className='center-cont'>
                                            <span className='icn-and-title'>
                                                <div className='check-icn'><span><FaCheck /></span></div>
                                                <span className='title'>{props.title}</span>
                                            </span>
                                        </div>
                                    </h4>

                                    <span className='button-stream'>
                                        <PrimaryButtonStream>Follow</PrimaryButtonStream>
                                    </span>
                                </div>

                            </div>
                    </div>
                </div>
            </li>
        </>

    )
}

export default TopStreamersCard