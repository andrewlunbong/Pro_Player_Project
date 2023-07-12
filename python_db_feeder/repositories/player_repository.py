from db.run_sql import run_sql
from models.player import Player
from models.team import Team
from models.league import League
import repositories.team_repository as team_repository
import repositories.league_repository as league_repository


def save(player):
    sql = "INSERT INTO players( name,image,nationality,nationality_image,height,weight, preferred_foot,birth_date,age,position,kit_number,overall,positioning,diving,handling,kicking,reflexes,reactions,composure,slide_tackle,stand_tackle,aggression,interceptions,heading,jumping,strength,balance,crossing,short_pass,long_pass,ball_control,vision,long_shot,agility,stamina,shot_power,finishing,fk_accuracy,penalties,volleys,dribbling,at_positioning,sprint_speed,team_id ) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s , %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING id"
    values = [player.name,player.image,player.nationality,player.nationality_image,player.height,
    player.weight, 
    player.preferred_foot,player.birth_date,player.age,player.position,player.kit_number,player.overall,player.positioning,player.diving,player.handling,
    player.kicking,player.reflexes,player.reactions,player.composure,player.slide_tackle,player.stand_tackle,player.aggression,player.interceptions,player.heading,player.jumping,player.strength,player.balance,player.crossing,player.short_pass,player.long_pass,
    player.ball_control,player.vision,player.long_shot,player.agility,player.stamina,player.shot_power,player.finishing,player.fk_accuracy,
    player.penalties,player.volleys,player.dribbling,player.at_positioning,player.sprint_speed,player.team.id]
    results = run_sql( sql, values )
    player.id = results[0]['id']
    return player