import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
import pickle
from flask_cors import CORS 
from datetime import datetime

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql+pymysql://root:@localhost/lumen'
db = SQLAlchemy(app)
CORS(app)

loaded_oe  = pickle.load(open('Ordinal_encoder.pk1', 'rb'))
model = pickle.load(open('Lumen_test1_model.pk1', 'rb'))

class Ml_model_test_data(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    testdata = db.Column(db.String(1000),nullable=False)
    output = db.Column(db.String(10),nullable=False)
    date = db.Column(db.String(10),nullable=True)

@app.route('/test')
def test():
    return {"Hello1": 1.000, "Hello2": 2.000}

#format to be sent
#{ "feature1": 0.000, "feature2": 0.000, "feature3": 1.000, "feature4": 0.000, "feature5": 1.000, "feature6": 0.000, "feature7": 0.000, "feature8": 0.000, "feature9": 0.000, "feature10": 1.000, "feature11": 0.000, "feature12": 0.000, "feature13": 0.000, "feature14": 0.000, "feature15": 0.000, "feature16": 1.000, "feature17": 2.000, "feature18": 142.000, "feature19": 2505.000 }




@app.route('/predict_api',methods=['GET','POST'])
def predict_api():
    try:
        data = request.get_json(force=True)
        #converting vals to vals strs to strs
        lst = list(data.values())
        print("Actual data:", lst)
        newlst=[]
        for i in lst:
            str1 = i.replace(" ",'')
            if str1.isalpha():
                newlst.append(i)
            else:
                newlst.append(eval(str1))

        newlst[-1] = str(newlst[-1])
        print(newlst)
        actual_data = [newlst]
        print("Actual data:", actual_data)
        transformed_data = loaded_oe.transform(actual_data)
        prediction = model.predict(transformed_data)
        output = prediction[0]
        print("Transformed data:", transformed_data)

        #For filling in MYsql
        fill_data = str(list(data.values()))
        fill_output = str(prediction[0])
        entry = Ml_model_test_data(testdata=fill_data,output=fill_output,date=datetime.now())
        db.session.add(entry)
        db.session.commit()

        print(output)
        return jsonify(output)
    
    except Exception as e:
        print(f"Error: ",e)  # Logs the error to the console
        return jsonify({"error": str(e)}), 500


@app.route('/print_table',methods=['GET','POST'])
def print_table():
    entries = Ml_model_test_data.query.all()
    send_me = {entry.sno:[{
            "testdata": entry.testdata,
            "output": entry.output,
            "date":entry.date
        } ] for entry in entries}
    return send_me




if __name__ == "__main__":
    app.run(debug=True, port=5000)