package com.codeclan.example.proplayer.controller;

import com.codeclan.example.proplayer.models.Match;
import com.codeclan.example.proplayer.models.Player;
import com.codeclan.example.proplayer.models.Team;
import com.codeclan.example.proplayer.repository.MatchRepository;
import com.codeclan.example.proplayer.repository.PlayerRepository;
import com.codeclan.example.proplayer.utilities.PlayerHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping("/players")
    public ResponseEntity<List<Player>> getAllPlayers(){
        return new ResponseEntity<>(playerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/players/{id}")
    public ResponseEntity<Optional<Player>> getPlayer(@PathVariable Long id) {
        return new ResponseEntity(playerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/players")
    public ResponseEntity<Player> postPlayer(@RequestBody Player player){
        playerRepository.save(player);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }

    @PutMapping(value="/players/{id}")
    public ResponseEntity<Player> putPlayer(@RequestBody Player player, @PathVariable Long id){
        Player playerToUpdate = playerRepository.findById(id).get();
        PlayerHelper.updatePlayer(playerToUpdate, player);
        playerRepository.save(playerToUpdate);
        return new ResponseEntity<>(playerToUpdate, HttpStatus.OK);
    }

}
