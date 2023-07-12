from db.run_sql import run_sql
from models.league import League

def save(league):
    sql = "INSERT INTO leagues (name) VALUES (%s) RETURNING id"
    values = [league.name]
    results = run_sql( sql, values )
    print(results)
    league.id = results[0]['id']
    return league

# def save(continent):
#     sql = "INSERT INTO continents(name) VALUES (%s) RETURNING id"
#     values = [continent.name]
#     results = run_sql(sql,values)
#     continent.id = results[0]['id']
#     return continent