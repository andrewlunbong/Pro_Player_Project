package com.codeclan.example.proplayer.utilities;

import com.codeclan.example.proplayer.models.Match;
import com.codeclan.example.proplayer.models.Team;

public class MatchHelper {
    public static void updateMatch(Match matchToUpdate, Match match) {
        matchToUpdate.setFinished(match.getFinished());
        matchToUpdate.setTeamHomeGoals(match.getTeamHomeGoals());
        matchToUpdate.setTeamAwayGoals(match.getTeamAwayGoals());
    }
}
