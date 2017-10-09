var fs = require('fs');

var DESCRIPTIONS_DIR = './descriptions/'

Classes = {
    BARBARIAN: {
        name: 'barbarian',
        hitDie: 'd12',
        hitPointIncreaseAverage: 7
    },
    BARD: {
        name: 'bard',
        hitDie: 'd8',
        hitPointIncreaseAverage: 5
    },
    WIZARD: {
        name: 'wizard',
        hitDie: 'd6',
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
        var newData = String(data).replace("%die%", characterClass.hitDie);
        callback(err, newData);
    });
}

function getHitPointsIncreaseDescription(characterClass, callback){
    fs.readFile(DESCRIPTIONS_DIR + 'hit-points-increase.html', (err, data) => {
        var newData = String(data).replace('%die%', characterClass.hitDie);
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