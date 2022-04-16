package com.bots.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bots.beans.PlayerFinder;

@Repository
public interface PlayerFinderDao extends JpaRepository<PlayerFinder, Long>{

}
