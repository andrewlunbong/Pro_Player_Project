const baseURL = 'http://localhost:8080/'
    
// FOR PLAYERS

export const getPlayers = () => {
  return fetch(baseURL + "/players")
    .then(res => res.json());
}  

export const getOnePlayer = (id) => {
  return fetch(baseURL + "/players/"+ id)
    .then(res => res.json());
}

export const postNewPlayer = (payload) => {
  return fetch ( baseURL + "/players", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
}

export const updatePlayer = (payload) => {
return fetch(baseURL + "/players/" + payload._id, {
  method: 'PUT',
  body: JSON.stringify(payload),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json());
}

// FOR TEAMS

export const getTeams = () => {
  return fetch(baseURL + "/teams")
    .then(res => res.json());
}  

export const getOneTeam = (id) => {
  return fetch(baseURL + "/teams/"+ id)
    .then(res => res.json());
}

export const updateTeams = (payload) => {
return fetch(baseURL + "/teams/" + payload._id, {
  method: 'PUT',
  body: JSON.stringify(payload),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json());
}

// FOR LEAGUES

export const getLeagues = () => {
  return fetch(baseURL + "/leagues")
    .then(res => res.json());
}  

export const getOneLeague = (id) => {
  return fetch(baseURL + "/leagues/"+ id)
    .then(res => res.json());
}

// FOR MATCHES

export const getMatches = () => {
  return fetch(baseURL + "/matches")
    .then(res => res.json());
}  

export const getOneMatch = (id) => {
  return fetch(baseURL + "/matches/"+ id)
    .then(res => res.json());
}

export const postNewMatch = (payload) => {
  return fetch ( baseURL + "/matches", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
}

export const updateMatch = (payload) => {
return fetch(baseURL + "/matches/" + payload._id, {
  method: 'PUT',
  body: JSON.stringify(payload),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json());
}

// FOR SEASON

export const getSeasons = () => {
  return fetch(baseURL + "/seasons")
    .then(res => res.json());
}  

export const getOneSeason = (id) => {
  return fetch(baseURL + "/seasons/"+ id)
    .then(res => res.json());
}

export const postNewSeason = (payload) => {
  return fetch ( baseURL + "/seasons", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
}

// export const deleteProplayer = (id) => {
//   return fetch(baseURL + id, {
//     method: 'DELETE'
//   });
// };
    