'use strict';

const express = require('express');
const router = express.Router();

const Alien = require('../models/alien.js');

let instanceAlien = new Alien();

// ---------------------------------------------------------

router.post('/alien', handleCreate);

function handleCreate(req, res) {
    let obj = req.body;

    let createdAlien = instanceAlien.create(obj)
    res.status(200).json(createdAlien);
}

// ---------------------------------------------------------

router.get('/alien/:id', handleGetOneAlien);


function handleGetOneAlien(req, res) {
    let id = parseInt(req.params.id);

    let read = instanceAlien.get(id);
    res.status(200).json(read);
}

// ---------------------------------------------------------

router.get('/alien', handleGetAll);

function handleGetAll(req, res) {
    let readAll = instanceAlien.get();
    res.status(200).json(readAll);
}

// ---------------------------------------------------------


router.put('/alien/:id', handleUpdate);

function handleUpdate(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;

    let updated = instanceAlien.update(id, obj);

    res.status(201).json(updated);
}

// ---------------------------------------------------------

router.delete('/alien/:id', handleDelete);

function handleDelete(req, res) {
    let id = parseInt(req.params.id);

    let toDelete = instanceAlien.delete(id);

    res.status(202).json(toDelete);
}
// ---------------------------------------------------------


module.exports = router;