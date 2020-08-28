package com.cts.product.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.cts.product.entity.Product;

@Repository
public class ProductDaoImpl implements ProductDao {
	
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional()
	public Product save(Product product) {
		em.persist(product);
		return product;
	}
	
	@Override
	@Transactional
	public List<Product> findAll(){
		return em.createQuery("from Product").getResultList();
	}
	
	@Override
	@Transactional
	public Product find(int id) {
		return em.find(Product.class, id);
	}
	
	
	
	
	
	

}
