package com.codeclan.example.proplayer.controller;

import com.codeclan.example.proplayer.models.Match;
import com.codeclan.example.proplayer.models.Player;
import com.codeclan.example.proplayer.models.Team;
import com.codeclan.example.proplayer.repository.MatchRepository;
import com.codeclan.example.proplayer.repository.TeamRepository;
import com.codeclan.example.proplayer.utilities.PlayerHelper;
import com.codeclan.example.proplayer.utilities.TeamHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TeamController {

    @Autowired
    TeamRepository teamRepository;

    @GetMapping("/teams")
    public ResponseEntity<List<Team>> getAllTeams(){
        return new ResponseEntity<>(teamRepository.findAll(), HttpStatus.OK);}

    @GetMapping(value="/teams/{id}")
    public ResponseEntity<Optional<Team>> getTeam(@PathVariable Long id) {
        return new ResponseEntity(teamRepository.findById(id), HttpStatus.OK);
    }

    @PutMapping(value="/courses/{id}")
    public ResponseEntity<Team> putTeam(@RequestBody Team team, @PathVariable Long id){
        Team teamToUpdate = teamRepository.findById(id).get();
        TeamHelper.updateTeam(teamToUpdate, team);
        teamRepository.save(teamToUpdate);
        return new ResponseEntity<>(teamToUpdate, HttpStatus.OK);
    }
}
