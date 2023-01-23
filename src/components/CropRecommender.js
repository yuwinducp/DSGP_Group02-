import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import api from "../api/recommenderapi"
import Alert from '@material-ui/lab/Alert';


function CropRecommender() {

    const [formData, setFormData] = useState({
        N:"",
        P:"",
        K:"",
        temperature:"",
        humidity:"",
        ph:"",
        rainfall:""
    })

    const [predictionData, setPredictionData] = useState({})

    const [loadingStatus, setLoadingStatus] = useState(false)

    const handleChange = (e) => {
        let newData = {...formData}
        newData[e.target.id] = e.target.value
        setFormData(newData)
    }

    const handleClick = async () => {

        setLoadingStatus(true)
        
        const request = new FormData()

        for(let key in formData) {
            request.append(key, formData[key])
        }

        const response = await api.post(
            "/predict_crop",
            request
        )
        
        const responseData = response.data
        setPredictionData(responseData)
        setLoadingStatus(false)
    }



    return (
        <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/CropRecomender.jpg'})`}} className="container">
            <div className="form">
                <div className="form__form_group">

                    {
                        predictionData.error && 
                        <Alert style={{marginTop:"20px"}} severity="error"> { predictionData.error } </Alert>
                    }

                    <center><div className="form__title">Crop Recommender</div></center>
                    <TextField onChange={(e) => handleChange(e)} value={formData.N} className="form__text_field" id="N" name="N" variant="filled" label="Amount of Nitrogen in Soil" />
                    <TextField onChange={(e) => handleChange(e)} value={formData.P} className="form__text_field" id="P" name="P" variant="filled" label="Amount of Phosphorous in Soil" />
                    <TextField onChange={(e) => handleChange(e)} value={formData.K} className="form__text_field" id="K" name="K" variant="filled" label="Amount of Pottasium in Soil" />
                    <TextField onChange={(e) => handleChange(e)} value={formData.temperature} className="form__text_field" id="temperature" name="temperature" variant="filled" label="Temperature (in Celcius)" />
                    <TextField onChange={(e) => handleChange(e)} value={formData.humidity} className="form__text_field" id="humidity" name="humidity" variant="filled" label="Humidity (in %)" />
                    <TextField onChange={(e) => handleChange(e)} value={formData.ph} className="form__text_field" id="ph" name="ph" variant="filled" label="pH value of Soil" />
                    <TextField onChange={(e) => handleChange(e)} value={formData.rainfall} className="form__text_field" id="rainfall" name="rainfall" variant="filled" label="Rainfall (in mm)" />

                    <Button onClick={()=>handleClick()} className="form__button" color="primary" variant="contained">Predict Crop</Button>
                </div>
            </div>
        </div>
    )
}

export default CropRecommender
