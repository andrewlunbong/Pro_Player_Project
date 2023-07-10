package com.codeclan.example.proplayer.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;


    @ManyToOne
    @JsonIgnoreProperties({"matches"})
    @JoinColumn(name="team1_id", nullable=false)
    private Team team1;

    @ManyToOne
    @JsonIgnoreProperties({"matches"})
    @JoinColumn(name="team2_id", nullable=false)
    private Team team2;

    @ManyToOne
    @JsonIgnoreProperties({"matches"})
    @JoinColumn(name= "league_id", nullable=false )
    private League league;

    public Match(){

    }

    public Match(String date, Team team1, Team team2, League league) {
        this.date = date;
        this.team1 = team1;
        this.team2 = team2;
        this.league = league;
    }

    public String getDate() {
        return date;
    }

    public Team getTeam1() {
        return team1;
    }

    public Team getTeam2() {
        return team2;
    }

    public League getLeague() {
        return league;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setTeam1(Team team1) {
        this.team1 = team1;
    }

    public void setTeam2(Team team2) {
        this.team2 = team2;
    }

    public void setLeague(League league) {
        this.league = league;
    }
}
