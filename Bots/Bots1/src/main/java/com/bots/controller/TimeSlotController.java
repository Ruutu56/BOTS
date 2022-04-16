package com.bots.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bots.beans.TimeSlot;
import com.bots.service.TimeSlotServiceImpl;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/time/")
public class TimeSlotController {

	@Autowired
	TimeSlotServiceImpl timeSlotServiceImpl;
	
	@PostMapping("/timeslot")
	public ResponseEntity<TimeSlot> addTimeSlot(@RequestBody TimeSlot t){
		timeSlotServiceImpl.addTimeSlot(t);
		return null;
		
		 
	}
	
	@GetMapping("/gettimeslot")
	public List<TimeSlot> displayAll(){
		return timeSlotServiceImpl.findAll();
	}
		
}
