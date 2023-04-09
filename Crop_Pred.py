import warnings
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from imblearn.over_sampling import RandomOverSampler
from imblearn.combine import SMOTEENN
from sklearn.preprocessing import RobustScaler
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import train_test_split, learning_curve
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
from sklearn.exceptions import UndefinedMetricWarning

# Ignore UndefinedMetricWarning
warnings.filterwarnings("ignore", category=UndefinedMetricWarning)

# Load dataset
data = pd.read_csv("Crop_recommendation.csv")

# Assign column names to feature matrix
feature_names = data.columns[:-1]
X = data.iloc[:, :-1]
X.columns = feature_names
y = data.iloc[:, -1]

# Initialize the RandomOverSampler and SMOTEENN
oversampler = RandomOverSampler(random_state=42)
smote_enn = SMOTEENN(random_state=42)

# Resample the data
X_resampled, y_resampled = oversampler.fit_resample(X, y)
X_resampled, y_resampled = smote_enn.fit_resample(X_resampled, y_resampled)

# Split the resampled data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.3, random_state=42)

# Initialize the Robust Scaler
scaler = RobustScaler()

# Scale the training and testing data
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize the gradient boosting classifier
gb_clf = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42, max_depth=3)

# Fit the model to the scaled training data
gb_clf.fit(X_train_scaled, y_train)

# Predict the target variable for the scaled testing data
y_pred = gb_clf.predict(X_test_scaled)

# Calculate the accuracy score of the model
accuracy = accuracy_score(y_test, y_pred)

# Print the confusion matrix and classification report
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))
print("Accuracy score:", accuracy)

# Calculate and plot the learning curve
train_sizes, train_scores, test_scores = learning_curve(gb_clf, X_resampled, y_resampled, cv=5, scoring='accuracy', n_jobs=-1)

train_scores_mean = np.mean(train_scores, axis=1)
train_scores_std = np.std(train_scores, axis=1)
test_scores_mean = np.mean(test_scores, axis=1)
test_scores_std = np.std(test_scores, axis=1)

plt.figure(figsize=(8, 6))
plt.title('Learning Curve')
plt.xlabel('Training Set Size')
plt.ylabel('Accuracy Score')
plt.grid()
plt.fill_between(train_sizes, train_scores_mean - train_scores_std,
                 train_scores_mean + train_scores_std, alpha=0.1,
                 color='r')
plt.fill_between(train_sizes, test_scores_mean - test_scores_std,
                 test_scores_mean + test_scores_std, alpha=0.1,
                 color='g')
plt.plot(train_sizes, train_scores_mean, 'o-', color='r',
         label='Training Score')
plt.plot(train_sizes, test_scores_mean, 'o-', color='g',
         label='Cross-Validation Score')
plt.legend(loc='best')
plt.show()

# import pandas as pd
# from sklearn.preprocessing import RobustScaler
# from sklearn.ensemble import GradientBoostingClassifier
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import classification_report, confusion_matrix
# from sklearn.metrics import accuracy_score
# from sklearn.exceptions import UndefinedMetricWarning
# import warnings
# warnings.filterwarnings("ignore", category=UndefinedMetricWarning)
#
# # Load dataset
# data = pd.read_csv("crop_rec.csv")
#
# # Split dataset into features and target variable
# X = data.iloc[:, :-1]
# y = data.iloc[:, -1]
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
#
# # Initialize the Robust Scaler
# scaler = RobustScaler()
#
# # Scale the training and testing data
# X_train_scaled = scaler.fit_transform(X_train)
# X_test_scaled = scaler.transform(X_test)
#
# # Initialize the gradient boosting classifier
# gb_clf = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42)
#
# # Fit the model to the scaled training data
# gb_clf.fit(X_train_scaled, y_train)
#
# # Predict the target variable for the scaled testing data
# y_pred = gb_clf.predict(X_test_scaled)
# # Calculate the accuracy score of the model
# predictions = gb_clf.predict(X_test)
# print(confusion_matrix(y_test, predictions))
# print(classification_report(y_test, predictions))
# accuracy = accuracy_score(y_test, y_pred)
# print("Accuracy score:", accuracy)