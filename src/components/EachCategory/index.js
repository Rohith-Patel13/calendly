// import {useState} from 'react'
import './index.css'

const EachCategory = (props) => {
  
  const {eachCategory} = props
  const {image,title,description} = eachCategory  
  return (
    <>
      {title === "Getting Started" && (
        <button type="button" className='new-btn relative  bg-blue-500 text-white py-1 px-2 border-top-right-radius-[16px] rounded-bottom-left rounded-top-right'>New</button>
      )}
      <img src={image} className='h-[90px] w-[100px]' alt={title} />  
      <h1 className='font-extrabold'>{title}</h1>
      <p className='font-light'>{description}</p>
    </>
  )
}

export default EachCategory
