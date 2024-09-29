const express = require('express');

function expressConfig(app) {

    app.use(express.static('public'));
}

module.exports = expressConfig;
