// const user_routes = express.Router('/', (req, res) => { })
// const user_schema = require('../models/user.model.js')
const express = require('express')
const UserController = require("../controllers/user");

const api = express.Router();

api.post("/signup", UserController.signUp);

module.exports = api;

// user_routes.post('/person', (req, res, next) => {
//     const new_person = user_schema(req.body);
//     new_person
//         .save()
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((err) => {
//             res.json({ message: err })
//         });
// });

// user_routes.get('/person', (req, res, next) => {
//     user_schema
//         .find()
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((err) => {
//             res.json({ message: err });
//         });
// });

// user_routes.get('/:personId', (req, res, next) => {
//     const { personId } = req.params;
//     user_schema
//         .findOne({personId})
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((err) => {
//             res.json({ message: err });
//         });
// });

// user_routes.put('/:personId', (req, res, next) => {
//     const { personId } = req.params;
//     const { name, lastname, email, contact, proffession } = req.body;
//     user_schema
//         .updateOne(
//             { _id: personId },
//             { $set: { name, lastname, email, contact, proffession } }
//         )
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((err) => {
//             res.json({ message: err });
//         });
// });

// user_routes.delete('/:personId', (req, res, next) => {
//     const { personId } = req.params;
//     user_schema
//         .deleteOne({ _id: personId })
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((err) => {
//             res.json({ message: err });
//         });
// });

