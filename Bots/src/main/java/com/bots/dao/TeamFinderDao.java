package com.bots.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bots.beans.TeamFinder;

@Repository
public interface TeamFinderDao extends JpaRepository<TeamFinder, Long> {

}
