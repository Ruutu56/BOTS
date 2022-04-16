package com.bots.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bots.beans.TimeSlot;
import com.bots.dao.TimeSlotDao;

@Service
public class TimeSlotServiceImpl{

	@Autowired 
	TimeSlotDao timeSlotDao;

	public void addTimeSlot(TimeSlot t) {
		timeSlotDao.save(t);		
	}

	public List<TimeSlot> findAll() {
		return timeSlotDao.findAll();
	}



	
	
}
