#!/usr/bin/env python

import re

baseString = """extends ../../../path-feature-template.pug

block description
    | """

def parseText():
    with open('text.txt', 'r') as f:
        string = f.read()
        titles = re.findall(r'^.*(?=\sEdit)', string, re.MULTILINE)
        texts = re.findall(r'(?<=Edit\n).*$', string, re.MULTILINE)
        for i, title in enumerate(titles):
            fileName = title.lower().replace(' ', '-')
            with open(fileName + '.pug', 'w') as featureFile:
                featureFile.write(baseString)
                featureFile.write(texts[i])

parseText()