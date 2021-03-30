import matplotlib.pyplot as plt
months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
revenue = [52, 74, 79, 95, 115, 110, 129, 126, 147, 146, 156, 184]

#slope:
m = 9
#intercept:
b = 59
y = [month * m + b for month in months]

plt.plot(months, revenue, "o")
plt.plot(months, y, "o")

plt.show()
