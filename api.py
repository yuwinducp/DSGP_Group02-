from __future__ import print_function
from flask import Flask, request, jsonify
import numpy as np
import pickle
from sklearn.preprocessing import LabelEncoder
import warnings

warnings.filterwarnings('ignore')
# from __future__ import print_function # In python 2.7
import sys
from json import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

#Load the ML models
crop_recommendation_model_path = 'crop_pred_new_model.pkl'
crop_recommendation_model = pickle.load(
    open(crop_recommendation_model_path, 'rb'))

fertilizer_recommendation_model_path = 'main_fert.pkl'
fertilizer_recommendation_model = pickle.load(
    open(fertilizer_recommendation_model_path, 'rb'))


@app.route("/crop", methods=['POST'])
def members1():
    try:
        N = int(request.json['N'])
        P = int(request.json['P'])
        K = int(request.json['K'])
        ph = float(request.json['ph'])
        rainfall = float(request.json['rainfall'])
        temp = float(request.json['temperature'])
        humidity = float(request.json['humidity'])


    except:
        return jsonify({"crop": 'failed to get required data for crop prediction'})

    # return jsonify({"crop": 'printing request', "data": request.json})
    data = np.array([[N, P, K, temp, humidity, ph, rainfall]])  # modify the input data array

    my_prediction = crop_recommendation_model.predict(data)
    final_prediction = my_prediction[0]

    return jsonify({"crop": [final_prediction]})


@app.route("/fertilizer", methods=['POST'])
def members2():
    try:
        N = int(request.json['Nitrogen'])
        P = int(request.json['Potassium'])
        K = int(request.json['Phosphorous'])
        moisture = float(request.json['Moisture'])
        temp = float(request.json['Temparature'])
        humidity = float(request.json['Humidity'])
        soil_type = (request.json['soil_type'])
        crop_type = (request.json['crop_type'])






    except:
        return jsonify({"crop": 'failed to get required data for fertilizer recommendation'})

    label_encoder_soil_type = LabelEncoder()
    label_encoder_crop_type = LabelEncoder()


    # Perform label encoding on soil_type and crop_type
    soil_type_encoded = label_encoder_soil_type.fit_transform([soil_type])[0]
    crop_type_encoded = label_encoder_crop_type.fit_transform([crop_type])[0]




    data = np.array([[moisture, temp, humidity, soil_type_encoded, crop_type_encoded, N, K, P]])

    # data = np.array([[26, 52, 38, 4, 3,	37,	0, 0 ]])



    my_prediction = fertilizer_recommendation_model.predict(data)
    final_prediction = my_prediction[0]



    final_prediction = final_prediction.item() if hasattr(final_prediction, 'item') else final_prediction

    return jsonify({"fertilizer": [final_prediction]})



if __name__ == "__main__":
    app.run(debug=True)