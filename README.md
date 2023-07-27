# Pro Player Project - An Interactive Football Simulation

![Pro Player Project](https://example.com/pro_player_logo.png)

## About

The Pro Player Project is an interactive application where users can create their own football player and guide them through a season of matches. The objective is to improve the player's performance and stats by earning experience points (exp) after each match. Users can strategically upgrade their player's skills using the accumulated exp. Additionally, the project includes a dynamic league table that reflects the results of the user's team and other competing teams.

## Features

1. **Create a Football Player**: Users can create their own football player, choosing the team they want to play for and customising various attributes such as name, position, characteristics, and skill upgrades.

2. **Season of Matches**: Users guide their player through a season of matches, experiencing the ups and downs of a football season.

3. **Game Logic**: The matches will be played between two teams (the user's team and CPU's team). The game will have a timer of 90 minutes, and a while loop will simulate the game. In the while loop, an array of events will occur during the game, including team A scoring, team B scoring, and opportunities for the user's player to make decisions (e.g., pass or shoot). The game will stop when the timer reaches 90 minutes.

4. **Performance-based Exp**: After each match, the player earns experience points based on their performance. The better the performance, the more exp gained.

5. **Stat Upgrades**: Users can use the accumulated exp to upgrade their player's skills and stats, improving their performance on the field.

6. **Dynamic League Table**: The league table reflects the results of the user's team and other competing teams, providing a realistic and immersive experience.

## Features
![you! (1)](https://github.com/andrewlunbong/Pro_Player_Project/assets/128614599/f1a81126-9240-44c4-96d0-cbbc73099b80)



## MVP (Minimum Viable Product)

- Users can create a football player.
- Users can create a league.
- The application can generate computer-controlled football players.
- Users can play matches.
- Users can update player attributes.
- The league table can be updated based on match results.
- Users can play at least one season.
- Simulate other matches between non-player teams.

## Extension

- Users can train their players.
- Players can have a lifestyle (e.g., fitness, diet) affecting their performance.
- Users can transfer players to different teams.

## Tech Stack

**Frontend:**
- React
- Daisy UI
- Tailwind CSS

**Backend:**
- Java
- SQL
- Spring
- Python

**Web Scraping:**
- Python for web scraping data for teams, leagues, and players from https://www.fifaindex.com/teams/?league=14&order=desc.


## Timeline of Match Events

- While loop within 90 minutes to run the game.
- Function for midfield and striker.
- More chances for the striker to score.
- More chances for the midfielder to assist.
- Class for Team and Player.
- Decision Tree for player actions during the match (e.g., passing, shooting, and dribbling).

## Counter

- Used to keep track of goals for two teams.

## License

This project is licensed under the [MIT License](https://example.com/pro_player_license).
