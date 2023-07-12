'use strict';
const express = require('express');
const { Drink } = require('../models/index.js');
const router = express.Router();

router.get('/drink', getAllDrink);
router.post('/drink', createDrink);
router.get('/drink/:id', getOneDrink);
router.put('/drink/:id', updateDrink);
router.delete('/drink/:id', deletedDrink);

async function getAllDrink(req, res) {
  let allDrink = await Drink.findAll();
  res.status(200).json(allDrink);
}

async function createDrink(req, res) {
  let newDrink = await Drink.create(req.body);
  res.status(201).json(newDrink);
}

async function getOneDrink(req, res) {
  const id = parseInt(req.params.id);
  let oneDrink = await Drink.findOne({ where: { id: id } });
  res.status(200).json(oneDrink);
}
async function updateDrink(req, res) {
  const id = parseInt(req.params.id);
  const updatedDrinkObj = req.body;
  let updateDrink = await Drink.findOne({ where: { id: id } });
  let updatedDrink = await updateDrink.update(updatedDrinkObj);
  res.status(200).json(updatedDrink);
}

async function deletedDrink(req, res) {
  const id = parseInt(req.params.id);
  let deleteDrink = await Drink.destroy({ where: { id } });
  res.status(204).json(deleteDrink);
}

module.exports = router;
