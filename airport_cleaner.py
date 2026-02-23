import pandas as pd

#load airport_with_coordinates.csv
data2 = pd.read_csv('airport_data_coords_cleaned.csv')

#load airport_coordinates.csv
airports = pd.read_csv('airport_coordinates.csv')
#drop Country
airports = airports.drop(columns=['Country'])

#Rename Longitude to longitude_deg and Latitude to latitude_deg
airports = airports.rename(columns={'Longitude': 'longitude_deg', 'Latitude': 'latitude_deg'})
# add to data2 dataframe the longitude and latitude columns from the airport_coordinates dataframe for these specific airports
data2 = data2.merge(airports, on='Airport Name', how='left')

# coalesce _x and _y coordinate columns into single longitude_deg and latitude_deg (take whichever is non-empty)
data2['longitude_deg'] = data2['longitude_deg_x'].fillna(data2['longitude_deg_y'])
data2['latitude_deg'] = data2['latitude_deg_x'].fillna(data2['latitude_deg_y'])
data2 = data2.drop(columns=['longitude_deg_x', 'latitude_deg_x', 'latitude_deg_y', 'longitude_deg_y'])

# save the data2 dataframe
data2.to_csv('airport_data_coords_cleaned2.csv', index=False)