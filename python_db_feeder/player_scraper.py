import requests
from bs4 import BeautifulSoup
from teams_screaper import efl_teams, premier_teams
from player import Player

url = 'https://www.fifaindex.com/team/1796/burnley/'

def player_scrapper(team_url):

    all_players_for_team = []

    html = requests.get(url)
    html_soup = BeautifulSoup(html.content,"html.parser")

    players_team_soup = html_soup.find("tbody")

    players_links_td = players_team_soup.find_all("td", attrs= {"data-title": "Name"})

        ### EXTRACT LINKS FOR PLAYERS IN TEAM PAGE ###
    player_links = []

    for player_link_td in players_links_td:
        player_link = "https://www.fifaindex.com" + player_link_td.select("a")[0].attrs["href"]
        player_links.append(player_link)

    for player_link in player_links:
        html_player = requests.get(player_link)
        html_player_soup = BeautifulSoup(html_player.content, "html.parser")

            ### EXTRACT NAME ON PLAYERS PAGE ###

        player_name = html_player_soup.find("h1").text
        player_name = player_name.replace("FIFA 23 Career Mode Ratings", "")

            ### EXTRACT IMAGE ON PLAYERS PAGE ###

        player_img = html_player_soup.find("img").attrs["src"]

            ### EXTRACT NATIONALITY ON PLAYERS PAGE ###

        player_nationality_name = html_player_soup.find_all("a", class_ = "link-nation")[1].text
        player_nationality_img = html_player_soup.find_all("a", class_ = "link-nation")[0].select("img")[0].attrs["src"]
        player_nationality_img = player_nationality_img.replace("/2/", "/10/")

            ### EXTRACT CHARACTERISTICS ON PLAYERS PAGE (works for all players) ###

        player_characteristics = html_player_soup.find_all("span", class_ = "float-right")

            ### EXTRACT BASIC FEATURES ON PLAYERS PAGE ###

        player_ovr = player_characteristics[0].select("span")[0].text
        player_height = player_characteristics[1].select("span")[0].text
        player_height = player_height.replace(" cm","")
        player_weight = player_characteristics[2].select("span")[0].text
        player_weight = player_weight.replace(" kg", "")
        player_preferred_foot = player_characteristics[3].text
        player_DOB = player_characteristics[4].text
        player_age = player_characteristics[5].text
        player_position = player_characteristics[16].text
        player_kit_number = player_characteristics[17].text

            ### EXTRACT GOAL ALL FEATURES ON PLAYERS PAGE ###

        player_features_ps = html_player_soup.find_all("p", class_ = "")

        player_features = []

        for i in player_features_ps:
            player_features.append(i.text)

            ### EXTRACT GOAL KEEPER SKILLS ON PLAYERS PAGE ###

        list_GK_features = ["GK Positioning ", "GK Diving ", "GK Handling ", "GK Kicking ", "GK Reflexes ", "Reactions ", "Composure "]

        player_GK_positioning = str([feature.replace(list_GK_features[0],"") for feature in player_features if list_GK_features[0] in feature][0])
        player_GK_diving = str([feature.replace(list_GK_features[1],"")for feature in player_features if list_GK_features[1] in feature][0])
        player_GK_handling = str([feature.replace(list_GK_features[2],"") for feature in player_features if list_GK_features[2] in feature][0])
        player_GK_kicking = str([feature.replace(list_GK_features[3],"") for feature in player_features if list_GK_features[3] in feature][0])
        player_GK_reflexes = str([feature.replace(list_GK_features[4],"") for feature in player_features if list_GK_features[4] in feature][0])
        player_GK_reactions = str([feature.replace(list_GK_features[5],"") for feature in player_features if list_GK_features[5] in feature][0])
        player_GK_composure = str([feature.replace(list_GK_features[6],"") for feature in player_features if list_GK_features[6] in feature][0])

            ### EXTRACT DEFENSE SKILLS ON PLAYERS PAGE ###

        list_DF_features = ["Slide Tackle ", "Stand Tackle ", "Aggression ", "Interceptions ", "Strength ", "Balance ", "Jumping ", "Heading "]

        player_DF_slide_tackle = str([feature.replace(list_DF_features[0],"") for feature in player_features if list_DF_features[0] in feature][0])
        player_DF_stand_tackle = str([feature.replace(list_DF_features[1],"") for feature in player_features if list_DF_features[1] in feature][0])
        player_DF_aggression = str([feature.replace(list_DF_features[2],"") for feature in player_features if list_DF_features[2] in feature][0])
        player_DF_interceptions = str([feature.replace(list_DF_features[3],"") for feature in player_features if list_DF_features[3] in feature][0])
        player_DF_strength = str([feature.replace(list_DF_features[4],"") for feature in player_features if list_DF_features[4] in feature][0])
        player_DF_balance = str([feature.replace(list_DF_features[5],"") for feature in player_features if list_DF_features[5] in feature][0])
        player_DF_jumping = str([feature.replace(list_DF_features[6],"") for feature in player_features if list_DF_features[6] in feature][0])
        player_DF_heading = str([feature.replace(list_DF_features[7],"") for feature in player_features if list_DF_features[7] in feature][0])

            ### EXTRACT MID FIELD SKILLS ON PLAYERS PAGE ###

        list_MF_features = ["Ball Control ", "Vision ", "Crossing ", "Short Pass ", "Long Pass ", "Stamina ", "Agility ", "Long Shots "]

        player_MF_ball_control = str([feature.replace(list_MF_features[0],"") for feature in player_features if list_MF_features[0] in feature][0])
        player_MF_vision = str([feature.replace(list_MF_features[1],"") for feature in player_features if list_MF_features[1] in feature][0])
        player_MF_crossing = str([feature.replace(list_MF_features[2],"") for feature in player_features if list_MF_features[2] in feature][0])
        player_MF_short_pass = str([feature.replace(list_MF_features[3],"") for feature in player_features if list_MF_features[3] in feature][0])
        player_MF_long_pass = str([feature.replace(list_MF_features[4],"") for feature in player_features if list_MF_features[4] in feature][0])
        player_MF_stamina = str([feature.replace(list_MF_features[5],"") for feature in player_features if list_MF_features[5] in feature][0])
        player_MF_agility = str([feature.replace(list_MF_features[6],"") for feature in player_features if list_MF_features[6] in feature][0])
        player_MF_long_shots = str([feature.replace(list_MF_features[7],"") for feature in player_features if list_MF_features[7] in feature][0])

            ### EXTRACT MID FIELD SKILLS ON PLAYERS PAGE ###

        list_AT_features = ["Dribbling ", "Att. Position ", "Sprint Speed ", "Shot Power ", "Finishing ", "FK Acc. ", "Penalties ", "Volleys "]

        player_at_dribbling = str([feature.replace(list_AT_features[0],"") for feature in player_features if list_AT_features[0] in feature][0])
        player_at_att_position = str([feature.replace(list_AT_features[1],"") for feature in player_features if list_AT_features[1] in feature][0])
        player_at_sprint_speed = str([feature.replace(list_AT_features[2],"") for feature in player_features if list_AT_features[2] in feature][0])
        player_at_shot_power = str([feature.replace(list_AT_features[3],"") for feature in player_features if list_AT_features[3] in feature][0])
        player_at_finishing = str([feature.replace(list_AT_features[4],"") for feature in player_features if list_AT_features[4] in feature][0])
        player_at_fk_acc = str([feature.replace(list_AT_features[5],"") for feature in player_features if list_AT_features[5] in feature][0])
        player_at_penalties = str([feature.replace(list_AT_features[6],"") for feature in player_features if list_AT_features[6] in feature][0])
        player_at_volleys = str([feature.replace(list_AT_features[7],"") for feature in player_features if list_AT_features[7] in feature][0])

        player_ready = Player(player_name, player_img, player_nationality_name, player_nationality_img, int(player_ovr), int(player_height), int(player_weight), player_preferred_foot, player_DOB,  int(player_age), player_position, int(player_kit_number), int(player_GK_positioning), int(player_GK_diving), int(player_GK_handling), int(player_GK_kicking), int(player_GK_reflexes), int(player_GK_reactions), int(player_GK_composure), int(player_DF_slide_tackle), int(player_DF_stand_tackle), int(player_DF_aggression), int(player_DF_interceptions), int(player_DF_strength), int(player_DF_balance), int(player_DF_jumping), int(player_DF_heading), int(player_MF_ball_control), int(player_MF_vision), int(player_MF_crossing), int(player_MF_short_pass), int(player_MF_long_pass), int(player_MF_stamina), int(player_MF_agility), int(player_MF_long_shots), int(player_at_dribbling), int(player_at_att_position), int(player_at_sprint_speed), int(player_at_shot_power), int(player_at_finishing), int(player_at_fk_acc), int(player_at_penalties), int(player_at_volleys))
        all_players_for_team.append(player_ready)
    
    return all_players_for_team

