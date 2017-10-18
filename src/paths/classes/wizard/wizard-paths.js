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

var abjuration = new ArcaneTradition('Abjuration');
var projectedWard =
    new pathClasses.Feature('Projected Ward', __dirname + '/projected-ward.pug');
abjuration.addFeature(6, projectedWard);

module.exports = {
    abjuration
};


// conjuration: {name: 'School of Conjuration'},
// divination: {name: 'School of Divination'},
// enchantment: {name: 'School of Enchantment'},
// evocation: {name: 'School of Evocation'},
// illusion: {name: 'School of Illusion'},
// necromancy: {name: 'School of Necromancy'},
// transmutation: {name: 'School of Transmutation'}