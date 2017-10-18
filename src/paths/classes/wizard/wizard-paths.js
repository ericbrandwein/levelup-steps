var pug = require('pug');

class Feature {
    constructor(name, descriptionFile) {
        this.name = name;
        this.descriptionFile = descriptionFile;
    }

    renderDescription(pathName, callback) {
        pug.renderFile(this.descriptionFile,
            {path: pathName, feature: this.name},
            callback);
    }
}

class Path {
    constructor(name) {
        this.name = name;
        this.features = {};
    }

    addFeature(level, feature) {
        if (!this.features[level]) {
            this.features[level] = [];
        }
        this.features[level].push(feature);
    }

    renderLevelDescriptions(level, callback) {
        var featuresForLevel = this.features[level];
        var descriptionsMissing = featuresForLevel.length;
        var descriptions = '';
        console.log(featuresForLevel);
        for (var i = 0; i < featuresForLevel.length; i++) {
            featuresForLevel[i].renderDescription(this.name, (err, html) => {
                descriptions += html;
                descriptionsMissing--;
                if (err || descriptionsMissing == 0) {
                    callback(err, descriptions);
                }
            });
        }
    }
}

var abjuration = new Path('School of Abjuration');
var projectedWard = new Feature('Projected Ward', __dirname + '/projected-ward.pug');
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