const express = require ("express");
const app = express();

app.get("/Charles-Leclerc", (req, res, next) => {
    return res.status(200).sendFile("charles.html", {root: './'});
});

app.get("/Lewis-Hamilton", (req, res, next) => {
    return res.status(200).sendFile("lewis.html", {root: './'});
});

app.get("/Lando-Norris", (req, res, next) => {
    return res.status(200).sendFile("lando.html", {root: './'});
});

app.get("/Max-Verstappen", (req, res, next) => {
    return res.status(200).sendFile("max.html", {root: './'});
});
