


import pandas as pd
import numpy as np
import datetime
import random
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
import seaborn as sns
import matplotlib.pyplot as plt

# Generate synthetic dataset
def create_synthetic_data(num_entries=100):
    vehicle_types = ['car', 'truck', 'emergency']
    weather_conditions = ['clear', 'rain', 'fog']
    events = ['none', 'parade', 'accident']
    
    data = {
        'Timestamp': [datetime.datetime.now() + datetime.timedelta(minutes=i) for i in range(num_entries)],
        'Vehicle_Type': [random.choice(vehicle_types) for _ in range(num_entries)],
        'Traffic_Volume': [random.randint(1, 10) for _ in range(num_entries)],
        'Weather_Condition': [random.choice(weather_conditions) for _ in range(num_entries)],
        'Event': [random.choice(events) for _ in range(num_entries)],
        'Road_Condition': [random.choice(['wet', 'dry']) for _ in range(num_entries)],
        'Time_of_Day': [random.randint(0, 23) for _ in range(num_entries)]
    }

    return pd.DataFrame(data)

# Step 1: Create dataset
traffic_data = create_synthetic_data()

# Step 2: Preprocess the data
le = LabelEncoder()
traffic_data['Vehicle_Type'] = le.fit_transform(traffic_data['Vehicle_Type'])
traffic_data['Weather_Condition'] = le.fit_transform(traffic_data['Weather_Condition'])
traffic_data['Event'] = le.fit_transform(traffic_data['Event'])
traffic_data['Road_Condition'] = le.fit_transform(traffic_data['Road_Condition'])

# Step 3: Create a new column based on Traffic Volume
traffic_data['Traffic_Condition'] = ['normal' if x <= 5 else 'congested' for x in traffic_data['Traffic_Volume']]
traffic_data['Traffic_Condition'] = le.fit_transform(traffic_data['Traffic_Condition'])

# Step 4: Display the preprocessed data
print(traffic_data.head())

# Step 5: Train the ML Model
features = ['Vehicle_Type', 'Traffic_Volume', 'Weather_Condition', 'Event', 'Road_Condition', 'Time_of_Day']
X = traffic_data[features]
y = traffic_data['Traffic_Condition']

# Split into training and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predict on test set
y_pred = model.predict(X_test)

# Evaluate model
accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred)

print(f"Accuracy: {accuracy * 100:.2f}%")
print(report)

# Step 6: Data Visualization

# 1. Traffic Volume Distribution
sns.set(style="whitegrid")
plt.figure(figsize=(12, 6))
sns.histplot(traffic_data['Traffic_Volume'], bins=10, kde=True, color='blue')
plt.title('Traffic Volume Distribution')
plt.xlabel('Traffic Volume')
plt.ylabel('Frequency')
plt.show()

# 2. Traffic Volume by Weather Condition
plt.figure(figsize=(12, 6))
sns.boxplot(x='Weather_Condition', y='Traffic_Volume', data=traffic_data, palette='Set2')
plt.title('Traffic Volume by Weather Condition')
plt.xlabel('Weather Condition')
plt.ylabel('Traffic Volume')
plt.show()

# 3. Emergency Vehicles Count During Events
plt.figure(figsize=(12, 6))
sns.countplot(x='Event', hue=traffic_data['Vehicle_Type'], data=traffic_data, palette='Set1')
plt.title('Count of Vehicle Types During Events')
plt.xlabel('Event Type')
plt.ylabel('Count of Vehicles')
plt.show()




