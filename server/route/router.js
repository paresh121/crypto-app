const express = require('express');
const controller = require('../controller/controller');
const router = express.Router();


router
    .route('/')
    .get(controller.getAllData)
    .post(controller.createData)
    .delete(controller.deleteData);

module.exports = router;