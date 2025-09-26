const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// Use reduce() to sum up all the battery amounts
const totalBatteries = batteryBatches.reduce((sum, batch) => {
  return sum + batch;
}, 0);
