import React from 'react'
import './searchitem.css'


function Searchitem() {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/113626106.jpg?k=326e1a09f33543513ac72ebffeae03181b7a35223b4f21796758a941103b6913&o=&hp=1" alt=""
        className='siImg' />
        <div className="siDesc">
            <h1 className="siTitle">Tower Strrt Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio &#x2022; 1 bathroom &#x2022; 21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today.</span>
        
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="isDetailTexts">
                <span className="siPrice">$234</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See avilability</button>
            </div>
        </div>
    </div>
  )
}

export default Searchitem