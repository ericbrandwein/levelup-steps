var pathClasses = require('../../path-classes.js');
var utils = require('../../path-classes-utils.js');

function getFeature(title, descriptionFile) {
    return new pathClasses.Feature(title, __dirname + descriptionFile);
}

function newFeature(path, level, title, descriptionFile) {
    var feature = getFeature(title, descriptionFile);
    path.addFeature(level, feature);
}

var thief = new pathClasses.Path('Thief');
newFeature(thief, 3, 'Fast Hands', '/thief/fast-hands.pug');
newFeature(thief, 3, 'Second-Story Work', '/thief/second-story-work.pug');
newFeature(thief, 9, 'Supreme Sneak', '/thief/supreme-sneak.pug');
newFeature(thief, 13, 'Use Magic Device', '/thief/use-magic-device.pug');
newFeature(thief, 17, "Thief's Reflexes", '/thief/thiefs-reflexes.pug');

var assassin = new pathClasses.Path('Assassin');
newFeature(assassin, 3,
    'Bonus Proficiencies', '/assassin/bonus-proficiencies.pug');
newFeature(assassin, 3, 'Assassinate', '/assassin/assassinate.pug');
newFeature(assassin, 9,
    'Infiltration Expertise', '/assassin/infiltration-expertise.pug');
newFeature(assassin, 13, 'Impostor', '/assassin/impostor.pug');
newFeature(assassin, 17, "Death Strike", '/assassin/death-strike.pug');

var arcaneTrickster = new pathClasses.Path('Arcane Trickster');
var spellcasting = getFeature('Spellcasting', '/arcane-trickster/spellcasting.pug');
var spellcastingLevels =
    [3, 4, 7, 8, 10, 11, 13, 14, 16, 19, 20];
utils.addFeatureInLevels(arcaneTrickster, spellcasting, spellcastingLevels);
newFeature(arcaneTrickster, 3,
    'Mage Hand Legerdemain', '/arcane-trickster/mage-hand-legerdemain.pug');
newFeature(arcaneTrickster, 9,
    'Magical Ambush', '/arcane-trickster/magical-ambush.pug');
newFeature(arcaneTrickster, 13,
    'Versatile Trickster', '/arcane-trickster/versatile-trickster.pug');
newFeature(arcaneTrickster, 17,
    'Spell Thief', '/arcane-trickster/spell-thief.pug');

module.exports = {
    thief,
    assassin,
    arcaneTrickster
};

