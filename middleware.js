const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const LINE_ENDING = require('os').EOL;
module.exports = function (req, res, next) {
    var apiKEY = req.header('x-api-key');
    if(apiKEY===undefined){
        return res.status(401).json({});
    } else {
        let cF= fs.readFileSync(VALID_KEYS_PATH,{encoding:'utf8', flag:'r'});
        cF = cF.split(LINE_ENDING).filter(v=>v!='');
        if(!cF.find(function(v){ return v==apiKEY; })) return res.status(401).json({});
    }
    next();
};
