const express = require('express');
const meetingsRouter = express.Router();
const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('./db');

meetingsRouter.param('minionId', (req, res, next, id) => {
  req.minionId = id;
  next();
});

meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
  const newMeeting = createMeeting();
  addToDatabase('meetings', newMeeting);
  res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
  res.status(200).send(deleteAllFromDatabase('meetings'));
});

module.exports = meetingsRouter;
