package com.cts.product;

import java.time.LocalDate;
import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cts.product.dao.ProductDao;
import com.cts.product.entity.Product;

@SpringBootApplication
public class BootDataJpaApplication {

	public static void main(String[] args) {
		ApplicationContext ac= SpringApplication.run(BootDataJpaApplication.class, args);
		ProductDao prodDao = ac.getBean(ProductDao.class);
		
		Product p1=new Product("Pen", 100, "Red Ink", LocalDate.of(2020, 8, 28));
		Product p2=new Product("Book", 120, "white pages", LocalDate.of(2020, 8, 28));
		Product p3=new Product("Mouse", 1200, "wirelessss", LocalDate.of(2020, 8, 28));
		Product p4=new Product("Desktop", 25400, "Dell", LocalDate.of(2020, 8, 28));
		Product p5=new Product("Pen Drive", 8700, "Sony 16GB", LocalDate.of(2020, 8, 28));

        //prodDao.saveAll(Arrays.asList(p1,p2,p3,p4,p5));
		
		
		
		
		prodDao.findAll().forEach(product->{
			System.out.println(product.getId());
			System.out.println(product.getName());
			System.out.println(product.getPrice());
			System.out.println(product.getDescription());
			System.out.println("-----------------------------");
		});
		
		
		//Product prod=prodDao.findById(10).orElse(null);
		System.out.println("=======================================");
		
		prodDao.findByNameLike("%e%").forEach(product->{
			System.out.println(product.getId());
			System.out.println(product.getName());
			System.out.println(product.getPrice());
			System.out.println(product.getDescription());
			System.out.println("-----------------------------");
		});
		
		
	System.out.println("##############################################");
	
	prodDao.displayAllProducts().forEach(product->{
		System.out.println(product.getId());
		System.out.println(product.getName());
		System.out.println(product.getPrice());
		System.out.println(product.getDescription());
		System.out.println("-----------------------------");
	});
		
		
		
	}

}
