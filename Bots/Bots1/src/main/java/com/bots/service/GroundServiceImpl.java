package com.bots.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bots.beans.GroundBooking;
import com.bots.beans.Newground;
import com.bots.dao.GroundBookingDao;
import com.bots.dao.GroundDao;
import com.bots.dao.UserSignupDao;

@Service
public class GroundServiceImpl{

	@Autowired
	GroundDao groundDao;

	@Autowired
	GroundBookingDao groundBookingDao;
	
	@Autowired
	UserSignupDao userSignupDao;
	
	public List<Newground> displayAll() {
		return groundDao.findAll();
	}

	public GroundBooking addBookings(GroundBooking booking) {
		return groundBookingDao.save(booking);
			
	}
	
	public List<GroundBooking> getAllBooking() {
		return groundBookingDao.findAll();
	}
	
	public int getBookId(String d,String t)
	{
		return groundBookingDao.getBookId(d,t);
	}

	

	
}
