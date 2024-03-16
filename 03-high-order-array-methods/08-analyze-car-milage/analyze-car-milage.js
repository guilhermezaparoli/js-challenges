function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);

  const highestMileage = cars.reduce(
    (acc, cum) => (cum.mileage > acc.mileage ? cum : acc),
    cars[0]
  );

  const lowestMileage = cars.reduce(
    (acc, cum) => (cum.mileage < acc.mileage ? cum : acc),
    cars[0]
  );

  console.log(lowestMileage);

  return {
    averageMileage: totalMileage / cars.length,
    highestMileageCar: highestMileage,
    lowestMileageCar: lowestMileage,
    totalMileage: totalMileage,
  };
}

module.exports = analyzeCarMileage;

console.log(
  analyzeCarMileage([
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
    { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
    { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
    { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
  ])
);
