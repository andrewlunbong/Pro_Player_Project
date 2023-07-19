from db.run_sql import run_sql
from models.league import League

def save(league):
    sql = "INSERT INTO leagues (name, logo) VALUES (%s, %s) RETURNING id"
    values = [league.name, league.logo]
    results = run_sql( sql, values )
    print(results)
    league.id = results[0]['id']
    return league
