package com.cts;

public class Test {

	public static void main(String[] args) {

		String[] cart1 = { "I001", "I002", "I003" };
		String[] cart2 = { "I001", "I002" };
		
		//--------------------------------------------
		PriceMatrix price=new PriceMatrixImpl(); // Dependency object
		//--------------------------------------------

		BillingImpl biller = new BillingImpl(); // Dependent object
		
		biller.setPrice(price);  // Injecting Dependency object 'price' to dependent object 'biller' : DI
		
		double total = biller.getTotal(cart1);

		System.out.println("Cart1 Total:: " + total);
		
		total = biller.getTotal(cart2);

		System.out.println("Cart2 Total:: " + total);

	}

}
