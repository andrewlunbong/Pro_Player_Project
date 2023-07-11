import requests
from bs4 import BeautifulSoup
from teams_screaper import efl_links, premier_links

url = 'https://www.fifaindex.com/team/1796/burnley/'

html = requests.get(url)
html_soup = BeautifulSoup(html.content,"html.parser")



test = html_soup.find("tbody")

print(test.find("td", attrs= {"data-title": "Name"}).select("a")[0].attrs["href"])

player_links = []


















# for i in test:
#     print(test)

# aas = []
# for i in test:
#     a = i.find("a", class_="link-player")
#     print(a)
#     aas.append(a)

# print(len(aas))

# print(type(test.select("td")))

# print(html_soup.find("table", class_="table-players"))
# print(html_soup.findAll("tr")[1:31])
# print(len(html_soup.findAll("tr")[1:31]))


# for i in html_soup.findAll("tr")[1:31]:
#     print(i.select("a"))

# print(html_soup.find("tbody"))
# print(len(html_soup.find("tbody")))

# for a in html_soup.find_all("a"):
#         if a.parent.name == 'td':
#             countries.append(a)›