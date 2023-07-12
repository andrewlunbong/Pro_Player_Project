package com.codeclan.example.proplayer.repository;

import com.codeclan.example.proplayer.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findByTeam_Id(Long id);

}