burnley_players = player_scrapper(efl_teams[0].link)

# print(burnley_players)

# for i in burnley_players:
#     print(i.name)
#     print(i.nationality)
#     print(i.AT_fk_accuracy)
# html_player = requests.get("https://www.fifaindex.com/player/239085/erling-haaland/")
# html_player = requests.get("https://www.fifaindex.com/player/209331/mohamed-salah/fifa23/")

# print(player_GK_positioning, player_GK_diving, player_GK_handling, player_GK_kicking, player_GK_reflexes, player_GK_reactions, player_GK_composure)
# print(player_ovr, player_height, player_weight, player_preferred_foot, player_DOB, player_age, player_position, player_kit_number)


# for i in features:
#     if "Crossing " in i:
#         print(i)

# player_features = html_player_soup.find_all("p", class_ = "")
# features = []

# for i in player_features:
#     # i_split = i.text.split()
#     features.append(i.text)

# print(features)

# print(player_characteristics.get_text())

# print(player_GK_positioning,player_GK_diving, player_GK_handling, player_GK_kicking, player_GK_reflexes)




# print([player_ovr, player_height, player_weight, player_preferred_foot, player_DOB, player_age])
    
# FIFA 23 Career Mode Ratings
# print(html_player_soup)




# print(player_team_soup.find("td", attrs= {"data-title": "Name"}).select("a")[0].attrs["href"])


# player_links = []



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


# html = requests.get(url)
# html_soup = BeautifulSoup(html.content,"html.parser")

# players_team_soup = html_soup.find("tbody")

# players_links = players_team_soup.find_all("td", attrs= {"data-title": "Name"})

# for i in players_team_soup:
#     # print(i)
#     print("https://www.fifaindex.com" + players_team_soup.find("td", attrs= {"data-title": "Name"}).select("a")[0].attrs["href"])

# player_link = "https://www.fifaindex.com" + players_team_soup.find("td", attrs= {"data-title": "Name"}).select("a")[0].attrs["href"]

# print(players_team_soup.find_all("td", attrs= {"data-title": "Name"})[3].select("a")[0].attrs["href"])

# players_links_td = players_team_soup.find_all("td", attrs= {"data-title": "Name"})

# for i in players_links_td:
#     print(i.select("a")[0].attrs["href"])