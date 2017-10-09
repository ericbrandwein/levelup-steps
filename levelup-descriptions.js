var fs = require('fs');

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
    WIZARD: {
        name: 'wizard',
        hitDieNumber: 6,
        hitPointIncreaseAverage: 4
    }
}


function get(characterClass, characterLevel, callback){
    var description;
    getHitDiceIncreaseDescription(characterClass, (err, data) => {
        description = data + '\n';
        getHitPointsIncreaseDescription(characterClass, (err, data) => {
            description += data + '\n';
            callback(err, getDescriptionPage(description));
        });
    });
}

function getHitDiceIncreaseDescription(characterClass, callback){
    fs.readFile(DESCRIPTIONS_DIR + 'hit-dice-increase.html', (err, data) => {
        var newData = String(data).replace("%die%", characterClass.hitDieNumber);
        callback(err, newData);
    });
}

function getHitPointsIncreaseDescription(characterClass, callback){
    fs.readFile(DESCRIPTIONS_DIR + 'hit-points-increase.html', (err, data) => {
        var newData = String(data).replace('%die%', characterClass.hitDieNumber);
        newData = newData.replace('%average%',
            characterClass.hitPointIncreaseAverage);
        newData = newData.replace('%class%', characterClass.name);
        callback(err, newData);
    });
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