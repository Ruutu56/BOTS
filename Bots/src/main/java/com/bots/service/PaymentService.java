package com.bots.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bots.beans.PaymentDetails;
import com.bots.dao.PaymentDao;

@Service
public class PaymentService {

	@Autowired
	PaymentDao pd;
	
	public PaymentDetails addPayment(PaymentDetails pay) {
		
		return pd.save(pay);
	}
}
