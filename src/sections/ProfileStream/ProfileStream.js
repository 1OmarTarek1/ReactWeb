import { Link } from 'react-router-dom'
// import { useRef } from 'react'


import './ProfileStream.css'

import { SecondaryButtonGL } from '../../components/index'

import Profile from '../../assets/images/profile.jpg'
// import { FaStar } from 'react-icons/fa'



const ProfileStream = () => {



// const img = useRef()

// const openImg = () => {
//     img.current.style.position = 'fixed';
//     img.current.style.width = '400px';
//     img.current.style.height = '400px';
//     img.current.style.top = '50%';
//     img.current.style.left = '50%';
//     img.current.style.transform = 'translate(-50% , -50%)';
//     img.current.style.zIndex = '100';
//     img.current.style.dropFilter = 'blur(5px)';
//     return (<FaStar className='X-icon'  onClick={closeImg}/>);
// }

// const closeImg = () => {
//     img.current.style.position = 'relative';
//     img.current.style.width = '100%';
//     img.current.style.height = '100%';
//     img.current.style.top = 'none';
//     img.current.style.left = 'none';
//     img.current.style.transform = 'none';
//     img.current.style.zIndex = 'none';
// }










    return(
        <div className='profile-top-side'> 

            <div className='center-content'> 
                
                <div className='cov'>
                    <img  src={Profile} alt=''   /> 
                    {/* ref={img}  onClick={openImg} */}
                </div>
                
                <div className='content'>
                    <h6>Offline</h6>
                    <h3>Alan Smithee</h3>
                    <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                    
                    <div className='btn-c'>
                        <SecondaryButtonGL>
                            <Link to="/Browse">
                                Start Live Stream
                            </Link>
                        </SecondaryButtonGL>
                    </div>

                </div>
            </div>

            <div className='right-content'>
                <div className='container-right-content'>
                    <div className='itm'>Games Downloaded <span>3</span></div>
                    <div className='itm'>Friends Online <span>16</span></div>
                    <div className='itm'>Live Streams <span>None</span></div>
                    <div className='itm'>Clips <span>29</span></div>
                </div>
            </div>

        </div>
    )
}

export default ProfileStream