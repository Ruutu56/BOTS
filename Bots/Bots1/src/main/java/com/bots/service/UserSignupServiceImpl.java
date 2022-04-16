package com.bots.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bots.beans.GroundBooking;
import com.bots.beans.Users;
import com.bots.dao.UserSignupDao;

@Service
public class UserSignupServiceImpl{
	
	@Autowired
	UserSignupDao userSignupDao;
	
	
	public Users getUserId(String email) {
		
		return userSignupDao.findByEmail(email);
	}
	
	
	public void addUsers(Users u) {
		 userSignupDao.save(u);
	}


	public Users getById(long id) {
		return userSignupDao.getById(id);
	}
	 
	public String checkLogin(String email, String pass) {
		return userSignupDao.checkLogin(email, pass);
	}
	
	public List<Users> getAllUsers() {
		return userSignupDao.findAll();
	}
	
	/*

	 @Override
	public boolean validateUser(String email, String pass) {
		List<Users> users = userSignupDao.findAll();
		Users u = new Users();
		u.setEmail(email);
		u.setPass(pass);
		return users.contains(u);
	}


	@Override
	public int getUserid(String email, String password) {
		int i=userSignupDao.getUserid(email, password);
		return i;
	}*/

	
	
}
