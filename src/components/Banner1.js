import React from 'react'
import "../styles/Banner1.css"

function Banner() {

    return (
        <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/B2.jpg'})`}} className="container">
            <div className="banner">
                <div className="banner__title">
                    <div className="banner__title_head">
                        <img className="banner1_logo_image" src={`${process.env.PUBLIC_URL + '/assets/LOGO.png'}`} alt="Logo" /><br></br>
                        AGRO<font>MATICS</font>
                    </div>
                    <div className="banner__title_tail">
                        <div className="typing">Web based Crop Prediction and Fertilizer Recommendation Application</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner