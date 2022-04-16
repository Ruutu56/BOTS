package com.bots.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bots.beans.PaymentDetails;
import com.bots.service.PaymentService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/payment")
public class PaymentController {
	
	@Autowired
	PaymentService ps;
	

	@PostMapping("/addpayment")
	public void addPayment(@RequestBody PaymentDetails pay) {
		
		ps.addPayment(pay);
	/*	
		SimpleMailMessage msg=new SimpleMailMessage();
		msg.setFrom("bookbots10@gmail.com");
		msg.setTo(u1.getEmail());
		msg.setSubject("Test mail from Bots system");
		msg.setText(u1.getFirstname()+"  "+u1.getLastname()+"! You are registered succefully!!! "+"your password : "+u1.getPass());
		sender.send(msg);
		System.out.println("Mail sent successfully");
			
		*/
	}

}
