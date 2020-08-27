package com.cts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class ShopAppBootApplication {

	public static void main(String[] args) {
		ApplicationContext ac= SpringApplication.run(ShopAppBootApplication.class, args);
		String[] cart1 = { "I001", "I002", "I003" };
		String[] cart2 = { "I001", "I002" };
		
		
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
