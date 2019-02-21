var temperatureRecord = [26, 45, 67, 89, 10, 45, 78, 90, 90, 45, 67, 67, 45, 67, 140, 130, 134, 121, 143, 149, 19, 29, 30]

function getMax (data) {
  let max = data[0]
  for (let i = 1; i < data.length; i++) {
    if (data[i] > max) {
      max = data[i]
    }
  }
  return max
}

function getMin (data) {
  let min = data[0]
  for (let i = 1; i < data.length; i++) {
    if (data[i] < min) {
      min = data[i]
    }
  }
  return min
}
function getMean (data) {
  let sum = 0
  for (let i = 0; i < data.length; i++) {
    sum += data[i]
  }
  return (sum / data.length).toFixed(3)
}
function getMode (data) {
  let mode = 0; let maxCount = 0; let i; let j
  for (i = 0; i < data.length; ++i) {
    let count = 0
    for (j = 0; j < data.length; ++j) {
      if (data[j] === data[i]) {
        ++count
      }
    }
    if (count > maxCount) {
      maxCount = count
      mode = data[i]
    }
  }
  return mode
}
let maxTemp = getMax(temperatureRecord)
let minTemp = getMin(temperatureRecord)
let mean = getMean(temperatureRecord)
let mode = getMode(temperatureRecord)
console.log('Maximum=' + maxTemp)
console.log('\nMinimum=' + minTemp)
console.log('\nMean=' + mean)
console.log('\nMode=' + mode)
