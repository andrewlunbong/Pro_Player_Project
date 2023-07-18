package com.codeclan.example.proplayer.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "leagues")

public class League implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "logo")
    private String logo;

    @OneToMany(mappedBy = "league", fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"league"})
    //You can use JsonBackReference here as an alternative
    private List<Team> teams;

    @OneToMany(mappedBy = "league", fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"matches", "league"})
    //You can use JsonBackReference here as an alternative
    private List<Match> matches;

    public League(){

    }

    public League(String name, String logo) {
        this.name = name;
        this.logo = logo;
        this.teams = new ArrayList<>();
        this.matches = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Team> getTeams() {
        return teams;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }

    public List<Match> getMatches() {
        return matches;
    }

    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }
}
