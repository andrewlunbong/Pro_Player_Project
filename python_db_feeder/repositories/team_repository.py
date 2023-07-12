from db.run_sql import run_sql
import repositories.league_repository as league_repository
import models.team as Team

def save(team):
    sql = "INSERT INTO teams (name, link, att, defe, mid, ovr, badge, league_id) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s ) RETURNING id"
    values = [team.name, team.link, team.att, team.defe, team.mid, team.ovr, team.badge, team.league.id]
    results = run_sql( sql, values )
    team.id = results[0]['id']
    return team