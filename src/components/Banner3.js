import React from 'react'
import "../styles/Banner3.css"
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'

function Banner3() {

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
        <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/B4.jpg'})`}} className="container">
            <div className="banner3">
            <div className="banner3__buttons">
                        <Button onClick={cropRedirect} className="banner3__button cropButton">Crop Recommender</Button>
                        <Button onClick={fertRedirect} className="banner3__button fertilizerButton">Fertilizer Recommender</Button>
                        <Button onClick={adviceRedirect} className="banner3__button adviceButton">Agri Advice</Button>
                    </div>
            </div>
        </div>
    )
}

export default Banner3