import React from 'react'
import "../styles/WhatWeDo.css"

function WhatWeDo() {
    return (
        <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/B7.jpg'})`}} className="whatwedocontainer">
            <section><h1 style={{opacity: '0'}}>What We Do Page</h1></section>
            <section className='container_crop'>
                <div className="whatwedo_title"><h2>Crop Prediction</h2>
                <img src='assets/cropicon.png' alt="Crop Icon" className="wwd_card__icon"/></div>
                <p className="whatwedo_tale">Our crop prediction system uses advanced algorithms and historical data to accurately predict the yield and quality of crops.</p>
            </section>

            <section className='container_fertilizer'>
                <div className="whatwedo_title_fp">
                <img src='assets/fertilizericon.png' alt="Fertilizer Icon" className="wwd_card__icon"/>
                <h2>Fertilizer Prediction</h2></div>
                <p className="whatwedo_tale">Our fertilizer prediction system helps farmers optimize the use of fertilizers to improve crop yield and quality while reducing costs.</p>
            </section>

            <section className='container_advice'>
                <div className="whatwedo_title"><h2>Agri Advice</h2>
                <img src='assets/adviceicon.png' alt="Advice Icon" className="wwd_card__icon"/></div>
                <p className="whatwedo_tale">Our team of agronomists provides personalized advice and recommendations to farmers to help them achieve their goals and maximize their returns.</p>
            </section>
            <section><h1 style={{opacity: '0'}}>What We Do Page</h1></section>
        </div>
    )
}

export default WhatWeDo