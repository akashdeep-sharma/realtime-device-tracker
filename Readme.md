# Real-Time Location Tracking Application

This application provides real-time location tracking functionality using Socket.IO for communication and Leaflet for map rendering.

## Features

- Real-time location tracking
- Multiple user support
- Dynamic marker updates
- Automatic map centering on location updates
- User disconnection handling

## Technologies Used

- JavaScript
- Socket.IO
- Leaflet.js
- HTML5 Geolocation API

## How It Works

1. **Socket Connection**:
   The application establishes a Socket.IO connection to the server.

2. **Geolocation Tracking**:

   - Uses the HTML5 Geolocation API to track the user's location.
   - Continuously watches for position changes.
   - High accuracy is enabled with a 5-second timeout.

3. **Location Emission**:

   - When a new location is obtained, it's emitted to the server via Socket.IO.
   - The emitted data includes latitude and longitude.

4. **Map Initialization**:

   - Initializes a Leaflet map centered at [0, 0] with a zoom level of 16.
   - Uses OpenStreetMap tiles for the map layer.

5. **Location Reception**:

   - Listens for 'receive-location' events from the server.
   - Updates the map view to the received coordinates.
   - Creates or updates markers on the map for each user.

6. **User Disconnection**:
   - Listens for 'user-disconnected' events.
   - Removes the disconnected user's marker from the map.

## Usage

1. Include the necessary Socket.IO and Leaflet.js libraries in your HTML file.
2. Create a div with id "map" in your HTML for the Leaflet map.
3. Include this script in your HTML file.
4. Ensure your server is set up to handle Socket.IO connections and emit the appropriate events.

## Note

- This script assumes that the server is emitting 'receive-location' events with user id, latitude, and longitude.
- The server should also emit 'user-disconnected' events when a user disconnects.
- Make sure to handle any potential errors, especially with geolocation permissions.

## Future Improvements

- Add error handling for geolocation failures.
- Implement user authentication.
- Add custom markers or user avatars.
- Include additional information like speed, heading, or altitude.
- Optimize for mobile devices.
