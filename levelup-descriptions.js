Classes = {
    BARBARIAN: 'barbarian',
    BARD: 'bard'
}

function get(characterClass, characterLevel) {
    return "" + characterClass + characterLevel;
}

module.exports = {
    Classes,
    get
};