const express = require("express");
const apiRouter = express.Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  createMeeting,
  deleteAllFromDatabase,
} = require("./db");

apiRouter.param("type", (req, res, next, type) => {
  req.type = type;
  next();
});

apiRouter.param("id", (req, res, next, id) => {
  req.id = id;
  next();
});

apiRouter.get("/:type", (req, res, next) => {
  res.send(getAllFromDatabase(req.type));
});

apiRouter.post("/:type", checkMillionDollarIdea, (req, res, next) => {
  const newObject = req.type == "meetings" ? createMeeting() : req.body;
  res.send(addToDatabase(req.type, newObject));
});

apiRouter.get("/:type/:id", (req, res, next) => {
  res.send(getFromDatabaseById(req.type, req.id));
});

apiRouter.put("/:type/:id", checkMillionDollarIdea, (req, res, next) => {
  res.send(updateInstanceInDatabase(req.type, req.body));
});

apiRouter.delete("/:type/:id", (req, res, next) => {
  res.send(deleteFromDatabasebyId(req.type, req.id));
});

apiRouter.delete("/:type", (req, res, next) => {
  res.send(deleteAllFromDatabase(req.type));
});

module.exports = apiRouter;
