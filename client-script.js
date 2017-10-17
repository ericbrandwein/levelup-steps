$(document).ready(function() {
    $('#class').select2();
    showAdditionalInfoInputIfNecessary();

    $('#class').change(showAdditionalInfoInputIfNecessary);
    $('#level').change(showAdditionalInfoInputIfNecessary);
});

const classesWithAdditionalInfo = {
    barbarian: {
        title: 'Primal Path',
        fromLevel: 4,
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
            {name: 'Knowledge', value: 'knowledge'},
            {name: 'Life', value: 'life'},
            {name: 'Light', value: 'light'},
            {name: 'Nature', value: 'nature'},
            {name: 'Tempest', value: 'tempest'},
            {name: 'Trickery', value: 'trickery'},
            {name: 'War', value: 'war'}
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
    wizard: {
        title: 'Arcane Tradition',
        fromLevel: 2,
        options: [
            {name: 'Abjuration', value: 'abjuration'},
            {name: 'Conjuration', value: 'conjuration'},
            {name: 'Divination', value: 'divination'},
            {name: 'Enchantment', value: 'enchantment'},
            {name: 'Evocation', value: 'evocation'},
            {name: 'Illusion', value: 'illusion'},
            {name: 'Necromancy', value: 'necromancy'},
            {name: 'Transmutation', value: 'transmutation'}
        ]
    }
};

function showAdditionalInfoInputIfNecessary() {
    var selectedClass = $('#class').find(':selected').val();
    var selectedLevel = parseInt($('#level').val());
    var additionalInfoLabel = $('#additional-info-label');
    var additionalInfoInput = $('#additional-info');
    var additionalInfoShown = false;

    for (var className in classesWithAdditionalInfo) {
        var classAttributes = classesWithAdditionalInfo[className];
        if (selectedClass === className &&
            selectedLevel > classAttributes.fromLevel) {

            additionalInfoLabel.html(classAttributes.title + ':');
            additionalInfoLabel.show();

            additionalInfoInput.html('');
            for (var i = 0; i < classAttributes.options.length; i++) {
                var currentOption = classAttributes.options[i];
                var option = '<option value="' + currentOption.value + '"';
                if (selectedAdditionalInfoOption == currentOption.value) {
                    option += 'selected';
                }
                option += '>' + currentOption.name + '</option>';
                additionalInfoInput.append(option);
            }
            additionalInfoInput.prop('disabled', false);
            additionalInfoInput.show();
            additionalInfoShown = true;
        }
    }

    if (!additionalInfoShown) {
        additionalInfoLabel.hide();
        additionalInfoInput.hide();
        additionalInfoInput.prop('disabled', true);
    }
}