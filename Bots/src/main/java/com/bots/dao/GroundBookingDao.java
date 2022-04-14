package com.bots.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bots.beans.GroundBooking;

@Repository
public interface GroundBookingDao extends JpaRepository<GroundBooking, Long>{

	@Query("select g.booking_id from GroundBooking g where date=:d and time=:t")
	public int getBookId(String d,String t);
	
	
	
	
}
