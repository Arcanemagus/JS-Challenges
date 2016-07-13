const deliveries = [
  {
    id: 1,
    destination: 'Oakland',
    orderPrice: 75,
    rushDelivery: true,
    rushDeliveryFee: 12.75,
    orderDate: '4 April 2016',
  },
  {
    id: 2,
    destination: 'San Jose',
    orderPrice: 62.75,
    orderDate: '5 April 2016',
  },
  {
    id: 3,
    destination: 'San Francisco',
    orderPrice: 15.00,
    rushDelivery: true,
    rushDeliveryFee: 50.75,
    orderDate: '10 April 2016',
  },
  {
    id: 4,
    destination: 'San Francisco',
    orderPrice: 25,
    orderDate: '4/11/2016',
  },
  {
    id: 5,
    destination: 'San Francisco',
    orderPrice: 90,
    rushDelivery: true,
    rushDeliveryFee: 30,
    orderDate: 'April 12, 2015',
  },
  {
    id: 6,
    destination: 'Berkeley',
    orderPrice: 45,
    orderDate: '4/01/2015',
  },
  {
    id: 7,
    destination: 'Berkeley',
    orderPrice: 62.16,
    orderDate: '12 April 2016',
  },
];

// Given an array of deliveries, return an object that contains a key for each
// destination we deliver to. The value of each key should be how many
// deliveries we will be making to that destination
const countPuppiesByLocation = (deliveries) => {
  // create a return object
  const returnLocations = {};
  // iterate through deliveries
  for (let i = 0; i < deliveries.length; i++) {
    // read the value of 'destination' and assign to new variable
    const locations = deliveries[i].destination;
    // for each destination create a key in the new return object
    if (returnLocations[locations]) {
      // +1 value each time the destination appears in deliveries
      returnLocations[locations] += 1;
    } else {
      returnLocations[locations] = 1;
    }
  }
  // return the new object
  return returnLocations;
};

// console.log(countPuppiesByLocation(deliveries));

// Given an array of deliveries, find the maximum fee you can make
// from making three deliveries. Include rush delivery fees when possible.
// The maximum fee for the given data set is 273.5
const collectMaxThreeDeliveries = (deliveries) => {
  // iterate through deliveries
  const totals = [];
  let highestValue = 0;
  let secHighestValue = 0;
  let thirdHighestValue = 0;
  for (let i = 0; i < deliveries.length; i++) {
    // calculate order (price + possible rush fee)
    let total = deliveries[i].orderPrice;
    if (deliveries[i].rushDelivery) {
      total += deliveries[i].rushDeliveryFee;
    }
    totals.push(total);
  }
  for (let i = 0; i < totals.length; i++) {
    const value = totals[i];
    if (value > highestValue) {
      thirdHighestValue = secHighestValue;
      secHighestValue = highestValue;
      highestValue = value;
    } else if (value > secHighestValue) {
      thirdHighestValue = secHighestValue;
      secHighestValue = value;
    } else if (value > thirdHighestValue) {
      thirdHighestValue = value;
    }
  }
  return thirdHighestValue + secHighestValue + highestValue;
};

console.log(collectMaxThreeDeliveries(deliveries));
