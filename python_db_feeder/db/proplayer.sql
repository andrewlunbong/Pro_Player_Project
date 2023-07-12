DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS leagues;

CREATE TABLE leagues (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    att INT,
    defe INT,
    mid INT,
    ovr INT,
    link VARCHAR(255),
    league_id INT NOT NULL REFERENCES leagues(id) ON DELETE CASCADE
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    nationality VARCHAR(255),
    nationality_image VARCHAR(255),
    height INT,
    weight INT,
    preferred_foot VARCHAR(255),
    birth_date VARCHAR(255),
    age INT,
    position VARCHAR(255),
    kit_number INT,
    overall INT,
    positioning INT,
    diving INT,
    handling INT,
    kicking INT,
    reflexes INT,
    reactions INT,
    composure INT,
    slide_tackle INT,
    stand_tackle INT,
    aggression INT,
    interceptions INT,
    heading INT,
    jumping INT,
    strength INT,
    balance INT,
    crossing INT,
    short_pass INT,
    long_pass INT,
    ball_control INT,
    vision INT,
    long_shot INT,
    agility INT,
    stamina INT,
    shot_power INT,
    finishing INT,
    fk_accuracy INT,
    penalties INT,
    volleys INT,
    dribbling INT,
    at_positioning INT,
    sprint_speed INT,
    team_id INT NOT NULL REFERENCES teams(id) ON DELETE CASCADE
);

