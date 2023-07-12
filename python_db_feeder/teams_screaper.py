import requests
from bs4 import BeautifulSoup
from models.team import Team

url = "https://www.fifaindex.com/teams/?league=14&order=desc"

def team_scrapper (url):

    html = requests.get(url)
    html_soup = BeautifulSoup(html.content,"html.parser")
    ### EXTRACT LOGOS ###
    number_of_teams = len(html_soup.findAll("img"))
    team_badges = []
    for i in range(number_of_teams):
        src = html_soup.select("img")[i].attrs["src"]
        team_badges.append(src)

    ### EXTRACT NAME AND LINK ###

    names_raw = html_soup.findAll("a", class_ = "link-team")
    names_number = len(html_soup.findAll("a", class_ = "link-team"))
    names_list = []
    links_list = []
    for i in range(1, names_number, 2):
        name = names_raw[i].get_text()
        link = "https://www.fifaindex.com" + names_raw[i].attrs["href"]
        names_list.append(name)
        links_list.append(link)
    
    ### EXTRACT DATA TITLES ###

    data_titles = ["ATT", "MID", "DEF", "OVR"]

    all_data_titles = []
    for data_title in data_titles:
        data_title_soup = html_soup.findAll("td", attrs= {"data-title": data_title})
        data_title_category = []
        for line in data_title_soup:
            data_title_category.append(line.get_text())
        all_data_titles.append(data_title_category)

    atts = all_data_titles[0]
    mids = all_data_titles[1]
    defs = all_data_titles[2]
    ovrs = all_data_titles[3]

    all_teams=[]
    for i in range(len(names_list)):
        a = Team(names_list[i], links_list[i], int(all_data_titles[0][i]), int(all_data_titles[1][i]), int(all_data_titles[2][i]),
                  int(all_data_titles[3][i]), team_badges[i])
        all_teams.append(a)
    return all_teams, links_list

efl_teams, efl_links= team_scrapper("https://www.fifaindex.com/teams/?league=14&order=desc")
premier_teams, premier_links= team_scrapper("https://www.fifaindex.com/teams/?league=13&order=desc")

# print(premier_teams[9].name)
# print(premier_teams[8].badge)

# print(efl_teams[1].name)

# for i in range(len(premier_teams)):
#     print(premier_teams[i].name)

# print(efl_links)

