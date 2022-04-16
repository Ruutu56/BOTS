package com.bots.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class PlayerFinder {

	@Id
	@GeneratedValue
	private long id;
	private String sport;
	private String location;
	private int reqplayers;
	private int availableplayers;
	private String contpername;
	private String contact;
	@OneToOne
	private TimeSlot t;

	public PlayerFinder() {
		super();
	}
	public PlayerFinder(long id, String sport, String location, TimeSlot t) {
		super();
		this.id = id;
		this.sport = sport;
		this.location = location;
		this.t = t;
	
	}
		
	
	public PlayerFinder(long id, String sport, String location, int reqplayers, int availableplayers,
			String contpername, String contact, TimeSlot t) {
		super();
		this.id = id;
		this.sport = sport;
		this.location = location;
		this.reqplayers = reqplayers;
		this.availableplayers = availableplayers;
		this.contpername = contpername;
		this.contact = contact;
		this.t = t;
	}
	
	
	public int getAvailableplayers() {
		return availableplayers;
	}
	public void setAvailableplayers(int availableplayers) {
		this.availableplayers = availableplayers;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSport() {
		return sport;
	}
	public void setSport(String sport) {
		this.sport = sport;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getReqplayers() {
		return reqplayers;
	}
	public void setReqplayers(int reqplayers) {
		this.reqplayers = reqplayers;
	}
	public String getContpername() {
		return contpername;
	}
	public void setContpername(String contpername) {
		this.contpername = contpername;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public TimeSlot getT() {
		return t;
	}
	public void setT(TimeSlot t) {
		this.t = t;
	}
	@Override
	public String toString() {
		return "PlayerFinder [sport=" + sport + ", location=" + location + ", t=" + t + "]";
	}
	
	
}
