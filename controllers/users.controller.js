const allUsers = require('../test_data');
const { request } = require('express');


module.exports.getUsers = async function(req, res) {
  try {
    return await res.status(200).json(allUsers);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.removeUser = async function(req, res) {
  try {
    const index = await allUsers.findIndex(i => i.idReport === +req.params.id);
    allUsers.splice(index, 1);
    return res.status(200);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.getById = async function(req, res) {
  try {
    return await res.status(200).json(allUsers.filter(i => i.idReport === +req.params.id));
  } catch (err) {
    throw new Error(err);
  }
};

