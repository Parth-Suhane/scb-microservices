package com.cts.product.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cts.product.entity.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {

	List<Product> findByNameLike(String name);
	
	@Query(name = "dp",value ="from Product" )
	List<Product> displayAllProducts();
	
	List<Product> findProductByPriceBetween(double startRange,double endRange);
	
	
	
	
	
	
	
	
	
}