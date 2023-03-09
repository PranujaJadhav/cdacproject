package com.app.dto;

public class RequestReview {

private int review;
private int wholesalerid;
private int retailerid;
private int productid;
private int rate;
private int quantity;
public RequestReview(int review, int wholesalerid, int retailerid, int productid, int rate,int quantity) {
	super();
	this.review = review;
	this.wholesalerid = wholesalerid;
	this.retailerid = retailerid;
	this.productid = productid;
	this.rate = rate;
	this.quantity=quantity;
}
public int getReview() {
	return review;
}
public void setReview(int review) {
	this.review = review;
}
public int getWholesalerid() {
	return wholesalerid;
}
public void setWholesalerid(int wholesalerid) {
	this.wholesalerid = wholesalerid;
}
public int getRetailerid() {
	return retailerid;
}
public void setRetailerid(int retailerid) {
	this.retailerid = retailerid;
}
public int getProductid() {
	return productid;
}
public void setProductid(int productid) {
	this.productid = productid;
}
public int getRate() {
	return rate;
}
public void setRate(int rate) {
	this.rate = rate;
}

public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
@Override
public String toString() {
	return "RequestReview [review=" + review + ", wholesalerid=" + wholesalerid + ", retailerid=" + retailerid
			+ ", productid=" + productid + ", rate=" + rate + ", quantity=" + quantity + "]";
}



}




