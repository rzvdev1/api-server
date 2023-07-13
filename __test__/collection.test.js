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
    model: 'test car',
    year: 2020,
  };
  let driver = null;
  let car = null;

  it('should be able to create a Driver and an Car', async () => {
    driver = await driverCollection.create(testDriver);
    car = await carCollection.create(testCar);
    testDriver['customerId'] = driver.id;
    car = await carCollection.create(testCar);
    expect(driver.name).toEqual(testDriver.name);
    expect(car.model).toEqual(testCar.model);
    expect(car.customerId).toEqual(car.id);
  });
  it('should be able to fetch a car', async () => {
    let car = await carCollection.read(1);
    expect(car.model).toBe('test car');
  });
});
