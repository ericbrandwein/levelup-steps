var pathClasses = require('../../path-classes.js');

function newFeature(path, level, title, descriptionFile) {
    var feature = new pathClasses.Feature(title, __dirname + descriptionFile);
    path.addFeature(level, feature);
}

var berserker = new pathClasses.Path('Path of the Berserker');
newFeature(berserker, 3, 'Frenzy', '/berserker/frenzy.pug');
newFeature(berserker, 6, 'Mindless Rage', '/berserker/mindless-rage.pug');
newFeature(berserker, 10,
    'Intimidating Presence', '/berserker/intimidating-presence.pug');
newFeature(berserker, 14, 'Retaliation', '/berserker/retaliation.pug');

var totemWarrior = new pathClasses.Path('Path of the Totem Warrior');
newFeature(totemWarrior, 3, 'Spirit Seeker', '/totem-warrior/spirit-seeker.pug');
newFeature(totemWarrior, 3, 'Totem Spirit', '/totem-warrior/totem-spirit.pug');
newFeature(totemWarrior, 6,
    'Aspect of the Beast', '/totem-warrior/aspect-of-the-beast.pug');
newFeature(totemWarrior, 10, 'Spirit Walker', '/totem-warrior/spirit-walker.pug');
newFeature(totemWarrior, 14,
    'Totemic Attunement', '/totem-warrior/totemic-attunement.pug');

module.exports = {
    berserker,
    totemWarrior
};

