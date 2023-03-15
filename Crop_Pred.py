import pandas as pd
from sklearn.preprocessing import RobustScaler
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.exceptions import UndefinedMetricWarning
import warnings
warnings.filterwarnings("ignore", category=UndefinedMetricWarning)

# Load dataset
data = pd.read_csv("crop_rec.csv")

# Split dataset into features and target variable
X = data.iloc[:, :-1]
y = data.iloc[:, -1]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Initialize the Robust Scaler
scaler = RobustScaler()

# Scale the training and testing data
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize the gradient boosting classifier
gb_clf = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42)

# Fit the model to the scaled training data
gb_clf.fit(X_train_scaled, y_train)

# Predict the target variable for the scaled testing data
y_pred = gb_clf.predict(X_test_scaled)
# Calculate the accuracy score of the model
predictions = gb_clf.predict(X_test)
print(confusion_matrix(y_test, predictions))
print(classification_report(y_test, predictions))
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy score:", accuracy)