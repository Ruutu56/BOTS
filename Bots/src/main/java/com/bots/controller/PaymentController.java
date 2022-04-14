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
	public PaymentDetails addPayment(@RequestBody PaymentDetails pay) {
		
		return ps.addPayment(pay);
			
		
	}

}
