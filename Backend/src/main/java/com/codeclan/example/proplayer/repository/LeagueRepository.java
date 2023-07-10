package com.codeclan.example.proplayer.repository;

import com.codeclan.example.proplayer.models.League;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeagueRepository extends JpaRepository<League, Long> {
}
