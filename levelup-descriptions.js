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
    CLERIC: {
        name: 'cleric',
        hitDieNumber: 8,
        hitPointIncreaseAverage: 5
    },
    FIGHTER: {
        name: 'fighter',
        hitDieNumber: 10,
        hitPointIncreaseAverage: 6
    },
    ROGUE: {
        name: 'rogue',
        hitDieNumber: 8,
        hitPointIncreaseAverage: 5
    },
    WIZARD: {
        name: 'wizard',
        hitDieNumber: 6,
        hitPointIncreaseAverage: 4,
        spellSlotsPerLevel: {
            '2': {1: 3}, '3': {1: 4, 2: 2}, '4': {2: 3}, '5': {3: 2},
            '6': {3: 3}, '7': {4: 1}, '8': {4: 2}, '9': {4: 3, 5: 1},
            '10': {5: 2}, '11': {6: 1}, '13': {7: 1}, '15': {8: 1},
            '17': {9: 1}, '18': {5: 3}, '19': {6: 2},'20': {7: 2}
        }
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

function getClassNames(){
    var names = [];
    for (var c in Classes) {
        if (Classes.hasOwnProperty(c)) {
            names.push(Classes[c].name);
        }
    }
    return names;
}

function get(characterClass, characterLevel, callback){
    var locals = clone(characterClass);
    locals['level'] = characterLevel;
    locals['classes'] = getClassNames();
    pug.renderFile(
        DESCRIPTIONS_DIR + characterClass.name + '/description.pug',
        locals,
        callback);
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

module.exports = {
    Classes,
    get,
    getClassByName
};