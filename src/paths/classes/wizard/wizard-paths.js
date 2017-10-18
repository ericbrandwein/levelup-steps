var pathClasses = require('../../path-classes.js');

var abjuration = new pathClasses.Path('School of Abjuration');
var projectedWard = new pathClasses.Feature('Projected Ward', __dirname + '/projected-ward.pug');
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