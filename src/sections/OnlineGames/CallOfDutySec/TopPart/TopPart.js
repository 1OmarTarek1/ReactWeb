import './TopPart.css'

import FeatureLeft from '../../../../assets/images/call-of-duty-left.jpg'
import FeatureRight from '../../../../assets/images/call-of-duty-right.jpg'

import { FaPlay } from 'react-icons/fa'


const TopPart = () => {
    return(
        <div className='imgs-div'>
            <span className='left-img'><img src={FeatureLeft} alt='' /></span>
            <span className='right-img'><img src={FeatureRight} alt=''/>
                <a 
                href        ='https://www.youtube.com' 
                target      ='blank' 
                className   ='icn-div'>

                    <span className='icn'><FaPlay/></span>
                </a>
            </span>
        </div>
    )
}

export default TopPart