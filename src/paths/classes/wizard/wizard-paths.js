var pathClasses = require('../../path-classes.js');
var pug = require('pug');

/**
    A Path that comes with the savant feature already added.
*/
class ArcaneTradition extends pathClasses.Path {
    constructor(school) {
        super('School of ' + school);
        this.school = school;
    }

    renderLevelDescriptions(level, callback) {
        this._renderSavantFeatureIfNecessary(level, (err, html) => {
            var description = html;
            super.renderLevelDescriptions(level, (err, html) => {
                callback(err, description + html);
            });
        });
    }

    _renderSavantFeatureIfNecessary(level, callback) {
        if (level === 2) {
            pug.renderFile(
                __dirname + '/savant-feature.pug',
                {school: this.school.toLowerCase(),
                    path: this.name, feature: this.school + ' Savant'},
                callback
            );
        } else {
            callback(undefined, '');
        }
    }
}

function newFeature(path, level, title, descriptionFile) {
    var feature = new pathClasses.Feature(
        title,
        __dirname + '/' + path.school.toLowerCase() + '/' + descriptionFile);
    path.addFeature(level, feature);
}

// All the 'savant' features are already added when created.
var abjuration = new ArcaneTradition('Abjuration');
newFeature(abjuration, 2, 'Arcane Ward', 'arcane-ward.pug');
newFeature(abjuration, 6, 'Projected Ward', 'projected-ward.pug');
newFeature(abjuration, 10, 'Improved Abjuration', 'improved-abjuration.pug');
newFeature(abjuration, 14, 'Spell Resistance', 'spell-resistance.pug');

var conjuration = new ArcaneTradition('Conjuration');
newFeature(conjuration, 2, 'Minor Conjuration', 'minor-conjuration.pug');
newFeature(conjuration, 6, 'Benign Transposition', 'benign-transposition.pug');
newFeature(conjuration, 10, 'Focused Conjuration', 'focused-conjuration.pug');
newFeature(conjuration, 14, 'Durable Summons', 'durable-summons.pug');

var divination = new ArcaneTradition('Divination');
newFeature(divination, 2, 'Portent', 'portent.pug');
newFeature(divination, 6, 'Expert Divination', 'expert-divination.pug');
newFeature(divination, 10, 'The Third Eye', 'the-third-eye.pug');
newFeature(divination, 14, 'Greater Portent', 'greater-portent.pug');

var enchantment = new ArcaneTradition('Enchantment');
newFeature(enchantment, 2, 'Hypnotic Gaze', 'hypnotic-gaze.pug');
newFeature(enchantment, 6, 'Instinctive Charm', 'instinctive-charm.pug');
newFeature(enchantment, 10, 'Split Enchantment', 'split-enchantment.pug');
newFeature(enchantment, 14, 'Alter Memories', 'alter-memories.pug');

var evocation = new ArcaneTradition('Evocation');
newFeature(evocation, 2, 'Sculpt Spells', 'sculpt-spells.pug');
newFeature(evocation, 6, 'Potent Cantrip', 'potent-cantrip.pug');
newFeature(evocation, 10, 'Empowered Evocation', 'empowered-evocation.pug');
newFeature(evocation, 14, 'Overchannel', 'overchannel.pug');

var illusion = new ArcaneTradition('Illusion');
newFeature(illusion, 2, 'Improved Minor Illusion', 'sculpt-spells.pug');
newFeature(illusion, 6, 'Malleable Illusions', 'malleable-illusions.pug');
newFeature(illusion, 10, 'Illusiory Self', 'illusiory-self.pug');
newFeature(illusion, 14, 'Illusiory Reality', 'illusiory-reality.pug');

var necromancy = new ArcaneTradition('Necromancy');
newFeature(necromancy, 2, 'Grim Harvest', 'grim-harvest.pug');
newFeature(necromancy, 6, 'Undead Thralls', 'undead-thralls.pug');
newFeature(necromancy, 10, 'Inured to Undeath', 'inured-to-undeath.pug');
newFeature(necromancy, 14, 'Command Undead', 'command-undead.pug');

var transmutation = new ArcaneTradition('Transmutation');
newFeature(transmutation, 2, 'Minor Alchemy', 'minor-alchemy.pug');
newFeature(transmutation, 6, "Transmuter's Stone", 'transmuters-stone.pug');
newFeature(transmutation, 10, 'Shapechanger', 'shapechanger.pug');
newFeature(transmutation, 14, 'Master Transmuter', 'master-transmuter.pug');

module.exports = {
    abjuration,
    conjuration,
    divination,
    enchantment,
    evocation,
    illusion,
    necromancy,
    transmutation
};
