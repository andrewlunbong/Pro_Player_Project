from db.run_sql import run_sql

from models.league import League

def save(league):
    sql = "INSERT INTO leagues (name) VALUES (%) RETURNING id"
    values = [league.name]
    results = run_sql( sql, values )
    league.id = results[0]['id']
    return league

