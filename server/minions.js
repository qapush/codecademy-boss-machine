const express = require('express');
const minionsRouter = express.Router();
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
  req.minionId = id;
  next();
});

minionsRouter.post('/', (req, res, next) => {
  res.send(addToDatabase('minions', req.body));
});

minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

minionsRouter.get('/:minionId', (req, res, next) => {
  res.send(getFromDatabaseById('minions', req.minionId));
});

minionsRouter.put('/:minionId', (req, res, next) => {
  res.send(updateInstanceInDatabase('minions', req.body));
});

minionsRouter.delete('/:minionId', (req, res, next) => {
  res.send(deleteFromDatabasebyId('minions', req.minionId));
});

module.exports = minionsRouter;
