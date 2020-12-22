import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize

# Noise Removal

headline_one = '<h1>Nation\'s Top Pseudoscientists Harness High-Energy Quartz Crystal Capable Of Reversing Effects Of Being Gemini</h1>'

tweet = '@fat_meats, veggies are better than you think.'

headline_no_tag = re.sub(r'<.?h1>', '', headline_one)
print(headline_no_tag)

tweet_no_at = re.sub(r'@', '', tweet)

# Tokenization

ecg_text = 'An electrocardiogram is used to record the electrical conduction through a person\'s heart. The readings can be used to diagnose cardiac arrhythmias.'

tokenized_by_word = word_tokenize(ecg_text)

tokenized_by_sentence = sent_tokenize(ecg_text)

# Normalization

brands = 'Salvation Army, YMCA, Boys & Girls Club of America'

brands_lower = brands.lower()

brands_upper = brands.upper()

# Stopword Removal

stop_words = set(stopwords.words('english'))

survey_text = 'A YouGov study found that American\'s like Italian food more than any other country\'s cuisine.'

tokenized_survey = word_tokenize(survey_text)

text_no_stops = [word for word in tokenized_survey if word not in stop_words]
