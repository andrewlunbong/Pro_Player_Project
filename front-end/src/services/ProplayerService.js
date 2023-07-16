const baseURL = 'http://localhost:8080/'



export const postProplayer = (payload) => {
    return fetch ( baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
    
    
export const updateProplayer = (payload) => {
        return fetch(baseURL + payload._id, {
          method: 'PUT',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
      }
    
export const deleteProplayer = (id) => {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
    };

export const getProplayerLeagues = () => {
    return fetch(baseURL + "leagues")
      .then(res => res.json());
  }
export const getOneProplayer = (id) => {
    return fetch(baseURL + id)
      .then(res => res.json());
  }

  export const getProplayerPlayers = () => {
    return fetch(baseURL + "/players")
      .then(res => res.json());
  }  