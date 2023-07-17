import requests
from bs4 import BeautifulSoup
from models.team import Team
import repositories.league_repository as league_repository
import repositories.team_repository as team_repository
from models.league import League


efl_league = League("EFL Championship", "https://logowik.com/content/uploads/images/efl-championship2118.jpg")
league_repository.save(efl_league)
premier_league = League("Premier League", "https://logowik.com/content/uploads/images/premier-league9031.jpg")
league_repository.save(premier_league)

def team_scrapper (url, league):

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
                  int(all_data_titles[3][i]), team_badges[i], league)
        all_teams.append(a)
    return all_teams

efl_teams= team_scrapper("https://www.fifaindex.com/teams/?league=14&order=desc", efl_league)
premier_teams= team_scrapper("https://www.fifaindex.com/teams/?league=13&order=desc", premier_league)

for team in efl_teams:
    team_repository.save(team)

for team in premier_teams:
    team_repository.save(team)

# url = "https://www.fifaindex.com/teams/?league=14&order=desc"