const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = 3333;

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    express,
    app,
    PORT,
    jwt,
    dotenv,
    JWT_SECRET
}