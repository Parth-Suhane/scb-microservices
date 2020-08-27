package com.cts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//Dependent class
@Service
public class BillingImpl {

	/*
	 *  Types of java objects
	 *  1.dependency object : never depends on any other object
	 *  2.dependent object  : always depends on dependency object
	 *  
	 *  //-----------------------------------------------------------
	 * 
	 * 
	 *  Issues with this design
	 *  ---------------------------
	 *  1. too many dependency object creations: 
	 *  	-> performance issue
	 *  	-> memory management issues
	 *  
	 *  Why this issue happened?
	 *  --------------------------
	 *  
	 *  -> Dependent class itself creating dependency object
	 *  
	 *  What is the solution to this issue?
	 *  --------------------------------------
	 *  -> do not create dependency obj in the dependent class directly
	 *  -> insted get the object using JNDI or any look up techniques
	 *  
	 *  problems with JNDI look up
	 *  -----------------------------
	 *  -> JNDI location is tightly coupled with dependent object
	 *  
	 *  What is the best solution?
	 *  -----------------------------
	 *  -> Do not look up/create or find, instead ask some one to inject/pass --> IoC (Inversion of control)
	 *  
	 *  How to implement IOC
	 *  -----------------------------------
	 *  -> Using Dependency Injection
	 * 
	 *  Using Dependency Injection
	 *  -----------------------------
	 *  what is Dependency injection?
	 *  Injecting a dependency object to dependent class object
	 *  
	 *  How many ways DI can be implemented?
	 *  1. using setter based DI
	 *  2. using constructor based DI
	 *  
	 *   1. using setter based DI
	 *   ---------------------------
	 *   1. Create Dependency object reference
	 *   2. Create setter for the dependency reference
	 *   
	 *  
	 *  
	 * 
	 * 
	 */
	
	
	@Autowired
	private PriceMatrix price;


	public double getTotal(String[] cart) {
		

		double total = 0.0;

		//PriceMatrixImpl price = new PriceMatrixImpl(); // dependency obj
		
		for (String itemCode : cart) {
			total = total + price.getItemPrice(itemCode);
		}

		return total;

	}

}
