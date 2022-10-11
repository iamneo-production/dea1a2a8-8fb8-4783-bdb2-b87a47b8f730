package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Signup;
import com.example.demo.repository.SignupRepository;

@Service
public class SignupService {
	
	@Autowired 
	private SignupRepository signuprepo;

	public Signup saveSignup(Signup signup) {
		// TODO Auto-generated method stub
		return null;
	}
		
	
}
