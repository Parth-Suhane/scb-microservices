package com.cts.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.cts.product.dao.ProductDao;
import com.cts.product.entity.Product;

@SpringBootApplication
@EnableTransactionManagement
public class BootJpaApplication {

	public static void main(String[] args) {
		
		
		 ApplicationContext ac= SpringApplication.run(BootJpaApplication.class, args);
		 ProductDao prodDao = ac.getBean(ProductDao.class);
		 
		 Product prod=new Product();
		 prod.setId(10);
		 prod.setName("Laptop");
		 prod.setDescription("Intel I7");
		 prod.setPrice(56000);
		 
		 
		 prodDao.save(prod);
		 
		 System.out.println("---- done ----");
	}

}
