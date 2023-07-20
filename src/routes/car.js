'use strict';
const express = require('express');

const { carCollection } = require('../models/index.js');

const router = express.Router();

router.get('/car', getAllCars);
router.get('/car/:id', getOneCar);
router.post('/car', createCar);
router.put('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);

async function getAllCars(req, res) {
  let allCars = await carCollection.read();
  res.status(200).json(allCars);
}

async function getOneCar(req, res) {
  const id = parseInt(req.params.id);
  let oneCar = await carCollection.read(id);
  res.status(200).json(oneCar);
}

async function createCar(req, res) {
  let obj = req.body;
  let newCar = await carCollection.create(obj);
  res.status(201).json(newCar);
}

async function updateCar(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updatedCar = await carCollection.update(id, obj);
  res.status(200).json(updatedCar);
}

async function deleteCar(req, res) {
  const id = parseInt(req.params.id);
  let deletedCar = await carCollection.delete(id);
  res.status(204).json(deletedCar);
}

module.exports = router;
