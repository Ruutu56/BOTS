package com.bots.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bots.beans.Challenger;
import com.bots.dao.ChallengerDao;

@Service
public class ChallengerServiceImpl {

	@Autowired
	ChallengerDao challengerDao;

	public void addChallenge(Challenger c) {
		challengerDao.save(c);
		
	}

	public List<Challenger> getChallenge() {
		return challengerDao.findAll();
	}
	
	
	public Challenger editChallanger(long id) {
		Challenger ch = challengerDao.findById(id).get();
		
		ch.setIsAccepted(true);
		
		return challengerDao.save(ch);
		
	}
	
}
