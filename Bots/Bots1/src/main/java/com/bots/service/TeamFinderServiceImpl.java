package com.bots.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bots.beans.TeamFinder;
import com.bots.dao.TeamFinderDao;

@Service
public class TeamFinderServiceImpl{

	@Autowired
	TeamFinderDao teamFinderDao;

	public void addPost(TeamFinder team) {
		teamFinderDao.save(team);
		
	}

	public List<TeamFinder> displayAll() {
		return teamFinderDao.findAll();
	}

	public TeamFinder displayById(long id) {
		System.out.println(id);
		return teamFinderDao.getById(id);
	}

	

	
	
	
}
