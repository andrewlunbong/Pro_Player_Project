package com.codeclan.example.proplayer.controller;

import com.codeclan.example.proplayer.models.Match;
import com.codeclan.example.proplayer.models.Team;
import com.codeclan.example.proplayer.repository.MatchRepository;
import com.codeclan.example.proplayer.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TeamController {

    @Autowired
    TeamRepository teamRepository;

    @GetMapping("/teams")
    public List<Team> getAllTeams(){ return teamRepository.findAll();}
}
