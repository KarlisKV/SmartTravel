import pandas as pd

#load airport_data_with_coordinates.csv
data = pd.read_csv('airport_data_coords_cleaned.csv')

#load airport_with_coordinates.csv
data2 = pd.read_csv('airports_with_coordinates.csv')

# Look up longitude/latitude from data by IATA Code and add to data2 (merge on IATA Code)
coords = data[['IATA Code', 'longitude_deg', 'latitude_deg']].drop_duplicates(subset='IATA Code')
data2 = data2.drop(columns=['longitude_deg', 'latitude_deg'], errors='ignore').merge(coords, on='IATA Code', how='left')

#save the data2 dataframe
data2.to_csv('airport_with_coordinates2.csv', index=False)

#print all which don't have a longitude and latitude return me list of airport names
airport_names = data2[data2['longitude_deg'].isna() | data2['latitude_deg'].isna()]['Airport Name'].tolist()
print(airport_names)