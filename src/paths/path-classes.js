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
        if (featuresForLevel) {
            var descriptionsMissing = featuresForLevel.length;
            var descriptions = '';
            for (var i = 0; i < featuresForLevel.length; i++) {
                featuresForLevel[i].renderDescription(this.name, (err, html) => {
                    descriptions += html;
                    descriptionsMissing--;
                    if (err || descriptionsMissing == 0) {
                        callback(err, descriptions);
                    }
                });
            }
        } else {
            callback(undefined, '');
        }
    }
}

module.exports = {Feature, Path};