package com.bots.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bots.beans.GroundBooking;
import com.bots.beans.Newground;
import com.bots.service.GroundServiceImpl;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/ground")
public class GroundController {
	@Autowired
	GroundServiceImpl groundServiceImpl;
	
	
	@GetMapping("/get")
	public List<Newground> diplayAllgrd(){
		return groundServiceImpl.displayAll();
	}
	//Users u1=userSignupService.getById(u.getId())
	
	@PostMapping("/addbook")
	public GroundBooking addBookings(@RequestBody GroundBooking booking) {
		System.out.println("inside controller ->"+booking);
		return groundServiceImpl.addBookings(booking);
	}
	
	@GetMapping("/getAllBookings")
	public List<GroundBooking> diplayAllbooking(){
		return groundServiceImpl.getAllBooking();
	}
	
	@GetMapping("/getBid")
	public int getBookId(@RequestParam("date")String d,@RequestParam("time")String t)
	{
		return groundServiceImpl.getBookId(d,t);
	}
	
	
}
