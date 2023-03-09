package com.app.service;

import java.util.List;

import com.app.pojos.Order;

public interface IOrderService {

	Order placeorder(Order orderplace);

	List<Order> getallorders(int id);

	Order updatereview(int review, int wholesalerid, int retailerid, int productid, int rate,int quantity);

	List<Order> getwholesalerorders(int id);

	Order updatestatus(int status, int wholesalerid, int retailerid, int productid, int rate, int quantity);

	Order updatewholesalerreview(int review, int wholesalerid, int retailerid, int productid, int rate, int quantity);

	
}
