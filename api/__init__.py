from flask import Flask, request, jsonify, render_template
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
from sklearn.externals import joblib

app = Flask(__name__)
api = Api(app)
CORS(app)

def prediction():
    predictor = joblib.load('models/model_joblib')
    data = predictor.tolist()
    return data

class Clients(Resource):
    def get(self):
        data = prediction()
        return data

    def post(self):        
        parser = reqparse.RequestParser()
        parser.add_argument('name', required=True)
        
        #Parse the arguments into an object
        args = parser.parse_args()
        print(args)

        return {'args': args}, 201

@app.route('/')
@cross_origin()
def root():
    return render_template("index.html")

api.add_resource(Clients, '/clients')