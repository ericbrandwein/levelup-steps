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

function getClassByName(name){
    for (var characterClass in Classes) {
        // We need to check that the property is of the Classes object
        if (Classes.hasOwnProperty(characterClass) &&
            Classes[characterClass].name === name) {
            return Classes[characterClass];
        }
    }
}

function get(characterClass, characterLevel, callback){

    var locals = clone(characterClass);
    locals['level'] = characterLevel;
    pug.renderFile(
        DESCRIPTIONS_DIR + characterClass.name + '/description.pug',
        locals,
        callback);

    // getBasicDescription(characterClass, (err, data) => {
    //     var description = data;
    //     getDescriptionByClassAndLevel(characterClass, characterLevel,
    //         (err, data) => {
    //             description += data;
    //             callback(err, getDescriptionPage(description));
    //     });
    // });
}

function clone(object){
    return JSON.parse(JSON.stringify(object));
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

function getDescriptionByClassAndLevel(characterClass, characterLevel, callback){
    var descriptionFileName =
        DESCRIPTIONS_DIR + characterClass.name + '/' + characterLevel + '.pug';
    pug.renderFile(descriptionFileName, characterClass, callback);
}

module.exports = {
    Classes,
    get,
    getClassByName
};