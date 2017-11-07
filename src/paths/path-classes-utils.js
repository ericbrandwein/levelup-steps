function addFeatureInLevels(path, feature, levels) {
    for (var i = 0; i < levels.length; i++) {
        path.addFeature(levels[i], feature);
    }
}

module.exports = {addFeatureInLevels};