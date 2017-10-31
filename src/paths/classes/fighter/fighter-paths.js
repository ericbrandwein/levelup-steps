var pathClasses = require('../../path-classes.js');

function newFeature(path, level, title, descriptionFile) {
    var feature = new pathClasses.Feature(title, __dirname + descriptionFile);
    path.addFeature(level, feature);
}

var champion = new pathClasses.Path('Champion');
newFeature(champion, 3, 'Improved Critical', '/champion/improved-critical.pug');
newFeature(champion, 7, 'Remarkable Athlete', '/champion/remarkable-athlete.pug');
newFeature(champion, 10,
    'Additional Fighting Style', '/champion/additional-fighting-style.pug');
newFeature(champion, 15, 'Superior Critical', '/champion/superior-critical.pug');
newFeature(champion, 18, 'Survivor', '/champion/survivor.pug');

var battleMaster = new pathClasses.Path('Battle Master');
newFeature(battleMaster, 3,
    'Combat Superiority', '/battlemaster/superior-combat.pug');
newFeature(battleMaster, 3, 'Maneuvers', '/battlemaster/maneuvers.pug');
newFeature(battleMaster, 3,
    'Student of War', '/battlemaster/war-student.pug');
newFeature(battleMaster, 7,
    'Study Your Enemy', '/battlemaster/study-your-enemy.pug');
newFeature(battleMaster, 10,
    'Improved Combat Superiority', '/battlemaster/improved-superior-combat.pug');
newFeature(battleMaster, 15, 'Relentless', '/battlemaster/relentless.pug');
newFeature(battleMaster, 18,
    'Improved Combat Superiority', '/battlemaster/improved-superior-combat.pug');

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

