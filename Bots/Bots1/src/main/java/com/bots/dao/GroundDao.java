package com.bots.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bots.beans.Newground;

@Repository
public interface GroundDao extends JpaRepository<Newground, Long>{
	
}
