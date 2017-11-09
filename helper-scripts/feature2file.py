import os


FILE_TEMPLATE = """extends ../../../path-feature-template.pug

block description
    | """


def parseFeatureDescription(feature):
    description = feature.description.replace('\n', '\n    | ')
    return FILE_TEMPLATE + description + '\n'


def getFeatureFileName(feature):
    return feature.title.replace(' ', '-').lower() + '.pug'


def toCamelCase(string):
    words = string.split(' ')
    title_words = [word.title for word in words[1:]]
    final_string = words[0].lower()
    for title_word in title_words
        final_string += title_word
    return final_string


def getNewPathJavascriptString(path):
    camel_case_path = toCamelCase(path)
    path_capitalized = path.title()
    return "var {} = new pathClasses.Path('{}');"\
        .format(camel_case_path, path_capitalized)


def getFeatureJavascriptString(path, directory, feature):
    camel_case_path = path.toCamelCase()
    file_name = getFeatureFileName(feature)
    return "newFeature({path}, TODO, "\
        "'{title}', '{dir}/{file_name}');"\
        .format(path=camel_case_path, title=feature.title, dir=directory,\
        file_name=file_name)


def getJavascriptString(path, features):
    string = getNewPathJavascriptString(path) + '\n'
    for feature in features:
        string += getFeatureJavascriptString(path, feature) + '\n'
    return string


def writeJavascriptFile(javascript):
    with open('javascript-template.js', 'a') as javascript_file:
        javascript_file.write(javascript)
    print('Written javascript-template.js')


def writeFeatureFile(directory, feature):
    feature_file_name = directory + getFeatureFileName(feature)
    with open(feature_file_name, 'w') as feature_file:
        feature_file.write(parseFeatureDescription(feature))
    print("Written " + feature_file_name)


def writeFeatureFiles(directory, features):
    if not os.path.exists(directory):
            os.makedirs(directory)
    for feature in features:
        writeFeatureFile(directory, feature)
