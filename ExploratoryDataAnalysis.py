import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the data into a pandas dataframe
df = pd.read_csv("C:/Users/HP/Downloads/DSGP/crop_rec.csv")

# Get the number of rows and columns in the data
print("Rows: ", df.shape[0])
print("Columns: ", df.shape[1])

# Get the first five rows of the data
print(df.head())
# Get the summary statistics of the data
print(df.describe())
# Check for missing values in the data
print(df.isnull().sum())
# No missing values found

# Dropping column 'Label' since it's not numeric
exclude_column = 'label'
df = df.drop(exclude_column, axis=1)

# Plotting the heatmap
sns.heatmap(df.corr(), annot=True)
plt.show()

# Plot boxplot
sns.boxplot(data=df)
plt.show()

# Plot histograms
df.hist(bins=30, figsize=(20, 15))
plt.show()

# Plot count plots for int columns
for column in df.columns:
    if df[column].dtype == 'int64':
        sns.countplot(x=column, data=df)
        # plt.show()

# Plot count plots for float columns
for column in df.columns:
    if df[column].dtype == 'float64':
        sns.countplot(x=column, data=df)
        # plt.show()

# Plot a scatter plot matrix
x_column = 'humidity'
y_column = 'temperature'
a_column = 'N'
b_column = 'P'
c_column = 'K'
d_column = 'ph'
e_column = 'rainfall'

# Plotting a scatter plots for the specified columns
# humidity x other columns
df.plot(kind='scatter', x=x_column, y=y_column)
df.plot(kind='scatter', x=x_column, y=a_column)
df.plot(kind='scatter', x=x_column, y=b_column)
df.plot(kind='scatter', x=x_column, y=c_column)
df.plot(kind='scatter', x=x_column, y=d_column)
df.plot(kind='scatter', x=x_column, y=e_column)

# temperature x other columns
df.plot(kind='scatter', x=y_column, y=x_column)
df.plot(kind='scatter', x=y_column, y=a_column)
df.plot(kind='scatter', x=y_column, y=b_column)
df.plot(kind='scatter', x=y_column, y=c_column)
df.plot(kind='scatter', x=y_column, y=d_column)
df.plot(kind='scatter', x=y_column, y=e_column)

# ph x other columns
df.plot(kind='scatter', x=d_column, y=y_column)
df.plot(kind='scatter', x=d_column, y=a_column)
df.plot(kind='scatter', x=d_column, y=b_column)
df.plot(kind='scatter', x=d_column, y=c_column)
df.plot(kind='scatter', x=d_column, y=x_column)
df.plot(kind='scatter', x=d_column, y=e_column)

# rainfall x other columns
df.plot(kind='scatter', x=e_column, y=y_column)
df.plot(kind='scatter', x=e_column, y=a_column)
df.plot(kind='scatter', x=e_column, y=b_column)
df.plot(kind='scatter', x=e_column, y=c_column)
df.plot(kind='scatter', x=e_column, y=d_column)
df.plot(kind='scatter', x=e_column, y=x_column)

plt.show()
