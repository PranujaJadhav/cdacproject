import axios from "axios";

const USER_API_BASE_URL = "http://localhost:9090";

class ApiService {
  authenticateUser(email, password) {
    //return axios.post(USER_API_BASE_URL+'/authenticate?email='+email+"&password="+password);
    return axios.post(USER_API_BASE_URL + "/users/authenticate", {
      email: email,
      password: password,
    });
  }

  addUser(user) {
    return axios.post(USER_API_BASE_URL + "/users/adduser", user);
  }

  sendOrder(order, uid) {
    return axios.post(USER_API_BASE_URL + "/users/placeorder/" + uid, order);
  }

  checkEmail(email) {
    return axios.post(USER_API_BASE_URL + "/users/checkUser/" + email);
  }
  deleteById(id) {
    return axios.delete(USER_API_BASE_URL + "/users/checkUser/" + id);
  }
  getRetailerItems(id) {
    return axios.post(USER_API_BASE_URL + "/retailer/getitemlist/" + id);
  }
  updateQuantity(proid, quantity, userid) {
    return axios.post(USER_API_BASE_URL + "/retailer/updateQuantity", {
      id: proid,
      quantity: quantity,
      userid: userid,
    });
  }
  wholesalerupdateQuantity(proid, quantity, rate, userid) {
    return axios.post(USER_API_BASE_URL + "/wholesaler/updateQuantity", {
      id: proid,
      quantity: quantity,
      rate: rate,
      userid: userid,
    });
  }
  deleteProduct(id, userid) {
    return axios.post(USER_API_BASE_URL + "/retailer/deleteProduct/", {
      id: id,
      userid: userid,
    });
  }
  wholesalerdeleteProduct(id, userid) {
    return axios.post(USER_API_BASE_URL + "/wholesaler/deleteProduct/", {
      id: id,
      userid: userid,
    });
  }

  addItem(addedProduct) {
    return axios.post(USER_API_BASE_URL + "/retailer/addItem", addedProduct);
  }
  wholesaleraddItem(addedProduct) {
    return axios.post(
      USER_API_BASE_URL + "/wholesaler/addItemWholesaler",
      addedProduct
    );
  }
  getWholesalerItems(id) {
    return axios.post(USER_API_BASE_URL + "/wholesaler/getitemlist/" + id);
  }

  getWholesalerList(id) {
    return axios.post(USER_API_BASE_URL + "/wholesaler/allwholesaler/" + id);
  }

  placeOrder(orderplace) {
    return axios.post(USER_API_BASE_URL + "/order/placeorder/", orderplace);
  }
  getAllOrders(id) {
    return axios.post(USER_API_BASE_URL + "/order/getallorders/" + id);
  }
  wholesalerGetAllOrders(id) {
    return axios.post(USER_API_BASE_URL + "/order/wholesalergetorders/" + id);
  }
  updateReview(id, review, wholesaler, retailer, product, rate, quantity) {
    return axios.post(USER_API_BASE_URL + "/order/updatereview/", {
      id: id,
      review: review,
      wholesalerid: wholesaler,
      retailerid: retailer,
      productid: product,
      rate: rate,
      quantity: quantity,
    });
  }
  updateStatus(id, status, wholesaler, retailer, product, rate, quantity) {
    return axios.post(USER_API_BASE_URL + "/order/updatestatus/", {
      id: id,
      status: status,
      wholesalerid: wholesaler,
      retailerid: retailer,
      productid: product,
      rate: rate,
      quantity: quantity,
    });
  }
  updateWholesalerReview(
    id,
    review,
    wholesaler,
    retailer,
    product,
    rate,
    quantity
  ) {
    return axios.post(USER_API_BASE_URL + "/order/updatewholesalerreview/", {
      id: id,
      review: review,
      wholesalerid: wholesaler,
      retailerid: retailer,
      productid: product,
      rate: rate,
      quantity: quantity,
    });
  }
  getFilteredRetailerProducts(retailerId) {
    return axios.post(
      USER_API_BASE_URL + "/retailer/getfilteredproducts/" + retailerId
    );
  }
  cancelOrder(id, status, wholesaler, retailer, product, rate, quantity) {
    return axios.post(USER_API_BASE_URL + "/order/cancelorder/", {
      id: id,
      status: status,
      wholesalerid: wholesaler,
      retailerid: retailer,
      productid: product,
      rate: rate,
      quantity: quantity,
    });
  }
  // ----------------------------------------ADMIN-----------------------------
  getWholesalerListforAdmin() {
    return axios.post(USER_API_BASE_URL + "/admin/getwholesalerlist/");
  }

  getretailerListforAdmin() {
    return axios.post(USER_API_BASE_URL + "/admin/getretailerlist/");
  }

  getreviewListforAdmin() {
    return axios.post(USER_API_BASE_URL + "/admin/getleastreview/");
  }

  getcountforadmin() {
    return axios.post(USER_API_BASE_URL + "/admin/getcount/");
  }
  deletewholesaleronreview(id) {
    return axios.post(USER_API_BASE_URL + "/admin/deleteUser/", {
      id: id,
      // userid: userid,
    });
  }

  // deletewholesaleronreview(id) {
  //   return axios.delete(USER_API_BASE_URL + "/users/checkUser/" + id);
  // }

  deleteretaileronreview(id) {
    return axios.post(USER_API_BASE_URL + "/admin/deleteUser/", {
      id: id,
      // userid: userid,
    });
  }

  deletelessonreview(id) {
    return axios.delete(USER_API_BASE_URL + "/admin/deleteUser/", {
      id: id,
      // userid: userid,
    });
  }

  // ------------------------------------------------------ADMIN ENDS_------------------------
}

export default new ApiService();
