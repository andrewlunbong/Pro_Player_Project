package com.codeclan.example.proplayer.utilities;

import com.codeclan.example.proplayer.models.Player;

public class PlayerHelper {
    public static void updatePlayer(Player playerToUpdate, Player player) {
        playerToUpdate.setName(player.getName());
        playerToUpdate.setOverall(player.getOverall());
        playerToUpdate.setHeight(player.getHeight());
        playerToUpdate.setWeight(player.getWeight());
        playerToUpdate.setPreferred_foot(player.getPreferred_foot());
        playerToUpdate.setBirth_date(player.getBirth_date());
        playerToUpdate.setAge(player.getAge());
        playerToUpdate.setPosition(player.getPosition());
        playerToUpdate.setKit_number(player.getKit_number());
        playerToUpdate.setPositioning(player.getPositioning());
        playerToUpdate.setDiving(player.getDiving());
        playerToUpdate.setHandling(player.getHandling());
        playerToUpdate.setKicking(player.getKicking());
        playerToUpdate.setReflexes(player.getReflexes());
        playerToUpdate.setReactions(player.getReactions());
        playerToUpdate.setComposure(player.getComposure());
        playerToUpdate.setSlide_tackle(player.getSlide_tackle());
        playerToUpdate.setStand_tackle(player.getStand_tackle());
        playerToUpdate.setAggression(player.getAggression());
        playerToUpdate.setInterceptions(player.getInterceptions());
        playerToUpdate.setStrength(player.getStrength());
        playerToUpdate.setBalance(player.getBalance());
        playerToUpdate.setJumping(player.getJumping());
        playerToUpdate.setHeading(player.getHeading());
        playerToUpdate.setBall_control(player.getBall_control());
        playerToUpdate.setVision(player.getVision());
        playerToUpdate.setCrossing(player.getCrossing());
        playerToUpdate.setShort_pass(player.getShort_pass());
        playerToUpdate.setLong_pass(player.getLong_pass());
        playerToUpdate.setStamina(player.getStamina());
        playerToUpdate.setAgility(player.getAgility());
        playerToUpdate.setLong_shot(player.getLong_shot());
        playerToUpdate.setDribbling(player.getDribbling());
        playerToUpdate.setAt_positioning(player.getAt_positioning());
        playerToUpdate.setSprint_speed(player.getSprint_speed());
        playerToUpdate.setShot_power(player.getShot_power());
        playerToUpdate.setFinishing(player.getFinishing());
        playerToUpdate.setFk_accuracy(player.getFk_accuracy());
        playerToUpdate.setPenalties(player.getPenalties());
        playerToUpdate.setVolleys(player.getVolleys());
        playerToUpdate.setGoals(player.getGoals());
        playerToUpdate.setAssistance(player.getAssistance());
        playerToUpdate.setAppearances(player.getAppearances());
    }
}
