package com.bots.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bots.beans.Users;

@Repository
public interface UserSignupDao extends JpaRepository<Users, Long> {

	/*@Query(value="select u.user_id from users u where u.email=:email and pass=:password",nativeQuery = true)
    public int getUserid(String email, String password);*/

	@Query("select u.role from Users u where u.email=:email and u.pass=:pass")
	public String checkLogin(String email,String pass);
	
	@Query("select u.id from Users u where u.email=:email")
	public long getUserId(String email);
	
	public Users findByEmail(String email);
}
