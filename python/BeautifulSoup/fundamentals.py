
# Requests

import requests
from bs4 import BeautifulSoup

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

# Navigating by Tags

# import requests
# from bs4 import BeautifulSoup

webpage_response = requests.get('https://content.codecademy.com/courses/beautifulsoup/shellter.html')

webpage = webpage_response.content
soup = BeautifulSoup(webpage, "html.parser")
