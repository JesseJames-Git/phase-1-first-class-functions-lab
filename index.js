// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){
    driverArray = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return driverArray.slice(0,2)
}
console.log(returnFirstTwoDrivers());

const returnLastTwoDrivers = function(driverArray){
    driverArray = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return driverArray.slice(2,4)
}
console.log(returnLastTwoDrivers())

const selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers]
console.log(selectingDrivers)

function createFareMultiplier (fare){
    function quintupler (){
        return (fare * 5)
    }
    return quintupler
}
createFareMultiplier(5)

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

console.log(fareDoubler(10))

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier
  }
}

const fareTripler = createFareMultiplier(3)

console.log(fareTripler(4))

function selectDifferentDrivers(drivers, returnDrivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
        if (returnDrivers === returnFirstTwoDrivers){
            return returnFirstTwoDrivers ()
        } else if (returnDrivers === returnLastTwoDrivers){
            return returnLastTwoDrivers ()
        }
}
drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
console.log (selectDifferentDrivers(drivers, returnFirstTwoDrivers))
console.log (selectDifferentDrivers(drivers, returnLastTwoDrivers))
