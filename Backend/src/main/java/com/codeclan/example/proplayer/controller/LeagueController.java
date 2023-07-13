package com.codeclan.example.proplayer.controller;

import com.codeclan.example.proplayer.models.League;
import com.codeclan.example.proplayer.models.Player;
import com.codeclan.example.proplayer.repository.LeagueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class LeagueController {

    @Autowired
    LeagueRepository leagueRepository;

    @GetMapping("/leagues")
    public ResponseEntity<List<League>> getAllLeagues(){
        return new ResponseEntity<>(leagueRepository.findAll(), HttpStatus.OK);}

    @GetMapping(value="/leagues/{id}")
    public ResponseEntity<Optional<League>> getLeague(@PathVariable Long id) {
        return new ResponseEntity(leagueRepository.findById(id), HttpStatus.OK);
    }

}
