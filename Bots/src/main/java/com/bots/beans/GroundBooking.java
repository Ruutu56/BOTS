package com.bots.beans;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class GroundBooking {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int booking_id;
	private String date;
	private String time;
	private double price;
	private long userId;
	private long groundId;
	
	
	public GroundBooking(String date,String time, double price, long userId, long groundId) {
		super();
		this.date=date;
		this.time = time;
		this.price = price;
		this.userId = userId;
		this.groundId = groundId;
	}

//	@JsonIgnoreProperties("gd")
//	@ManyToOne(cascade=CascadeType.ALL)
//	@JoinColumn(name="user_id")
//	private Users user;

	

}
