var express = require('express');
var router = express.Router();
const fs = require("fs");
let Schemas = require('../data/schemas.js');

/* GET model data */
// router.use(myParser.urlencoded({extended : true}));
router.get('/', (req, res, next) => {

    // input variable
    let input = req.query.savedata;

    let jsonModel = new Object()

    let Nodes = Schemas.Nodes;
    let Links = Schemas.Links;

    Nodes.find().lean().exec(function (err, nodes) {
        jsonModel.nodesDataArray = nodes; //JSON.stringify(nodes)
        Links.find().lean().exec(function (err, links) {
            jsonModel.linksDataArray = links; //JSON.stringify(links)
            // jsonModel.oldLinks = JSON.parse(rawlinks);
            return res.json(jsonModel);
        });
    });


});

module.exports = router;