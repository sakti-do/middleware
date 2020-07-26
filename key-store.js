const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const { v4: uuidv4 } = require("uuid");
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {
    let uniqueID = uuidv4();
    fs.appendFileSync(VALID_KEYS_PATH, uniqueID+LINE_ENDING);
    return res.status(201).json({'apiKey':uniqueID});
};
