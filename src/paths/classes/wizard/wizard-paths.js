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
        title, __dirname + '/' + descriptionFile);
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

module.exports = {
    abjuration,
    conjuration
};

// conjuration: {name: 'School of Conjuration'},
// divination: {name: 'School of Divination'},
// enchantment: {name: 'School of Enchantment'},
// evocation: {name: 'School of Evocation'},
// illusion: {name: 'School of Illusion'},
// necromancy: {name: 'School of Necromancy'},
// transmutation: {name: 'School of Transmutation'}