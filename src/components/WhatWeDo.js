import React from 'react'
import "../styles/WhatWeDo.css"

function WhatWeDo() {
    return (
        <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/B7.jpg'})`}} className="whatwedocontainer">
            <section><h1 style={{opacity: '0'}}>What We Do Page</h1></section>
            <section className='container_crop'>
                <div className="whatwedo_title"><h2>Crop Prediction</h2>
                <img src='assets/cropicon.png' alt="Crop Icon" className="wwd_card__icon"/></div>
                <p className="whatwedo_tale">At Agromatic, our crop prediction system utilizes advanced algorithms and machine learning techniques to accurately forecast crop yields and quality based on historical data and real-time environmental factors. Our system takes into account various factors such as soil quality, weather patterns, and farming practices to provide farmers with precise predictions for their crops. By leveraging machine learning technology, we aim to enable farmers worldwide to make informed decisions that optimize their yields and improve their farming practices.</p>
            </section>

            <section className='container_fertilizer'>
                <div className="whatwedo_title_fp">
                <img src='assets/fertilizericon.png' alt="Fertilizer Icon" className="wwd_card__icon"/>
                <h2>Fertilizer Prediction</h2></div>
                <p className="whatwedo_tale">At Agromatic, our fertilizer prediction system leverages data-driven analytics to provide farmers with personalized fertilizer recommendations that optimize crop yields while minimizing environmental impact and reducing costs. Our system takes into account factors such as soil quality, crop type, and weather patterns to determine the optimal fertilizer type, application rate, and timing. By offering precise and tailored recommendations, we aim to empower farmers to make informed decisions that enhance their crop yields and reduce their environmental footprint.</p>
            </section>

            <section className='container_advice'>
                <div className="whatwedo_title"><h2>Agri Advice</h2>
                <img src='assets/adviceicon.png' alt="Advice Icon" className="wwd_card__icon"/></div>
                <p className="whatwedo_tale">At Agromatic, our team of experienced agronomists provides advice and guidance to farmers through a series of informative and educational videos. Our advice videos cover a wide range of topics, including crop management, pest control, irrigation, and soil health, among others. By leveraging the expertise of our agronomists, we aim to empower farmers with the knowledge and tools they need to optimize their farming practices, increase their yields, and maximize their returns.</p>
            </section>
            <section><h1 style={{opacity: '0'}}>What We Do Page</h1></section>
        </div>
    )
}

export default WhatWeDo