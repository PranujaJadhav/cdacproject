package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.app.pojos.Order;
import com.app.pojos.Products;

public interface OrderRepository extends JpaRepositoryImplementation<Order, Integer>{

	List<Order> findByRetailerId(int id);

	List<Order> findByWholesalerIdAndRetailerIdAndProductId(int wholesalerid, int retailerid, int productid);

	List<Order> findByWholesalerId(int id);

	
}
