const astronomy = require('astronomy-engine');

/**
 * Checks for potential lunar eclipse at a given location and date
 * @param {number} latitude Location latitude in degrees
 * @param {number} longitude Location longitude in degrees
 * @param {Date} date The date for which to check (UTC)
 * @returns {Promise<boolean>} True if a potential eclipse might occur, False otherwise
 */
async function checkLunarEclipse(latitude, longitude, date) {
  const observer = new astronomy.Observer({
    location: astronomy.Coordinates.fromDegrees(latitude, longitude),
  });

  // Search for lunar eclipse within a day of the given date
  const searchOptions = {
    startDate: new Date(date.getTime() - 24 * 60 * 60 * 1000), // 1 day before
    endDate: new Date(date.getTime() + 24 * 60 * 60 * 1000), // 1 day after
  };

  try {
    const eclipse = await astronomy.searchLunarEclipse(searchOptions);
    return eclipse !== null; // Check if any eclipse was found
  } catch (error) {
    console.error('Error searching for eclipse:', error);
    return false;
  }
}

// Example usage
const jakarta = { latitude: -6.174444, longitude: 106.829389 }; // Jakarta coordinates
const today = new Date();

checkLunarEclipse(jakarta.latitude, jakarta.longitude, today)
  .then((hasEclipse) => {
    if (hasEclipse) {
      console.log('A potential lunar eclipse might occur near your location today!');
    } else {
      console.log('No potential lunar eclipse found for today.');
    }
  });
