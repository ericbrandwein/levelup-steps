var pathClasses = require('../../path-classes.js');
var utils = require('../../path-classes-utils.js');

function getFeature(title, descriptionFile) {
    return new pathClasses.Feature(title, __dirname + '/' + descriptionFile);
}

function newDivineDomain(name) {
    var path = new pathClasses.Path(name + ' Domain');
    var lowerCaseName = name.toLowerCase();
    var domainSpells = getFeature(
        name + ' Domain Spells',
        lowerCaseName + '/' + lowerCaseName + '-domain-spells.pug');
    var domainSpellLevels = [1, 3, 5, 7, 9];
    utils.addFeatureInLevels(path, domainSpells, domainSpellLevels);
    return path;
}

function newFeature(path, level, title, descriptionFile) {
    var feature = getFeature(title, descriptionFile);
    path.addFeature(level, feature);
}

var knowledge = newDivineDomain('Knowledge');
newFeature(knowledge, 1,
    'Blessings of Knowledge', 'knowledge/blessings-of-knowledge.pug');
newFeature(knowledge, 2,
    'Channel Divinity: Knowledge of the Ages',
    'knowledge/channel-divinity:-knowledge-of-the-ages.pug');
newFeature(knowledge, 6, 'Channel Divinity: Read Thoughts',
    'knowledge/channel-divinity:-read-thoughts.pug');
newFeature(knowledge, 8, 'Potent Spellcasting',
    'knowledge/potent-spellcasting.pug');
newFeature(knowledge, 17, 'Visions of the Past',
    'knowledge/visions-of-the-past.pug');

var life = newDivineDomain('Life');
newFeature(life, 1,
    'Bonus Proficiency', 'life/bonus-proficiency.pug');
newFeature(life, 1, 'Disciple of Life', 'life/disciple-of-life.pug');
newFeature(life, 2, 'Channel Divinity: Preserve Life',
    'life/channel-divinity:-preserve-life.pug');
newFeature(life, 6, 'Blessed Healer',
    'life/blessed-healer.pug');
newFeature(life, 8, 'Divine Strike',
    'life/divine-strike.pug');
newFeature(life, 17, 'Supreme Healing',
    'life/supreme-healing.pug');

var light = newDivineDomain('Light');
newFeature(light, 1,
    'Bonus Cantrip', 'light/bonus-cantrip.pug');
newFeature(light, 1, 'Warding Flare', 'light/warding-flare.pug');
newFeature(light, 2, 'Channel Divinity: Radiance of the Dawn',
    'light/channel-divinity:-radiance-of-the-dawn.pug');
newFeature(light, 6, 'Improved Flare',
    'light/improved-flare.pug');
newFeature(light, 8, 'Potent Spellcasting',
    'light/potent-spellcasting.pug');
newFeature(light, 17, 'Corona of Light',
    'light/corona-of-light.pug');

var nature = newDivineDomain('Nature');
newFeature(nature, 1,
    'Acolyte of Nature', 'nature/acolyte-of-nature.pug');
newFeature(nature, 1,
    'Bonus Proficiency', 'nature/bonus-proficiency.pug');
newFeature(nature, 2,
    'Channel Divinity: Charm Animals and Plants',
    'nature/channel-divinity:-charm-animals-and-plants.pug');
newFeature(nature, 6,
    'Dampen Elements', 'nature/dampen-elements.pug');
newFeature(nature, 8,
    'Divine Strike', 'nature/divine-strike.pug');
newFeature(nature, 17,
    'Master of Nature', 'nature/master-of-nature.pug');

var tempest = newDivineDomain('Tempest');
newFeature(tempest, 1,
    'Bonus Proficiencies', 'tempest/bonus-proficiencies.pug');
newFeature(tempest, 1,
    'Wrath of the Storm', 'tempest/wrath-of-the-storm.pug');
newFeature(tempest, 2,
    'Channel Divinity: Destructive Wrath',
    'tempest/channel-divinity:-destructive-wrath.pug');
newFeature(tempest, 6,
    'Thunderbolt Strike', 'tempest/thunderbolt-strike.pug');
newFeature(tempest, 8,
    'Divine Strike', 'tempest/divine-strike.pug');
newFeature(tempest, 17,
    'Stormborn', 'tempest/stormborn.pug');

var trickery = newDivineDomain('Trickery');
newFeature(trickery, 1,
    'Blessing of the Trickster', 'trickery/blessing-of-the-trickster.pug');
newFeature(trickery, 2,
    'Channel Divinity: Invoke Duplicity',
    'trickery/channel-divinity:-invoke-duplicity.pug');
newFeature(trickery, 6,
    'Channel Divinity: Cloak of Shadows',
    'trickery/channel-divinity:-cloak-of-shadows.pug');
newFeature(trickery, 8,
    'Divine Strike', 'trickery/divine-strike.pug');
newFeature(trickery, 17,
    'Improved Duplicity', 'trickery/improved-duplicity.pug');

var war = newDivineDomain('War');
newFeature(war, 1,
    'Bonus Proficiencies', 'war/bonus-proficiencies.pug');
newFeature(war, 1,
    'War Priest', 'war/war-priest.pug');
newFeature(war, 2,
    'Channel Divinity: Guided Strike',
    'war/channel-divinity:-guided-strike.pug');
newFeature(war, 6,
    "Channel Divinity: War God's Blessing",
    "war/channel-divinity:-war-god's-blessing.pug");
newFeature(war, 8,
    'Divine Strike', 'war/divine-strike.pug');
newFeature(war, 17,
    'Avatar of Battle', 'war/avatar-of-battle.pug');

module.exports = {
    knowledge,
    life,
    light,
    nature,
    tempest,
    trickery,
    war
};
