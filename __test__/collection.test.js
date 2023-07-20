'use strict';
const {
  dbInstance,
  driverCollection,
  carCollection,
} = require('../src/models/');

beforeAll(async () => {
  await dbInstance.sync();
});
afterAll(async () => {
  await dbInstance.drop();
});

describe('driver model', () => {
  let testDriver = {
    name: 'test driver',
    licenseId: 1234567890,
  };
  let testCar = {
    model: 'Model Y',
    year: 2020,
  };
  let driver = null;
  let car = null;

  it('should be able to create a Driver and an Car', async () => {
    driver = await driverCollection.create(testDriver);
    car = await carCollection.create(testCar);
    expect(driver.name).toBe('test driver');
    expect(car.model).toBe('Model Y');
  });
  it('should be able to fetch a car', async () => {
    let car = await carCollection.read(1);
    expect(car.model).toBe('Model Y');
  });
});
