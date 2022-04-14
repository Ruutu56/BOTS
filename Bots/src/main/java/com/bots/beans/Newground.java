package com.bots.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Newground {

	@Id
	@GeneratedValue
	private long id;
	private String groundname;
	private String location;
	private String groundtype;
	private String sports;	
	private String contact;
	private String Rating;
	private double price;
	
	public Newground() {
		super();
	}

	public Newground(long id, String groundname, String location, String groundtype, String sports, String contact,
			String rating,double price) {
		super();
		this.id = id;
		this.groundname = groundname;
		this.location = location;
		this.groundtype = groundtype;
		this.sports = sports;
		this.contact = contact;
		Rating = rating;
		this.price = price;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getGroundname() {
		return groundname;
	}

	public void setGroundname(String groundname) {
		this.groundname = groundname;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getGroundtype() {
		return groundtype;
	}

	public void setGroundtype(String groundtype) {
		this.groundtype = groundtype;
	}

	public String getSports() {
		return sports;
	}

	public void setSports(String sports) {
		this.sports = sports;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getRating() {
		return Rating;
	}

	public void setRating(String rating) {
		Rating = rating;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Newground [id=" + id + ", groundname=" + groundname + ", location=" + location + ", groundtype="
				+ groundtype + ", sports=" + sports + ", contact=" + contact + ", Rating=" + Rating + ", price=" + price
				+ "]";
	}

	
	
	
	
}
