from db.run_sql import run_sql
from models.player import Player
from models.team import Team
from models.league import League
import repositories.team_repository as team_repository
import repositories.league_repository as league_repository


def save(player):
    sql = "INSERT INTO players( name,image,nationality,nationality_image,overall,height,weight, preferred_foot,birth_date,age,position,kit_number,positioning,diving,handling,kicking,reflexes,reactions,composure,slide_tackle,stand_tackle,aggression,interceptions,strength,balance,jumping,heading,ball_control,vision, crossing,short_pass,long_pass, stamina,agility,long_shot,dribbling,at_positioning,sprint_speed,shot_power,finishing,fk_accuracy,penalties,volleys,team_id ) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s , %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING id"
    values = [player.name,player.image,player.nationality,player.nationality_image,player.overall,player.height,
    player.weight, 
    player.preferred_foot,player.birth_date,player.age,player.position,player.kit_number,player.GK_positioning,player.GK_diving,player.GK_handling,
    player.GK_kicking,player.GK_reflexes,player.GK_reactions,player.GK_composure,player.DF_slide_tackle,player.DF_stand_tackle,player.DF_aggression,player.DF_interceptions,player.DF_strength,player.DF_balance,player.DF_jumping,player.DF_heading,player.MF_ball_control,player.MF_vision,player.MF_crossing,player.MF_short_pass,player.MF_long_pass,
    player.MF_stamina,player.MF_agility,player.MF_long_shot,player.AT_dribbling,player.AT_at_positioning,player.AT_sprint_speed,player.AT_shot_power,player.AT_finishing,
    player.AT_fk_accuracy,player.AT_penalties,player.AT_volleys,player.team.id]
    results = run_sql( sql, values )
    player.id = results[0]['id']
    return player