'use strict';

const express = require('express');

//bring in Drink model
const { Drink } = require('../models/index.js');

//bring in experss' router object to store routes in
const router = express.Router();

//define routes
router.get('/drink', getAllDrink);
router.post('/drink', createDrink);
router.get('/drink/:id', getOneDrink);
router.put('/drink/:id', updateDrink);
router.delete('/drink/:id', deletedDrink);

//get all drinks from DB
async function getAllDrink(req, res) {
  let allDrink = await Drink.findAll();
  res.status(200).json(allDrink);
}

//create a drink for the DB
async function createDrink(req, res) {
  let newDrink = await Drink.create(req.body);
  res.status(201).json(newDrink);
}

//get one drink from DB via its id
async function getOneDrink(req, res) {
  const id = parseInt(req.params.id);
  let oneDrink = await Drink.findOne({ where: { id: id } });
  res.status(200).json(oneDrink);
}

//update one drink from DB via its id
async function updateDrink(req, res) {
  const id = parseInt(req.params.id);
  const updatedDrinkObj = req.body;
  let updateDrink = await Drink.findOne({ where: { id: id } });
  let updatedDrink = await updateDrink.update(updatedDrinkObj);
  res.status(200).json(updatedDrink);
}

//delete one drink from DB via its id
async function deletedDrink(req, res) {
  const id = parseInt(req.params.id);
  let deleteDrink = await Drink.destroy({ where: { id } });
  res.status(204).json(deleteDrink);
}

module.exports = router;
