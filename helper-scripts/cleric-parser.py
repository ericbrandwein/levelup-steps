#!/usr/bin/env python3
import mcdtparser as parser
import os
import re


FILE_TEMPLATE = """extends ../../../path-feature-template.pug

block description
    | """


def parseFeatureDescription(feature):
    description = feature.description.replace('\n', '\n    | ')
    return FILE_TEMPLATE + description + '\n'


def getFeatureFileName(feature):
    return feature.title.replace(' ', '-').lower() + '.pug'


def getNewDomainJavascriptString(domain):
    domain_capitalized = domain.title()
    return "var {}Domain = newDivineDomain('{}');"\
        .format(domain, domain_capitalized)


def getFeatureJavascriptString(domain, feature):
    file_name = getFeatureFileName(feature)
    return "newFeature({domain}Domain, TODO, "\
        "'{title}', '{domain}/{file_name}');"\
        .format(domain=domain, title=feature.title, file_name=file_name)


def getJavascriptString(domain, features):
    string = getNewDomainJavascriptString(domain) + '\n'
    for feature in features:
        string += getFeatureJavascriptString(domain, feature) + '\n'
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


DOMAINS = ['knowledge', 'life', 'light', 'nature', 'tempest',
           'trickery', 'war']


def writeAllFiles():
    for domain in DOMAINS:
        features = parser.getFeaturesForPath(domain + '-domain')
        writeJavascriptFile(getJavascriptString(domain, features))

        directory = domain + '/'
        writeFeatureFiles(directory, features)


def getLevelSpellsFromDescription(level, description):
    if level == 3:
        level_string = '3rd'
    else:
        level_string = str(level) + 'th'

    regex_string = '(?<=' + level_string + r'\n)(.*?)$'
    match = re.search(regex_string, description, re.MULTILINE | re.DOTALL)
    return match.group(0)


DOMAIN_SPELLS_DESCRIPTION_PER_LEVEL_TEMPLATE = """    if level === {level}
        | {spells}.
"""

DOMAIN_SPELLS_FILE_TEMPLATE = """extends ../domain-spells-template.pug

block spells
{}
"""


def getDescriptionForSpells(level, spells):
    return DOMAIN_SPELLS_DESCRIPTION_PER_LEVEL_TEMPLATE.format(
        level=level, spells=spells)


def parseDomainSpellsFeature(feature):
    description = DOMAIN_SPELLS_FILE_TEMPLATE
    spells_description = ''
    levels = [3, 5, 7, 9]
    for level in levels:
        spells = getLevelSpellsFromDescription(level, feature.description)
        spells_description += getDescriptionForSpells(level, spells)
    description = description.format(spells_description)
    return description


def writeDomainSpellFile(domain, content):
    file_name = '{0}/{0}-domain-spells.pug'.format(domain)
    with open(file_name, 'w') as feature_file:
        feature_file.write(content)


def writeDomainSpellsFiles():
    for domain in DOMAINS:
        domain_spells_feature = parser.getFeaturesForPath(domain + '-domain')[0]
        domain_spells_file_content = \
            parseDomainSpellsFeature(domain_spells_feature)
        writeDomainSpellFile(domain, domain_spells_file_content)


writeDomainSpellsFiles()
