const pathsPerClass = {
    barbarian: {
        berserker: {name: 'Path of the Berserker', value: ''},
        totemWarrior: {name: 'Path of the Totem Warrior', value: ''}
    },
    bard: require('./classes/bard/bard-paths.js'),
    cleric: {
        title: 'Divine Domain',
        fromLevel: 1,
        options: [
            {name: 'Knowledge Domain', value: 'knowledge'},
            {name: 'Life Domain', value: 'life'},
            {name: 'Light Domain', value: 'light'},
            {name: 'Nature Domain', value: 'nature'},
            {name: 'Tempest Domain', value: 'tempest'},
            {name: 'Trickery Domain', value: 'trickery'},
            {name: 'War Domain', value: 'war'}
        ]
    },
    fighter: {
        title: 'Martial Archetype',
        fromLevel: 3,
        options: [
            {name: 'Champion', value: 'champion'},
            {name: 'Battle Master', value: 'battle-master'},
            {name: 'Eldritch Knight', value: 'eldritch-knight'}
        ]
    },
    rogue: {
        title: 'Roguish Archetype',
        fromLevel: 3,
        options: [
            {name: 'Thief', value: 'thief'},
            {name: 'Assassin', value: 'assassin'},
            {name: 'Arcane Trickster', value: 'arcane-trickster'}
        ]
    },
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