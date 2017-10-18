$(document).ready(function() {
    $('#class').select2();
    showAdditionalInfoInputIfNecessary();

    $('#class').change(showAdditionalInfoInputIfNecessary);
    $('#level').change(showAdditionalInfoInputIfNecessary);
});

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