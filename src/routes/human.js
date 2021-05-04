'use strict'


const express = require('express');
const router = express.Router();

const Human = require("../models/human.js");


let humanInstance = new Human();


// ------------------------------------
router.post('/human', createHuman);

function createHuman(req, res) {
    let obj = req.body

    let createdHuman = humanInstance.create(obj);

    res.status(200).json(createdHuman);
}
// ------------------------------------

router.get('/human', getAllHumans);

function getAllHumans(req, res) {
    let callAllHuman = humanInstance.get();
    res.status(200).json(callAllHuman);
}

// ------------------------------------

router.get('/human/:id', getOneHuman);

function getOneHuman(req, res) {
    let id = parseInt(req.params.id);

    let oneHuman = humanInstance.get(id);

    res.status(200).json(oneHuman);
}

// ------------------------------------
router.put('/human/:id', updateHandler);


function updateHandler(req, res) {
    let id = parseInt(req.params.id);
    let updatedData = req.body;

    let update = humanInstance.update(id, updatedData)

    res.status(201).json(update);
}
// ------------------------------------
router.delete('/human/:id', deleteHandler);

function deleteHandler(req, res) {
    let id = parseInt(req.params.id);
    let toDelete = humanInstance.delete(id)

    res.status(202).json(toDelete);
}
// ------------------------------------

module.exports = router;