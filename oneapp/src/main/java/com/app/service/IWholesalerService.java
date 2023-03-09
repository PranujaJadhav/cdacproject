package com.app.service;

import java.util.List;

import com.app.pojos.Retailer_Product;
import com.app.pojos.Wholesaler_Product;

public interface IWholesalerService {

List<Wholesaler_Product> getWholesalerItemList(int id);
	
	
	
	
	
	List<Wholesaler_Product> getAllItemList();
//	Wholesaler_Product updateQuantity(int id, int quantity);
	
	Wholesaler_Product addNewItemToList(Wholesaler_Product newAddedItem);
	
	Wholesaler_Product deleteItem(int id,int userid);

	Wholesaler_Product updateQuantity(int id, int quantity, int userid);

	List<Wholesaler_Product> getWholesalerList(int proid);
}
