const pathsPerClass = {
    barbarian: {
        title: 'Primal Path',
        fromLevel: 3,
        options: [
            {name: 'Path of the Berserker', value: 'berserker'},
            {name: 'Path of the Totem Warrior', value: 'totem-warrior'}
        ]
    },
    bard: {
        title: 'Bard College',
        fromLevel: 3,
        options: [
            {name: 'College of Lore', value: 'lore'},
            {name: 'College of Valor', value: 'valor'}
        ]
    },
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

function getNewFeature(clazz, path, level, callback) {
    return pathsPerClass[clazz][path].renderLevelDescriptions(level, callback);
}

module.exports = {getNewFeature};