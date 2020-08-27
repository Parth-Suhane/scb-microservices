package com.cts;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Test {

	public static void main(String[] args) {

		String[] cart1 = { "I001", "I002", "I003" };
		String[] cart2 = { "I001", "I002" };
		
		ApplicationContext ac=new AnnotationConfigApplicationContext(AppConfig.class);
		
		//--------------------------------------------
		//PriceMatrix price=new PriceMatrixImpl(); // Dependency object
		//--------------------------------------------
		
		BillingImpl biller = ac.getBean(BillingImpl.class);
		

		//BillingImpl biller = new BillingImpl(); // Dependent object
		
	//	biller.setPrice(price);  // Injecting Dependency object 'price' to dependent object 'biller' : DI
		
		double total = biller.getTotal(cart1);

		System.out.println("Cart1 Total:: " + total);
		
		total = biller.getTotal(cart2);

		System.out.println("Cart2 Total:: " + total);

	}

}
