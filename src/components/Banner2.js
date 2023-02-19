import React from 'react'
import "../styles/Banner2.css"
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'

function Banner2() {
    let history = useHistory()

    const cropRedirect = () => {
        history.push("/crop")
    }

    const fertRedirect = () => {
        history.push("/fertilizer")
    }

    const adviceRedirect = () => {
        history.push("/advice")
    }

    return (

            <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/B7.jpg'})`}} className="AboutUsContainer">
            <section class="container_description">
                <div className="banner2__title"><h2>Web based Crop Prediction and Fertilizer Recommendation Application</h2></div>
                <p className="banner2__title_tail">AGROMATICS is a leading agro-technology company that provides users with crop and fertilizer recommendations using state-of-the-art data analysis and modeling techniques. The company predicts the ideal crop to cultivate for a given location, taking into account factors such as temperature, rainfall, humidity, soil conditions (NPK values) etc. AGROMATICS also recommends the best fertilizer to use for each crop, ensuring optimal growth, yield and quality.<br></br>
                In addition to its crop and fertilizer recommendations, the company offers a broad range of agricultural advisory services, including soil testing, pest and disease control, irrigation management, and precision farming techniques. Our team of experts, comprising of agricultural scientists, soil scientists, and data analysts, have in-depth knowledge of the latest agro-technology trends and are dedicated to providing farmers with the most up-to-date and accurate information.<br></br>
                We are committed to providing farmers with the tools and knowledge they need to improve their crop yields and overall farm productivity, while also promoting sustainable agricultural practices.<br></br>
                AGROMATICS is at the forefront of the agro-technology industry, and we are dedicated to helping farmers around the world grow more sustainable, profitable and high-quality crops.
                </p>
            </section>

            <div className="banner2__title"><h2>Our Services</h2></div>
            <section class="container_button">
                <div class="card">
                    <img src='assets/cropicon.png' alt="Crop Icon" className="card__icon"/>
                    <Button onClick={cropRedirect} className="banner3__button cropButton">Crop Recommender</Button>
                </div>
                <div class="card">
                    <img src='assets/fertilizericon.png' alt="Fertilizer Icon" className="card__icon"/>
                    <Button onClick={fertRedirect} className="banner3__button fertilizerButton">Fertilizer Recommender</Button>
                </div>
                <div class="card">
                    <img src='assets/adviceicon.png' alt="Advice Icon" className="card__icon"/>
                    <Button onClick={adviceRedirect} className="banner3__button adviceButton">Agri Advice</Button>
                </div>
                
            </section>
        </div>
    )
}

export default Banner2