package com.codeclan.example.proplayer.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "teams")
public class Team implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "link")
    private String link;

    @Column(name = "att")
    private int att;

    @Column(name = "defe")
    private int defe;

    @Column(name = "mid")
    private int mid;

    @Column(name = "ovr")
    private int ovr;

    @Column(name = "badge")
    private String badge;

    @JsonIgnoreProperties({"teams"})
    @ManyToOne
    @JoinColumn(name = "league_id", nullable = false)
    private League league;

    @OneToMany(mappedBy = "team")
    private List<Player> players;

    @OneToMany
    @JoinColumn(name = "team1_id", referencedColumnName = "id")
    @JoinColumn(name = "team2_id", referencedColumnName = "id")
    private List<Match> matches;


    public Team() {

    }

    public Team(String name, String link, int att, int defe, int mid, int ovr, String badge, League league) {
        this.name = name;
        this.link = link;
        this.att = att;
        this.defe = defe;
        this.mid = mid;
        this.ovr = ovr;
        this.badge = badge;
        this.league = league;
        this.players = new ArrayList<>();
        this.matches = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public int getAtt() {
        return att;
    }

    public void setAtt(int att) {
        this.att = att;
    }

    public int getDefe() {
        return defe;
    }

    public void setDefe(int defe) {
        this.defe = defe;
    }

    public int getMid() {
        return mid;
    }

    public void setMid(int mid) {
        this.mid = mid;
    }

    public int getOvr() {
        return ovr;
    }

    public void setOvr(int ovr) {
        this.ovr = ovr;
    }

    public String getBadge() {
        return badge;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }

    public League getLeague() {
        return league;
    }

    public void setLeague(League league) {
        this.league = league;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<Match> getMatches() {
        return matches;
    }

    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }
}

