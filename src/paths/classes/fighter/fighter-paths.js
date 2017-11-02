var pathClasses = require('../../path-classes.js');

function getFeature(title, descriptionFile) {
    return new pathClasses.Feature(title, __dirname + descriptionFile);
}

function newFeature(path, level, title, descriptionFile) {
    var feature = getFeature(title, descriptionFile);
    path.addFeature(level, feature);
}

function addFeatureInLevels(path, feature, levels) {
    for (var i = 0; i < levels.length; i++) {
        path.addFeature(levels[i], feature);
    }
}

var champion = new pathClasses.Path('Champion');
newFeature(champion, 3, 'Improved Critical', '/champion/improved-critical.pug');
newFeature(champion, 7, 'Remarkable Athlete', '/champion/remarkable-athlete.pug');
newFeature(champion, 10,
    'Additional Fighting Style', '/champion/additional-fighting-style.pug');
newFeature(champion, 15, 'Superior Critical', '/champion/superior-critical.pug');
newFeature(champion, 18, 'Survivor', '/champion/survivor.pug');

var battleMaster = new pathClasses.Path('Battle Master');
var combatSuperiority =
    getFeature('Combat Superiority', '/battlemaster/combat-superiority.pug');
var combatSuperiorityLevels = [3, 7, 10, 15];
addFeatureInLevels(battleMaster, combatSuperiority, combatSuperiorityLevels);
newFeature(battleMaster, 3, 'Maneuvers', '/battlemaster/maneuvers.pug');
newFeature(battleMaster, 3,
    'Student of War', '/battlemaster/war-student.pug');
newFeature(battleMaster, 7,
    'Know Your Enemy', '/battlemaster/know-your-enemy.pug');
var improvedCombatSuperiority =
    getFeature('Improved Combat Superiority',
        '/battlemaster/improved-combat-superiority.pug');
var improvedCombatSuperiorityLevels = [10, 18];
addFeatureInLevels(battleMaster, improvedCombatSuperiority,
    improvedCombatSuperiorityLevels);
newFeature(battleMaster, 15, 'Relentless', '/battlemaster/relentless.pug');

var eldritchKnight = new pathClasses.Path('Eldritch Knight');
newFeature(eldritchKnight, 3,
    'Spellcasting', '/eldritchknight/spellcasting.pug');
newFeature(eldritchKnight, 3, 'Weapon Bond', '/eldritchknight/weapon-bond.pug');
newFeature(eldritchKnight, 7,
    'War Magic', '/eldritchknight/war-magic.pug');
newFeature(eldritchKnight, 10,
    'Eldritch Strike', '/eldritchknight/eldritch-strike.pug');
newFeature(eldritchKnight, 15,
    'Arcane Charge', '/eldritchknight/arcane-charge.pug');
newFeature(eldritchKnight, 18,
    'Improved War Magic', '/eldritchknight/improved-war-magic.pug');

module.exports = {
    champion,
    battleMaster,
    eldritchKnight
};

