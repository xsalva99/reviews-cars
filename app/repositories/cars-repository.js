"use strict";

const getPool = require("../infrastucture/database");

async function findAllCars() {
  const pool = await getPool();
  const sql = "SELECT * FROM cars";
  const [cars] = await pool.query(sql);

  return cars;
}

function findCarById(id) {
  // const sql = SELECT * FROM cars WHERE id = id;
  // return cars.find((car) => car.id === +id); // con el + conviertes string en nº
  return true;
}

module.exports = {
  findAllCars,
  findCarById,
};
