import { useState,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


import './index.css'
// import '../global.css'
import MyContext from "../MyContext/index"

import moon from '../../images/black-moon.png'
import main from '../../images/main-icon.png'
import sunWhite from '../../images/sunWhite.png'
// import menu from '../../images/bars-solid.svg'




const Header = () => {

  const [isHamburgerClicked,setIsHamburgerClicked]= useState(false)
  const {isInDarkMode,setIsInDarkMode} = useContext(MyContext)

  

  const hamburgerClicked=()=>{
    setIsHamburgerClicked(!isHamburgerClicked)
  }

  const handleNavigateMouseActive =(nameClass)=>{
    document.querySelector(nameClass).style.color="#87CEEB"
  }


  const handleNavigateMouseInactive = (nameClass)=>{
    document.querySelector(nameClass).style.color="inherit"
  }

  const handleDarkMode =()=>{
    setIsInDarkMode(!isInDarkMode)
  }

  return (
    <>
    <nav className={`mb-[0.8em] pt-[1em] header-bg`}>
      <div className='flex justify-around items-center header-container-bg'>
        <div className='flex justify-center items-center'>
            <img src={main} alt='C' className='mr-1 h-6 cursor-pointer' />
            <p className='home-para cursor-pointer'>Calendly</p>
            <div className={`h-[20px] w-[1px] mt-[0px] mb-[0px] ml-[10px]  mr-[10px] divider ${isInDarkMode?"darkmodeWhiteBg":""}`}></div> 
            <p className={`help-para cursor-pointer`}>Help Center</p>
        </div>

        <div className='menu-bg'>
          <img src={isInDarkMode?sunWhite:moon}
           onClick={handleDarkMode}
           className='h-[30px] w-[30px] mr-2 moon nav-el' alt='moon' />
          <FontAwesomeIcon onClick={hamburgerClicked} 
          className='h-[30px] w-[35px] cursor-pointer'
          icon={isHamburgerClicked?faXmark:faBars} />
        </div>

        <div className='nav-elements-bg'>
          <img src={isInDarkMode?sunWhite:moon}
          onClick={handleDarkMode}
           className='h-[30px] w-[30px] moon nav-el' alt='moon' />
          <div className='flex items-center justify-center'>
            <p 
            onMouseEnter={()=>handleNavigateMouseActive(".developers-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".developers-nav-el")}
             className='mr-2 developers-nav-el nav-el'
            >Developers</p>
            <FontAwesomeIcon className='up-right-arrow' icon={faUpRightFromSquare} />
          </div>

          <div className='flex items-center justify-center'>
           <p className='mr-2 reports-nav-el nav-el'
            onMouseEnter={()=>handleNavigateMouseActive(".reports-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".reports-nav-el")}

           >Report Abuse</p>
           <FontAwesomeIcon className='up-right-arrow' icon={faUpRightFromSquare} />
          </div>

          <p className='contact-nav-el nav-el'
            onMouseEnter={()=>handleNavigateMouseActive(".contact-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".contact-nav-el")}

           >Contact Us</p>
          
          <div className={`h-[20px] w-[1px] mt-[0px] mb-[0px] ml-[10px]  mr-[10px] divider ${isInDarkMode?"darkmodeWhiteBg":""}`}></div> 
          
          <p className={`login-nav-el nav-el`}
            onMouseEnter={()=>handleNavigateMouseActive(".login-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".login-nav-el")}

           >Log In</p>
  
          <p className='signup-nav-el nav-el'
            onMouseEnter={()=>handleNavigateMouseActive(".signup-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".signup-nav-el")}

           >Sign Up</p>
          
        </div>
      </div>
    </nav>

    {
      isHamburgerClicked && (
      <div className='nav-elements-menu-bg'>
        <div className='flex items-center justify-center'>
          <p className='mr-2 developers-mobile-nav-el nav-el'
            onMouseEnter={()=>handleNavigateMouseActive(".developers-mobile-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".developers-mobile-nav-el")}

          >Developers</p>
          <FontAwesomeIcon className='up-right-arrow' icon={faUpRightFromSquare} />
        </div>

        <div className='flex items-center justify-center'>
          <p className='mr-2 reports-mobile-nav-el nav-el'
            onMouseEnter={()=>handleNavigateMouseActive(".reports-mobile-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".reports-mobile-nav-el")}

          >Report Abuse</p>
          <FontAwesomeIcon className='up-right-arrow' 
          icon={faUpRightFromSquare} />
        </div>

        <p className='contact-mobile-nav-el nav-el text-center'
            onMouseEnter={()=>handleNavigateMouseActive(".contact-mobile-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".contact-mobile-nav-el")}

        >Contact Us</p>
                
        <p className='login-mobile-nav-el nav-el text-center'
            onMouseEnter={()=>handleNavigateMouseActive(".login-mobile-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".login-mobile-nav-el")}

        >Log In</p>
    
        <p className='signup-mobile-nav-el nav-el text-center'
            onMouseEnter={()=>handleNavigateMouseActive(".signup-mobile-nav-el")}
            onMouseLeave={()=>handleNavigateMouseInactive(".signup-mobile-nav-el")}

        >Sign Up</p>
      </div>
      )
    }

    </>
  )
}

export default Header
