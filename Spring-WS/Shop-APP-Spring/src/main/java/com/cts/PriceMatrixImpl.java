package com.cts;

import org.springframework.stereotype.Repository;

//Dependency
@Repository
public class PriceMatrixImpl implements PriceMatrix {
	
	public PriceMatrixImpl() {
		System.out.println("-- PriceMatrixImpl object created..");
	}
	
	@Override
	public double getItemPrice(String itemCode) {
		// code to connect to DB and fetch item price of given itemCode
		return 100.00;
	}

}
