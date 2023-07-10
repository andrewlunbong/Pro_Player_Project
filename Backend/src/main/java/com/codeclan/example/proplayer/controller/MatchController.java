package com.codeclan.example.proplayer.controller;


import com.codeclan.example.proplayer.models.League;
import com.codeclan.example.proplayer.models.Match;
import com.codeclan.example.proplayer.repository.LeagueRepository;
import com.codeclan.example.proplayer.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MatchController {

    @Autowired
    MatchRepository matchRepository;

    @GetMapping("/matches")
    public List<Match> getAllMatches(){ return matchRepository.findAll();}
}
