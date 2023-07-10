package com.codeclan.example.proplayer.controller;

import com.codeclan.example.proplayer.models.Match;
import com.codeclan.example.proplayer.models.Player;
import com.codeclan.example.proplayer.repository.MatchRepository;
import com.codeclan.example.proplayer.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping("/players")
    public List<Player> getAllPlayers(){ return playerRepository.findAll();}
}
