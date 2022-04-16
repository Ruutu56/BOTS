package com.bots.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bots.beans.GroundBooking;
import com.bots.beans.Users;
import com.bots.service.UserSignupServiceImpl;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/auth/")
public class UserSignupController {
	
	@Autowired
	UserSignupServiceImpl userSignupServiceImpl;

	@Autowired
	private JavaMailSender sender;
	
	@PostMapping("/signup")
	public ResponseEntity<Users> addUsers(@RequestBody Users u) {
		userSignupServiceImpl.addUsers(u);
		Users u1=userSignupServiceImpl.getById(u.getId());
		if(u1!=null)
		{
			SimpleMailMessage msg=new SimpleMailMessage();
			msg.setFrom("bookbots10@gmail.com");
			msg.setTo(u1.getEmail());
			msg.setSubject("Test mail from Bots system");
			msg.setText(u1.getFirstname()+"  "+u1.getLastname()+"! You are registered succefully!!! "+"your password : "+u1.getPass());
			sender.send(msg);
			System.out.println("Mail sent successfully");
			return ResponseEntity.ok(u1);
		}
		else
		{
	 	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		
		}
	}
	
	@GetMapping("/login")
	public String checkLogin(@RequestParam String email,@RequestParam String pass)
	{
		return userSignupServiceImpl.checkLogin(email,pass);
	}
	
	@GetMapping("/getAllUsers")
	public List<Users> diplayAllUsers(){
		return userSignupServiceImpl.getAllUsers();
	}
	
	/*@GetMapping("/login")
	public ResponseEntity<String> login(@RequestParam String email , @RequestParam String pass){
			
		if(userSignupService.validateUser(email, pass))
			//login successful flow
			return ResponseEntity.ok("Sucess");
		else
			//login failed flow
			return ResponseEntity.ok("Login failed");
	}
	
	*/
	@GetMapping("/getUser")
	public Users getUserId(@RequestParam String email) {
		
		return userSignupServiceImpl.getUserId(email);
	}
}
