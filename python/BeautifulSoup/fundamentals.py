
# Requests

import requests
from bs4 import BeautifulSoup
import pandas as pd

webpage_response = requests.get("https://content.codecademy.com/courses/beautifulsoup/shellter.html")

webpage = webpage_response.content

print(webpage)

# BS4 Object

# import requests


webpage_response = requests.get('https://content.codecademy.com/courses/beautifulsoup/shellter.html')

webpage = webpage_response.content

soup = BeautifulSoup(webpage, "html.parser")

print(soup)

# Object types

# import requests
# from bs4 import BeautifulSoup

webpage_response = requests.get('https://content.codecademy.com/courses/beautifulsoup/shellter.html')

webpage = webpage_response.content

soup = BeautifulSoup(webpage, "html.parser")

print(soup)
print(soup.div.name)
print(soup.div.attrs)

# Navigating by Tags

# import requests
# from bs4 import BeautifulSoup

webpage_response = requests.get('https://content.codecademy.com/courses/beautifulsoup/shellter.html')

webpage = webpage_response.content
soup = BeautifulSoup(webpage, "html.parser")
print(soup.div)
print("---")
for child in soup.div.children:
    print(child)

# Select for CSS Selectors

prefix = "https://content.codecademy.com/courses/beautifulsoup/"
webpage_response = requests.get('https://content.codecademy.com/courses/beautifulsoup/shellter.html')

webpage = webpage_response.content
soup = BeautifulSoup(webpage, "html.parser")

turtle_links = soup.find_all("a")
links = []
# go through all of the a tags and get the links associated with them:
for a in turtle_links:
    links.append(prefix + a["href"])

# Define turtle_data:
turtle_data = {}

# follow each link:
for link in links:
    webpage = requests.get(link)
    turtle = BeautifulSoup(webpage.content, "html.parser")
    # Add your code here:
    turtle_name = turtle.select('.name')[0]
    print(turtle_name)
    turtle_data[turtle_name] = []
print(turtle_data)

# Reading Text

prefix = "https://content.codecademy.com/courses/beautifulsoup/"
webpage_response = requests.get('https://content.codecademy.com/courses/beautifulsoup/shellter.html')

webpage = webpage_response.content
soup = BeautifulSoup(webpage, "html.parser")

turtle_links = soup.find_all("a")
links = []
# go through all of the a tags and get the links associated with them:
for a in turtle_links:
    links.append(prefix + a["href"])

# Define turtle_data:
turtle_data = {}

# follow each link:
for link in links:
    webpage = requests.get(link)
    turtle = BeautifulSoup(webpage.content, "html.parser")
    turtle_name = turtle.select(".name")[0].get_text()
    turtle_data[turtle_name] = turtle.select('ul')[0].get_text('|')
print(turtle_data)

# Creating a DataFrame out of turtle_data dictionary

# turtle_df = pd.DataFrame(turtle_data)
turtle_df = pd.DataFrame.from_dict(turtle_data, orient='index')
print(turtle_df)
