const express = require('express');
const ideasRouter = express.Router();
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideasRouter.param('ideaId', (req, res, next, id) => {
  req.ideaId = id;
  next();
});

ideasRouter.post('/', (req, res, next) => {
  res.send(addToDatabase('ideas', req.body));
});

ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

ideasRouter.get('/:ideaId', (req, res, next) => {
  res.send(getFromDatabaseById('ideas', req.ideaId));
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
  res.send(updateInstanceInDatabase('ideas', req.body));
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
  res.send(deleteFromDatabasebyId('ideas', req.ideaId));
});

module.exports = ideasRouter;
