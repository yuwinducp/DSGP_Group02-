import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import api from "../api/recommenderapi";
import Alert from "@material-ui/lab/Alert";
import "../styles/croprecommenderoutput.css";

function FertilizerRecommender() {
  const [formData, setFormData] = useState({
    Temparature: "",
    Humidity: "",
    Moisture: "",
    soil_type: "select",
    crop_type: "select",
    Nitrogen: "",
    Potassium: "",
    Phosphorous: "",
  });

  const [predictionData, setPredictionData] = useState(null);

  const [loadingStatus, setLoadingStatus] = useState(false);

  const formRenderData = [
    {
      name: "Nitrogen",
      description: "Amount Of Nitrogen in Soil",
    },
    {
      name: "Potassium",
      description: "Amount of Potassium in Soil",
    },
    {
      name: "Phosphorous",
      description: "Amount of Phosphorous in Soil",
    },
    {
      name: "Temparature",
      description: "Temperature (in Celcius)",
    },
    {
      name: "Humidity",
      description: "Humidity (in %)",
    },
    {
      name: "Moisture",
      description: "Moisture in Soil",
    },
  ];

  const soilTypes = ["Sandy", "Loamy", "Black", "Red", "Clayey"];
  const cropTypes = [
    "Maize",
    "Sugarcane",
    "Cotton",
    "Tobacco",
    "Paddy",
    "Barley",
    "Wheat",
    "Millets",
    "Oil seeds",
    "Pulses",
    "Ground Nuts",
  ];

  const handleChange = (e, changeKey = undefined) => {
    // console.log(changeKey, e.target.value)
    let newData = { ...formData };
    if (changeKey) {
      newData[changeKey] = e.target.value;
    } else newData[e.target.id] = e.target.value;
    setFormData(newData);
  };

  const handleClick = async () => {
    setLoadingStatus(true);

    const request = new FormData();

    for (let key in formData) {
      request.append(key, formData[key]);
    }

    console.log(formData)

    const response = await api.post("/fertilizer", formData);

    const responseData = response.data;
    setPredictionData(responseData);
    setLoadingStatus(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "assets/FertilizerRecomender.jpg"
        })`,
      }}
      className="container"
    >
      <div className="form">
        <div className="form__form_group">
          {predictionData && (
            <Alert style={{ marginTop: "20px" }} >

              {predictionData.crop}

               {predictionData.fertilizer}
            </Alert>
          )}

          <center>
            <div className="form__title">Fertilizer Recommender</div>
          </center>

          {formRenderData.map((formAttribute) => {
            return (
              <TextField
                key={formAttribute.name}
                onChange={(e) => handleChange(e)}
                value={formData[formAttribute.name]}
                className="form__text_field"
                id={formAttribute.name}
                name={formAttribute.name}
                variant="filled"
                label={formAttribute.description}
              />
            );
          })}

          <TextField
            id="soil_type"
            name="soil_type"
            select
            label="Soil Type"
            value={formData.soil_type}
            onChange={(e) => handleChange(e, "soil_type")}
            SelectProps={{
              native: true,
            }}
            variant="filled"
            className="form__text_field"
          >
            <option key={"select"} value={"select"}>
              {"Select"}
            </option>
            {soilTypes.map((soiltype) => (
              <option key={soiltype} value={soiltype}>
                {soiltype}
              </option>
            ))}
          </TextField>

          <TextField
            id="crop_type"
            name="crop_type"
            select
            label="Crop Type"
            value={formData.crop_type}
            onChange={(e) => handleChange(e, "crop_type")}
            SelectProps={{
              native: true,
            }}
            variant="filled"
            className="form__text_field"
          >
            <option key={"select"} value={"select"}>
              {"Select"}
            </option>
            {cropTypes.map((croptype) => (
              <option key={croptype} value={croptype}>
                {croptype}
              </option>
            ))}
          </TextField>

          <Button
            onClick={() => handleClick()}
            className="form__button"
            style={{backgroundColor: '#077329'}}
            color="primary"
            variant="contained"
          >
            Predict Fertilizer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FertilizerRecommender;
