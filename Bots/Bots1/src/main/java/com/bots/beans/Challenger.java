package com.bots.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Challenger {

	@Id
	@GeneratedValue
	private long id;
	private String location;
	private String sportsname;
	private String teamname;
	private String reward;
	private String time;
	private String date;
	private String contactperson;
	private String contactnumber;
	private boolean isAccepted;
	
	public Challenger() {
		super();
	}

	public Challenger(long id, String location, String sportsname, String teamname, String reward, String time,
			String date, String contactperson, String contactnumber,boolean isAccepted) {
		super();
		this.id = id;
		this.location = location;
		this.sportsname = sportsname;
		this.teamname = teamname;
		this.reward = reward;
		this.time = time;
		this.date = date;
		this.contactperson = contactperson;
		this.contactnumber = contactnumber;
		this.isAccepted=isAccepted;
	}

	public boolean getIsAccepted() {
		return isAccepted;
	}

	public void setIsAccepted(boolean isAccepted) {
		this.isAccepted = isAccepted;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSportsname() {
		return sportsname;
	}

	public void setSportsname(String sportsname) {
		this.sportsname = sportsname;
	}

	public String getTeamname() {
		return teamname;
	}

	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}

	public String getReward() {
		return reward;
	}

	public void setReward(String reward) {
		this.reward = reward;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getContactperson() {
		return contactperson;
	}

	public void setContactperson(String contactperson) {
		this.contactperson = contactperson;
	}

	public String getContactnumber() {
		return contactnumber;
	}

	public void setContactnumber(String contactnumber) {
		this.contactnumber = contactnumber;
	}

	@Override
	public String toString() {
		return "Challenger [id=" + id + ", location=" + location + ", sportsname=" + sportsname + ", teamname="
				+ teamname + ", reward=" + reward + ", time=" + time + ", date=" + date + ", contactperson="
				+ contactperson + ", contactnumber=" + contactnumber + ", isAccepted=" + isAccepted + "]";
	}

	
	
}
