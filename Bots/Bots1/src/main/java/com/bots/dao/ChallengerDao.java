package com.bots.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bots.beans.Challenger;

public interface ChallengerDao extends JpaRepository<Challenger, Long> {

}
