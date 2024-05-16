# Calculating Lunar Eclipse In Certain Place

Calculating moon eclipses accurately requires astronomical libraries and complex celestial mechanics. However, here's a Node.js function using the astronomy-engine library (https://www.npmjs.com/package/astronomy-engine) to provide a basic indication of a potential lunar eclipse at a specific location.

## Explanation:

- The code imports the `astronomy-engine` library.
- The checkLunarEclipse function takes latitude, longitude, and date as arguments.
- It creates an Observer object representing the location.
- It defines search options with a date range of one day before and after the given date.
- It uses astronomy.searchLunarEclipse within a try-catch block to search for eclipses during that timeframe.
- If an eclipse is found, the function returns true, otherwise false.
- The example usage demonstrates calling the function with Jakarta coordinates and the current date.
- It checks the result and logs a message accordingly.

## Limitations:

- This is a simplified approach and doesn't guarantee an actual eclipse.
- It only indicates the possibility of an eclipse within a day.
- Precise eclipse details (visibility, duration, etc.) require advanced calculations.