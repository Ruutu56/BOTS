package com.bots.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bots.beans.PlayerFinder;
import com.bots.dao.PlayerFinderDao;

@Service
public class PlayerFinderServiceImpl{

	@Autowired
	PlayerFinderDao playerFinderDao;

	public List<com.bots.beans.PlayerFinder> displayAll() {
		return playerFinderDao.findAll();
	}

	public void addPlayerFinder(PlayerFinder p) {
		 playerFinderDao.save(p);
	}



//	@Override
//	public void addPlayerFinder(PlayerFinder p) {
//		playerFinderDao.save(p);
//		
//	}

//	@Override
//	public PlayerFinder getById(long id) {
//		return playerFinderDao.getById(id);
//		
//	}



	
	


}
