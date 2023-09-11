import React from 'react'
import loader from '/Loader.svg'
import './loader.scss'
const Loader = () => {
  return (
    <>
    <figure className='loaderImg'>
        <img src={loader} alt="Loading" />
    </figure>

    <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
    </div>
    </>
  )
}

export default Loader