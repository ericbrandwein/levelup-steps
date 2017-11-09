import urllib.request
from bs4 import BeautifulSoup


class Feature:
    def __init__(self, title, description):
        self.title = title
        self.description = description

    def __repr__(self):
        return self.title + '\n' + self.description


def getFinalString(tag):
    string = ''
    if tag.string:
        string = tag.string
    else:
        for content in tag.contents:
            string += getFinalString(content)
    return string


def getFeaturesForPath(path):
    html = urllib.request\
        .urlopen("http://mcdt25e.wikidot.com/subclass:" + path)\
        .read()
    soup = BeautifulSoup(html, 'html.parser')
    titles = soup.find_all('h2')
    features = []
    for title in titles:
        title_string = title.contents[0].string
        description = title.next_sibling.next_sibling
        description_string = getFinalString(description)
        features.append(Feature(title_string, description_string))
    return features
