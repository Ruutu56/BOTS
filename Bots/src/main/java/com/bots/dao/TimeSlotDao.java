package com.bots.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bots.beans.TimeSlot;

@Repository
public interface TimeSlotDao extends JpaRepository<TimeSlot, Long>{

}
