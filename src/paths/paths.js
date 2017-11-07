const pathsPerClass = {
    barbarian: require('./classes/barbarian/barbarian-paths.js'),
    bard: require('./classes/bard/bard-paths.js'),
    fighter: require('./classes/fighter/fighter-paths.js'),
    rogue: require('./classes/rogue/rogue-paths.js'),
    wizard: require('./classes/wizard/wizard-paths.js')
};

function getNewFeatures(clazz, path, level, callback) {
    var paths = pathsPerClass[clazz];
    if (paths) {
        paths[path].renderLevelDescriptions(level, callback);
    } else {
        callback(undefined, '');
    }
}

function getPathsForClass(clazz) {
    return Object.keys(pathsPerClass[clazz]);
}

module.exports = {
    getNewFeatures,
    getPathsForClass
};