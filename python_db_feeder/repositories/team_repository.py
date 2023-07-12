from db.run_sql import run_sql
import repositories.league_repository as league_repository
import models.team as Team

def save(team):
    sql = "INSERT INTO teams (name, att, defe, mid, ovr, link, league_id) VALUES ( %s, %s, %s, %s, %s, %s, %s ) RETURNING id"
    values = [team.name, team.att, team.defe, team.mid, team.ovr, team.link, team.league.id]
    results = run_sql( sql, values )
    team.id = results[0]['id']
    return team