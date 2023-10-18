

import './UpButton.css';



import      { FaCaretUp } from 'react-icons/fa';
import        React, 
            { useState }  from 'react'         ; 





const UpButton = () =>{

//START scroll to top page button
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;

        if      ( scrolled > 700  ) { setVisible( true  )} 

        else if ( scrolled <= 700 ) { setVisible( false )}

        };

    const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) };
    
    window.addEventListener('scroll', toggleVisible);
//END scroll to top page button


//RETURN
    return (
        <button 
        className  =  'arrow-btn' 
        onClick    =  {scrollToTop} 
        style      =  {{opacity: visible ? '.5' : '0'}}>

            <FaCaretUp />
        </button>
    );
}


export default UpButton;
