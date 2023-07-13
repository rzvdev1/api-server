'use strict';
const express = require('express');

const { driverCollection, carCollection } = require('../models/index.js');

const router = express.Router();

router.get('/driver', getAllDrivers);
router.get('/driver/:id', getOneDriver);
router.post('/driver', createDriver);
router.put('/driver/:id', updateDriver);
router.delete('/driver/:id', deleteDriver);

async function getAllDrivers(req, res) {
  let allDrivers = await driverCollection.read(null, {
    include: { model: carCollection.model },
  });
  res.status(200).json(allDrivers);
}

async function getOneDriver(req, res) {
  const id = parseInt(req.params.id);
  let oneDriver = await driverCollection.read(id, {
    include: { model: carCollection.model },
  });
  res.status(200).json(oneDriver);
}

async function createDriver(req, res) {
  let obj = req.body;
  let newDriver = await driverCollection.create(obj);
  res.status(201).json(newDriver);
}

async function updateDriver(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updatedDriver = await driverCollection.update(id, obj);
  res.status(200).json(updatedDriver);
}

async function deleteDriver(req, res) {
  const id = parseInt(req.params.id);
  let deletedDriver = await driverCollection.delete(id);
  res.status(204).json(deletedDriver);
}

module.exports = router;
