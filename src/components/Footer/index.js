import { useState,useContext } from "react";
import MyContext from "../MyContext/index";
import "./index.css"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import appstore from "../../images/app-store.png"
import playstore from "../../images/play-store.png"

import twitter from "../../images/twitter.svg"
import fb from "../../images/facebook-f.svg"
import insta from '../../images/instagram.svg'
import linkedin from "../../images/linkedin-in.svg"
import youtube from "../../images/youtube.svg"



const Footer = () => {

  const [selectedLanguage, setSelectedLanguage] = useState("US");
  const {isInDarkMode}=useContext(MyContext)


  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-[16px] footer-bg">
        <div className="easy-ahead-bg">
          <div className="header-easy">
              <h1 className="text-[32px] font-bold mr-3">Easy</h1>
              <h1 className="text-[32px] text-blue-500 font-bold">ahead</h1>
          </div>
      
          <p className="mt-5 text-center">We take the work out of connecting with others so you can accomplish more.</p>
          
          
          <select id="countries"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="bg-gray-50 mt-5 border options cursor-pointer
          border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block 
          p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500
          ">
              <option value="US">English(US)</option>
              <option value="CA">Hindi(India)</option>
          </select>
          <div className="downloads flex mt-5">
              <img className="mr-2" src={appstore}  alt="app-store"/>
              <img src={playstore}  alt="play-store"/>
          </div>
          <div className="flex mt-5">
              <img className={`mr-5 h-5 ${isInDarkMode?"darkImage":""}`} src={twitter} alt="x" />
              <img className={`mr-5 h-5 ${isInDarkMode?"darkImage":""}`} src={fb} alt="fb" />
              <img className={`mr-5 h-5 ${isInDarkMode?"darkImage":""}`} src={insta} alt="insta" />
              <img className={`mr-5 h-5 ${isInDarkMode?"darkImage":""}`} src={linkedin} alt="linkedin" />
              <img className={`mr-5 h-5 ${isInDarkMode?"darkImage":""}`} src={youtube} alt="youtube" />
          </div>
        </div>
        <div className="desc-bg">
          <div className="top-desc">
              <div className="desc-bg about m-4 w-[170px]">
                  <h1 className="head-desc mb-4">About</h1>
                  <p className="mb-2">About Calendly</p>
                  <p className="mb-2">Contact Sales</p>
                  <p className="mb-2">Newsroom</p>
                  <p className="mb-2">Careers</p>
                  <p className="mb-2">Security</p>
              </div>
              <div className="solutions m-4 w-[170px]">
                  <h1 className="head-desc mb-4">Solutions</h1>
                  <p className="mb-2">Customer Success</p>
                  <p className="mb-2">Sales</p>
                  <p className="mb-2">Recruiting</p>
                  <p className="mb-2">Information Technology</p>
                  <p className="mb-2">Marketing</p>
              </div>
              <div className="popular-features m-4 w-[170px]">
                  <h1 className="head-desc mb-4">Popular Features</h1>
                  <p className="mb-2">Embed Calendly</p>
                  <p className="mb-2">Availability</p>
                  <p className="mb-2">Sending Notifications</p>
                  <p className="mb-2">Using Calendly Mobile</p>
              </div>
          </div>

          <div className="bottom-desc">
              <div className="support m-4 w-[170px]">
                  <h1 className="head-desc mb-4">Support</h1>
                  <p className="mb-2">Help Center</p>
                  <p className="mb-2">Video Tutorials</p>
              </div>
              <div className="add-ons m-4 w-[170px]">
                  <h1 className="head-desc mb-4">Add-Ons</h1>
                  <p className="mb-2">Download for Chrome</p>
                  <p className="mb-2">Download for Firefox</p>
              </div>
              <div className="developers m-4 w-[170px]">
                  <h1 className="head-desc mb-4">Developers</h1>
                  <p className="mb-2">Developer Tools</p>
              </div>
          </div>
        </div>
      </div>
      <div className="footer-last-policy-bg w-[100%]">
        <p className="each-footer-text">Copyright Calendly 2022</p>
        <div className="flex justify-center items-center each-footer-text"><div className="dot"></div> <p className="ml-1">Calendly Status</p></div>
        <p className="each-footer-text">Privacy / Terms and Conditions</p>
      </div>
    </div>
  )
}

export default Footer
