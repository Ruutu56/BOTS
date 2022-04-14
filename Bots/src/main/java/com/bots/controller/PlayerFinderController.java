package com.bots.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bots.beans.PlayerFinder;
import com.bots.service.PlayerFinderServiceImpl;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/playerfinder/")
public class PlayerFinderController {

	@Autowired
	PlayerFinderServiceImpl playerFinderImpl;
	
	@GetMapping("/findall")
	public List<PlayerFinder> displayAll(){
		return playerFinderImpl.displayAll();
	}
	
	@PostMapping("/postplayer")
	public void addPlayer(@RequestBody PlayerFinder p){
		playerFinderImpl.addPlayerFinder(p);

				
	}
	
	
	
}
