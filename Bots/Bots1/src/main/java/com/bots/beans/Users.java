package com.bots.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Users {

	@Id
	@GeneratedValue
	private long id;
	private String firstname;
	private String lastname;
	private String email;
	private String mobile;
	private String role;
	private String pass;
	
   	//@OneToMany(mappedBy="doctor",cascade=CascadeType.ALL)
   
  // 	@JsonIgnoreProperties("user")
	//@OneToMany(mappedBy = "user",targetEntity = GroundBooking.class,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	//List<GroundBooking> user_id = new ArrayList<GroundBooking>();
	//Set<GroundBooking> gd;
	
	public Users() {
		super();
	}
		
	
	public Users(long id, String firstname, String lastname, String email, String mobile) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.mobile = mobile;

	}

	public Users(long id, String firstname, String lastname, String email, String mobile, String role, String pass) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.mobile = mobile;
		this.role = role;
		this.pass = pass;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", mobile=" + mobile + ", role=" + role + "]";
	}

	/**
	 *
	 */
	@Override
	public boolean equals(Object obj) {
		if (null == obj)
			return false;
		Users u = (Users) obj;
		if (null == u.getEmail() || null == u.getPass())
			return false;

		return u.getEmail().equals(this.getEmail()) && u.getPass().equals(this.getPass());
	}

}
