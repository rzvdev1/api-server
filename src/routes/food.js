'use strict';
const express = require('express');
const { Food } = require('../models/index.js');
const router = express.Router();

router.get('/food', getAllFood);
router.post('/food', createFood);
router.get('/food/:id', getOneFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getAllFood(req, res) {
  let allFood = await Food.findAll();
  res.status(200).json(allFood);
}

async function createFood(req, res) {
  let newFood = await Food.create(req.body);
  res.status(201).json(newFood);
}

async function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let oneFood = await Food.findOne({ where: { id: id } });
  res.status(200).json(oneFood);
}
async function updateFood(req, res) {
  const id = parseInt(req.params.id);
  const updatedFoodObj = req.body;
  let updateFood = await Food.findOne({ where: { id: id } });
  let updatedFood = await updateFood.update(updatedFoodObj);
  res.status(200).json(updatedFood);
}

async function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let deleteFood = await Food.destroy({ where: { id } });
  res.status(204).json(deleteFood);
}

module.exports = router;
