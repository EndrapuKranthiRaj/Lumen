import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('https://github.com/YBIFoundation/Dataset/raw/main/TelecomCustomerChurn.csv')

df.head()

df.info()

df.describe()

df.isna().sum()

df.duplicated().sum()

# define y and X
y = df['Churn']
X = df.drop(['customerID','Churn'],axis=1)


y.value_counts()

# sample oversampling
from imblearn.over_sampling import RandomOverSampler

ros = RandomOverSampler()

X,y = ros.fit_resample(X,y)

y.value_counts()

from sklearn.preprocessing import OrdinalEncoder

oe = OrdinalEncoder()

X = oe.fit_transform(X)

#Saving encoder - to transform unseen data accordingly
import pickle
pickle.dump(oe, open('Ordinal_encoder.pk1', 'wb'))
print("OrdinalEncoder saved successfully!")

# train test split
from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test=train_test_split(X,y,random_state=2529)

from sklearn.ensemble import RandomForestClassifier

rfc = RandomForestClassifier()

rfc.fit(X_train,y_train)

#Saving model
pickle.dump(rfc, open('Lumen_test1_model.pk1', 'wb'))
loaded_model = pickle.load(open('Lumen_test1_model.pk1', 'rb'))

#Predict
y_pred = loaded_model.predict(X_test)

#testing custome input
X_funtest = [[0.000e+00, 0.000e+00, 1.000e+00, 0.000e+00, 1.000e+00, 0.000e+00, 0.000e+00,
  0.000e+00, 0.000e+00, 1.000e+00, 0.000e+00, 0.000e+00, 0.000e+00, 0.000e+00,
  0.000e+00, 1.000e+00, 2.000e+00, 1.420e+02, 2.505e+03 ]]
show_me = loaded_model.predict(X_funtest)
print(show_me)

# evaluate
from sklearn.metrics import classification_report

print(classification_report(y_test,y_pred))