package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.app.pojos.Products;

import com.app.pojos.Wholesaler_Product;

//import com.app.pojo.User;

public interface WholesalerRepository extends JpaRepositoryImplementation<Wholesaler_Product, Integer> {
//
//	wholesaler_Product findByEmailAndPassword(String email, String password);
//
//	Optional<wholesaler_Product> findByEmail(String email);
//	

	List<Wholesaler_Product> findAll();

	List<Wholesaler_Product> findByWholesalerId(int id);

	Wholesaler_Product findByProductIdAndWholesalerId(int id, int userid);

	List<Wholesaler_Product> findByProductId(int proid);

}
