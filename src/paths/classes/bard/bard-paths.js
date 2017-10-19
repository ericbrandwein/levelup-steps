var pathClasses = require('../../path-classes.js');

class College extends pathClasses.Path {
    constructor(college) {
        super('College of ' + college);
        this.college = college;
    }
}

function newFeature(path, level, title, descriptionFile) {
    var feature = new pathClasses.Feature(
        title,
        __dirname + '/' + path.college.toLowerCase() + '/' + descriptionFile);
    path.addFeature(level, feature);
}

var lore = new College('Lore');
newFeature(lore, 3, 'Bonus Proficiencies', 'bonus-proficiencies.pug');
newFeature(lore, 3, 'Cutting Words', 'cutting-words.pug');
newFeature(lore, 6,
    'Additional Magical Secrets', 'additional-magical-secrets.pug');
newFeature(lore, 14, 'Peerless Skill', 'peerless-skill.pug');

var valor = new College('Valor');
newFeature(valor, 3, 'Bonus Proficiencies', 'bonus-proficiencies.pug');
newFeature(valor, 3, 'Combat Inspiration', 'combat-inspiration.pug');
newFeature(valor, 6, 'Extra Attack', 'extra-attack.pug');
newFeature(valor, 14, 'Battle Magic', 'battle-magic.pug');

module.exports = {
    lore,
    valor
};

