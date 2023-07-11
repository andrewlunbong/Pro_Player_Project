package com.codeclan.example.proplayer.repository;

import com.codeclan.example.proplayer.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
