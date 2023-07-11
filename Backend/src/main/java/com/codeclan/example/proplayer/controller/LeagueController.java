package com.codeclan.example.proplayer.controller;

import com.codeclan.example.proplayer.models.League;
import com.codeclan.example.proplayer.repository.LeagueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LeagueController {

    @Autowired
    LeagueRepository leagueRepository;

    @GetMapping("/leagues")
    public List<League> getAllLeagues(){ return leagueRepository.findAll();}

}
