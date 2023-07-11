package com.codeclan.example.proplayer.repository;

import com.codeclan.example.proplayer.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
