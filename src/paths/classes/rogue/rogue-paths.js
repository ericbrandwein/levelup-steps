var pathClasses = require('../../path-classes.js');

function newFeature(path, level, title, descriptionFile) {
    var feature = new pathClasses.Feature(title, __dirname + descriptionFile);
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
// Esto se enquilomba porque cada nivel hay diferentes spell slots y cosas.
newFeature(arcaneTrickster, 3,
    'Spellcasting', '/arcane-trickster/spellcasting.pug');
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

