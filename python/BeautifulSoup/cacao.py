import codecademylib3_seaborn
from bs4 import BeautifulSoup
import requests
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

webpage_response = requests.get("https://content.codecademy.com/courses/beautifulsoup/cacao/index.html")
webpage = webpage_response.content
soup = BeautifulSoup(webpage, 'html.parser')

ratings = soup.find_all(attrs={'class': 'Rating'})
# print(ratings)

ratings_list = []
ratings_nums = []

for rating in ratings:
    rating = rating.get_text()
    ratings_list.append(rating)

ratings_list = ratings_list[1:]
for rating in ratings_list:
    ratings_nums.append(float(rating))
# ratings_list = list(map(int, ratings_list))
# ratings_list = [int(i) for i in ratings_list]
# ratings_list = [int(rating) for rating in ratings_list]
# print(ratings_nums)

plt.hist(ratings_nums)
plt.show()

company_names = soup.select('.Company')
# print(company_names)
companies = []
for name in company_names[1:]:
    companies.append(name.get_text())
# print(companies)

cols = {"Company": companies, "Ratings": ratings_nums}
df = pd.DataFrame.from_dict(cols)

avg_ratings = df.groupby('Company')['Ratings'].mean()
top_ten = avg_ratings.nlargest(10)
print(top_ten)
