"use strict";

const { findCarById } = require("../../repositories/cars-repository"); //consulta base de datos

// servidor
function getCarById(req, res) {
  const { id } = findCarById(id);
  // Si existe, si es un nº
  const car = findCarById(id);
  if (!car) {
    res.status(400);
    res.send("Error");
  }

  res.status(200);
  res.send(car); // res.json(car)
}

module.exports = getCarById;
