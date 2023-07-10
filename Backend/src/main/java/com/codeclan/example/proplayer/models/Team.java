package com.codeclan.example.proplayer.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "team")
    private List<Player> players;

    @OneToMany
    @JoinColumn(name = "team1_id", referencedColumnName = "id")
    @JoinColumn(name = "team2_id", referencedColumnName = "id")
    private List<Match> matches;

    @JsonIgnoreProperties({"teams"})
    @ManyToOne
    @JoinColumn(name="league_id", nullable=false)
    private League league;

    public Team(){

    }

    public Team(String name,League league) {
        this.name = name;
        this.players = new ArrayList<>();
        this.matches = new ArrayList<>();
        this.league = league;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public List<Match> getMatches() {
        return matches;
    }

    public League getLeague() {
        return league;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

    public void setLeague(League league) {
        this.league = league;
    }
}
