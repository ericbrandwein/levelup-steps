var fs = require('fs');

var DESCRIPTIONS_DIR = './descriptions'

Classes = {
    BARBARIAN: 'barbarian',
    BARD: 'bard',
    WIZARD: 'wizard'
}


function get(characterClass, characterLevel, callback) {
    getHitDiceIncreaseDescription((err, data) => {
        callback(err, getDescriptionPage(data));
    });
}

function getHitDiceIncreaseDescription(callback){
    fs.readFile(DESCRIPTIONS_DIR + '/hit-dice-increase.html', callback);
}

function getDescriptionPage(description){
    var head = "<!DOCTYPE html><html><head></head><body>";
    var tail = "</body></html>";
    return head + description + tail;
}

module.exports = {
    Classes,
    get
};