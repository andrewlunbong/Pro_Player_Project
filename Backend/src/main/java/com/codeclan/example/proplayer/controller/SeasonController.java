package com.codeclan.example.proplayer.controller;

import com.codeclan.example.proplayer.models.Player;
import com.codeclan.example.proplayer.models.Season;
import com.codeclan.example.proplayer.models.Team;
import com.codeclan.example.proplayer.repository.SeasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class SeasonController {

    @Autowired
    SeasonRepository seasonRepository;

    @GetMapping("/seasons")
    public ResponseEntity<List<Season>> getAllSeason(){
        return new ResponseEntity<>(seasonRepository.findAll(), HttpStatus.OK);}

    @GetMapping(value="/seasons/{id}")
    public ResponseEntity<Optional<Season>> getSeason(@PathVariable Long id) {
        return new ResponseEntity(seasonRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/seasons")
    public ResponseEntity<Season> postSeason(@RequestBody Season season){
        seasonRepository.save(season);
        return new ResponseEntity<>(season, HttpStatus.CREATED);
    }
}
