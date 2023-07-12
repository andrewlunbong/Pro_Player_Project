package com.codeclan.example.proplayer;

import com.codeclan.example.proplayer.repository.TeamRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProplayerApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	TeamRepository teamRepository;

	@Test
	public void testBug(){
		teamRepository.findAll();
	}
}
