const bardicInspirationDice = {'5': 8, '10': 10, '15': 12};

var bardicInspiration = {
    title: 'Bardic Inspiration',
    description: (level) => {
        return 'Your Bardic Inspiration die changes to a d' +
            bardicInspirationDice[level] + '.';
    },
    isForLevel: (level) => {
        return level in bardicInspirationDice;
    }
};

var features = [bardicInspiration];

var clazz = {
    name: 'bard',
    hitDieNumber: 8,
    hitPointIncreaseAverage: 5,
    features
};

module.exports = clazz;
