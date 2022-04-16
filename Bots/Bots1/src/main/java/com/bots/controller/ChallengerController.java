package com.bots.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bots.beans.Challenger;
import com.bots.beans.Users;
import com.bots.service.ChallengerServiceImpl;
import com.bots.service.UserSignupServiceImpl;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/challengers")
public class ChallengerController {

	@Autowired
	ChallengerServiceImpl challengerServiceImpl;
	
	@Autowired
	UserSignupServiceImpl userSignupServiceImpl;
	
	@Autowired
	private JavaMailSender sender;
	
	@PostMapping("/postchallenge")
	public void addChallenge(@RequestBody Challenger c) {
		challengerServiceImpl.addChallenge(c);
	/*	
		SimpleMailMessage msg=new SimpleMailMessage();
		msg.setFrom("bookbots10@gmail.com");
		msg.setTo(u.getEmail());
		msg.setSubject("Test mail from Bots system");
		msg.setText(u.getFirstname()+"  "+u.getLastname()+"! You are registered succefully!!! "+"your password : "+u.getPass());
		sender.send(msg);
		System.out.println("Mail sent successfully");*/
	}
	
	@GetMapping("/getchallenge")
	public List<Challenger> getChallenge() {
		return challengerServiceImpl.getChallenge();
		
	}
	
	@PutMapping("/editChallange/{id}")
	public Challenger editChallange(@PathVariable("id") long id) {
		return challengerServiceImpl.editChallanger(id);		
	}


	

	
	
	
}
