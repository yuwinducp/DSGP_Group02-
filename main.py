import matplotlib.pyplot as plt
from sklearn.model_selection import KFold, GridSearchCV
from sklearn.preprocessing import LabelEncoder
from sklearn.svm import SVC
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

from imblearn.over_sampling import RandomOverSampler
import pandas as pd
import numpy as np
import warnings
from sklearn.exceptions import UndefinedMetricWarning
from mlxtend.plotting import plot_confusion_matrix

warnings.filterwarnings("ignore", category=UndefinedMetricWarning)
warnings.filterwarnings("ignore", category=UserWarning)

# Load the data
data = pd.read_csv("Cleaned Fertilizer Prediction.csv")

# Create a label encoder for each column
crop_type_encoder = LabelEncoder()
fertilizer_name_encoder = LabelEncoder()
soil_type_encoder = LabelEncoder()

# Encode non-numeric columns
data["Crop Type"] = crop_type_encoder.fit_transform(data["Crop Type"])
data["Fertilizer Name"] = fertilizer_name_encoder.fit_transform(data["Fertilizer Name"])
data["Soil Type"] = soil_type_encoder.fit_transform(data["Soil Type"])

# Split the data into features and target variables
X = data.iloc[:, :-1]
y = data.iloc[:, -1]

# Define the SVM model
svc_model = SVC()

# Define the parameter grid for GridSearchCV
param_grid = {'C': [0.1, 1, 10, 100], 'gamma': [1, 0.1, 0.01, 0.001]}

# Create a RandomOverSampler object
oversampler = RandomOverSampler()

# Create a k-fold cross-validation object with 5 folds
kf = KFold(n_splits=5)

# Create empty lists to store the scores and predictions on each fold
scores = []
predictions = []

# Loop over each fold
for fold_idx, (train_idx, test_idx) in enumerate(kf.split(X)):
    print(f"Fold {fold_idx + 1}")
    print("----------")

    # Split the data into training and test sets for this fold
    X_train, X_test = X.iloc[train_idx], X.iloc[test_idx]
    y_train, y_test = y.iloc[train_idx], y.iloc[test_idx]

    # Apply oversampling to the training data
    X_train_resampled, y_train_resampled = oversampler.fit_resample(X_train, y_train)

    # Fit the model on the resampled training data
    grid = GridSearchCV(svc_model, param_grid, refit=True, verbose=2)
    grid.fit(X_train_resampled, y_train_resampled)

    # Make predictions on the test data
    fold_predictions = grid.predict(X_test)
    predictions.append(fold_predictions)

    # Compute the accuracy score for this fold
    fold_accuracy = accuracy_score(y_test, fold_predictions)
    print(f"Accuracy: {fold_accuracy}")

    # Append the accuracy score for this fold to the list of scores
    scores.append(fold_accuracy)

# Compute the mean accuracy score across all folds
mean_accuracy = sum(scores) / len(scores)
print("Mean accuracy score:", mean_accuracy)

# Compute the overall confusion matrix and classification report across all folds
all_predictions = np.concatenate(predictions)
conf_matrix = confusion_matrix(y, all_predictions)
class_report = classification_report(y, all_predictions)

print("Overall confusion matrix:")
print(conf_matrix)
print("Overall classification report:")
print(class_report)

overall_accuracy = accuracy_score(y, all_predictions)
print("Overall accuracy score:", overall_accuracy)

# Plot the overall confusion matrix
plot_confusion_matrix(conf_matrix)
plt.show()
# Create a bar plot of the accuracy scores
plt.bar(range(1, 6), scores)
plt.xlabel('Fold')
plt.ylabel('Accuracy')
plt.ylim([0, 1])
plt.title('Accuracy of SVM Model with K-Fold Cross-Validation')
plt.show()


