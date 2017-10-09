var fs = require('fs');
var pug = require('pug');

var DESCRIPTIONS_DIR = './descriptions/'

Classes = {
    BARBARIAN: {
        name: 'barbarian',
        hitDieNumber: 12,
        hitPointIncreaseAverage: 7
    },
    BARD: {
        name: 'bard',
        hitDieNumber: 8,
        hitPointIncreaseAverage: 5
    },
    ROGUE: {
        name: 'rogue',
        hitDieNumber: 8,
        hitPointIncreaseAverage: 5
    },
    WIZARD: {
        name: 'wizard',
        hitDieNumber: 6,
        hitPointIncreaseAverage: 4
    }
}

function get(characterClass, characterLevel, callback){
    var description;
    getBasicDescription(characterClass, (err, data) => {
        callback(err, getDescriptionPage(data));
    });
}

function getBasicDescription(characterClass, callback){
    pug.renderFile(
        DESCRIPTIONS_DIR + 'basic-steps.pug',
        characterClass,
        callback);
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