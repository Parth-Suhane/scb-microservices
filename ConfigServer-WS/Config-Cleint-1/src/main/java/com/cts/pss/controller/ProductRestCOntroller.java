package com.cts.pss.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RefreshScope
public class ProductRestCOntroller {
	
	
	@Value("${name}")
	private String productName;
	
	@GetMapping("/app")
	public String getName() {
		return productName;
	}
	

}
