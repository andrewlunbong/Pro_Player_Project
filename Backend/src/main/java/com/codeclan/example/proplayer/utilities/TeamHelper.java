package com.codeclan.example.proplayer.utilities;

import com.codeclan.example.proplayer.models.Player;
import com.codeclan.example.proplayer.models.Team;

public class TeamHelper {
    public static void updateTeam(Team teamToUpdate, Team team) {
        teamToUpdate.setGoals(team.getGoals());
        teamToUpdate.setWins(team.getWins());
        teamToUpdate.setLoses(team.getLoses());
        teamToUpdate.setDraws(team.getDraws());
        teamToUpdate.setPoints(team.getPoints());
        teamToUpdate.setPlayers(team.getPlayers());
    }
}
