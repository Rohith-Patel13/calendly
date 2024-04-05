import { useContext } from 'react'
import MyContext from '../MyContext/index'
import './index.css'
import "../global.css"
import Header from '../Header/index'
import Home from '../Home/index'
import Footer from '../Footer/index'

import comments from "../../images/comment-regular.svg"



const Main = () => {
  const {isInDarkMode}= useContext(MyContext)
  return (
    <div className={`main-bg ${isInDarkMode?"darkmode-bg":""}`}>
      <div className='comments-bg shadow'>
        <img src={comments} className='comments h-[30px]' alt='comments' />
      </div>
      <Header/>
      <Home />
      <Footer />
    </div>
  )
}

export default Main
