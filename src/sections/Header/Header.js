import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

import './Header.css';
import { FaSearch } from 'react-icons/fa'

import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/profile.jpg';
import NavItem,{NavItemDropDown} from '../../components/NavItem/NavItem';








const Header = () => {


//     const State = () =>{
//         const [value, setValue] = useState(0)

//        const update = () => {
//             setValue(value + 1)
//         }
//     }




    return(
        // <>
        //     <h1>{value}</h1>
        //     <button onClick={update}>Click</button>
        // </>
    <>
        <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
            <div className="container">
                <NavLink to="/" className="navbar-brand logo"><img src={logo} alt=''></img></NavLink>

                <button 
                    className       ="navbar-toggler remove-focus" 
                    type            ="button" 
                    data-bs-toggle  ="collapse" 
                    data-bs-target  ="#mainmenu">
                    <span className="navbar-toggler-icon nav-ico"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainmenu">

                <div className='input-item'>
                    <label htmlFor='searchText' className='label-icon'>
                        <span className='search-icon'>
                            <FaSearch />
                        </span>
                    </label>
                    <input 
                        className   ='search-input' 
                        type        ="text" 
                        placeholder ="Search" 
                        id          ="searchText" 
                        name        ="searchKeyword" 
                        // onKeyPress  ="handle" 
                    />
                </div>

                    <ul className="navbar-nav ms-auto nav-transition">
                    
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink to="/Browse" className="nav-link">Browse</NavLink>
                        </NavItem>

                        <NavItemDropDown>
                            <NavLink
                                to="/OnlineGames" 
                                className       ="nav-link dropdown-toggle" 
                                data-bs-toggle  ="dropdown" 
                                aria-expanded   ="false"
                            >
                                Online Games
                            </NavLink>

                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="/OnlineGames/Fortnite" className="dropdown-item">
                                    <span>Fortnite</span>  
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/OnlineGames/CallOfDuty" className="dropdown-item">
                                    <span>Call of Duty</span> 
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/OnlineGames/PUBG" className="dropdown-item">
                                    <span>PUBG</span>
                                    </NavLink>
                                </li>
                            </ul>
                            
                        </NavItemDropDown>

                        <NavItem>
                            <NavLink to="/Streams" className="nav-link">Streams</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/Profile" className="nav-link profile-item">
                                <span className='profile-link'>
                                    <span className='txt'>Profile</span>
                                    <span className='profile-img'>
                                        <img src={profile} alt=''></img>
                                    </span>
                                </span>
                            </NavLink>
                        </NavItem>

                    </ul>

                </div>
            </div>
        </div>
    </>
    )
}

export default Header