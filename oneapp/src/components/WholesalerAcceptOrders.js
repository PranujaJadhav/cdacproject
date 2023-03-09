import React, { Component } from "react";
import Card from "../cards/Card";
import Data from "../data/Data";
import cartList from "../cart/cartList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartAction } from "../redux/actions/CartAction";
import { incrementUnitsCartAction } from "../redux/actions/CartAction";
import { decrementUnitsCartAction } from "../redux/actions/CartAction";
import { deleteItemFromCart } from "../redux/actions/CartAction";
import Cart from "../cart/Cart";
import { Redirect } from "react-router";
import ApiService from "../services/ApiService";
import { Link } from "react-router-dom";
class WholesalerAcceptOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      quantity: 0,
      productName: "",
      proid: 0,
      threshold_limit: 0,
      allorders: [],
      wholesalerid: 0,
    };
    this.totalPrice = 0;
  }
  handleStatus = (
    id,
    status,
    wholesaler,
    retailer,
    product,
    rate,
    quantity
  ) => {
    console.log("id:" + id);
    console.log("status:" + status);
    console.log("wid:" + wholesaler);
    console.log("rid" + retailer);
    console.log("pid:" + product);
    console.log("rate" + rate);
    console.log("quantity--->" + quantity);
    // item.id,
    //   2,
    //   item.wholesaler.id,
    //   item.retailer.id,
    //   item.product.id,
    //   item.order_rate,
    //   item.order_quantity;
    ApiService.updateStatus(
      id,
      status,
      wholesaler,
      retailer,
      product,
      rate,
      quantity
    )
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        this.getAllOrders();
      })
      .catch((err) => {
        document.getElementById("error").innerText = "";
        console.log(err.toString());
      });
  };
  handleWholesalerReview = (
    id,
    review,
    wholesaler,
    retailer,
    product,
    rate,
    quantity
  ) => {
    ApiService.updateWholesalerReview(
      id,
      review,
      wholesaler,
      retailer,
      product,
      rate,
      quantity
    )
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        this.getAllOrders();
      })
      .catch((err) => {
        document.getElementById("error").innerText = "";
        console.log(err.toString());
      });
  };
  handleAdd = () => {
    this.props.history.push("/wholesaler");
  };
  componentDidMount() {
    this.getAllOrders();
  }
  getAllOrders = () => {
    // console.log("wholesalerList");
    // console.log("inside retailer home" + this.props.cart.user);
    const { cart, addToCartAction, total } = this.props;
    console.log("In cardList  ", cart);
    const { email } = cart;
    console.log("In cardList email ", email);
    const { user } = cart;
    console.log("In cardList id ", user.id);

    ApiService.wholesalerGetAllOrders(user.id)
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        console.log("wholesalerid" + user.id);
        return response;
      })
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            allorders: response.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };
  render() {
    const { error, isLoaded, allorders, handleAdd, flag } = this.state;
    return (
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className=" col-md-4 col-lg-6 bg-image6">
            <div className="col-md-12 col-lg-12">
              <div className="login d-flex align-items-right py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-12 mx-auto">
                      <h4
                        className="col-lg-2"
                        style={{
                          color: "black",
                          backgroundColor: "white",
                          textAlign: "center",
                        }}
                      >
                        <b>
                          <u>Orders Received</u>
                        </b>
                      </h4>
                      <table className="table table-sm table-dark text-center ">
                        <thead className="thead-dark">
                          <tr>
                            <th colSpan="2">Action</th>
                            {/* <th>Status</th> */}
                            <th>OrderDate</th>
                            <th>Retailer</th>
                            <th>Contact</th>
                            <th colSpan="4">Delivery Address</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Review</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allorders.map((item) => (
                            <>
                              {item.status !== 2 ? (
                                <tr key={item.id}>
                                  <td>
                                    {item.status === 1 ? (
                                      <button
                                        className="btn btn btn-outline-warning ml-2 "
                                        // onClick={() => {
                                        //   this.setState({
                                        //     wholesalerid: item.wholesaler.id,
                                        //   });
                                        //   this.handleQuantity(this.state.quantity);
                                        //   this.orderProduct(item.wholesaler.id);
                                        // }}
                                        onClick={() => {
                                          this.handleStatus(
                                            item.id,
                                            0,
                                            item.wholesaler.id,
                                            item.retailer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        Approve
                                      </button>
                                    ) : (
                                      <>
                                        {item.status === 3 ? (
                                          <button
                                            className="btn btn-success ml-2 "
                                            // onClick={() => {
                                            //   this.setState({
                                            //     wholesalerid: item.wholesaler.id,
                                            //   });
                                            //   this.handleQuantity(this.state.quantity);
                                            //   this.orderProduct(item.wholesaler.id);
                                            // }}
                                          >
                                            Delivered
                                          </button>
                                        ) : (
                                          <button
                                            className="btn btn-warning ml-2 "
                                            // onClick={() => {
                                            //   this.setState({
                                            //     wholesalerid: item.wholesaler.id,
                                            //   });
                                            //   this.handleQuantity(this.state.quantity);
                                            //   this.orderProduct(item.wholesaler.id);
                                            // }}
                                          >
                                            Approved
                                          </button>
                                        )}
                                      </>
                                    )}
                                  </td>
                                  <td>
                                    {item.status === 0 || item.status === 3 ? (
                                      <button
                                        className="btn btn btn-danger ml-2 "
                                        disabled
                                        // onClick={() => {
                                        //   this.setState({
                                        //     wholesalerid: item.wholesaler.id,
                                        //   });
                                        //   this.handleQuantity(this.state.quantity);
                                        //   this.orderProduct(item.wholesaler.id);
                                        // }}
                                        // onClick={() => {
                                        //   this.handleStatus(
                                        //     item.id,
                                        //     2,
                                        //     item.wholesaler.id,
                                        //     item.retailer.id,
                                        //     item.product.id,
                                        //     item.order_rate,
                                        //     item.order_quantity
                                        //   );
                                        // }}
                                      >
                                        Reject
                                      </button>
                                    ) : (
                                      <button
                                        className="btn btn btn-danger ml-2 "
                                        // disabled
                                        // onClick={() => {
                                        //   this.setState({
                                        //     wholesalerid: item.wholesaler.id,
                                        //   });
                                        //   this.handleQuantity(this.state.quantity);
                                        //   this.orderProduct(item.wholesaler.id);
                                        // }}
                                        onClick={() => {
                                          this.handleStatus(
                                            item.id,
                                            2,
                                            item.wholesaler.id,
                                            item.retailer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        Reject
                                      </button>
                                    )}
                                  </td>

                                  <td>{item.orderdate}</td>
                                  <td>{item.retailer.name}</td>
                                  <td>{item.retailer.mobileNo}</td>
                                  <td colSpan="4">
                                    {
                                      // item.retailer.address.addressLine1 +
                                      //   ", " +
                                      //   item.retailer.address.addressLine2 +
                                      //   ", " +
                                      item.retailer.address.city +
                                        ", " +
                                        item.retailer.address.state
                                    }
                                  </td>
                                  <td>{item.product.productName}</td>
                                  <td>
                                    Rs.
                                    {item.order_rate + "/" + item.product.unit}
                                  </td>
                                  <td>
                                    {item.order_quantity +
                                      " " +
                                      item.product.unit}
                                  </td>
                                  <td>
                                    Rs.{item.order_rate * item.order_quantity}
                                  </td>
                                  <td>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 1 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="1"
                                        onClick={() => {
                                          this.handleWholesalerReview(
                                            item.id,
                                            1,
                                            item.wholesaler.id,
                                            item.retailer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 2 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="2"
                                        onClick={() => {
                                          this.handleWholesalerReview(
                                            item.id,
                                            2,
                                            item.wholesaler.id,
                                            item.retailer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 3 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="3"
                                        onClick={() => {
                                          this.handleWholesalerReview(
                                            item.id,
                                            3,
                                            item.wholesaler.id,
                                            item.retailer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 4 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="4"
                                        onClick={() => {
                                          this.handleWholesalerReview(
                                            item.id,
                                            4,
                                            item.wholesaler.id,
                                            item.retailer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                    <span>
                                      <button
                                        className={
                                          item.creview >= 5 ? "star" : ""
                                        }
                                        type="submit"
                                        name="rating[rating]"
                                        value="5"
                                        onClick={() => {
                                          this.handleWholesalerReview(
                                            item.id,
                                            5,
                                            item.wholesaler.id,
                                            item.retailer.id,
                                            item.product.id,
                                            item.order_rate,
                                            item.order_quantity
                                          );
                                        }}
                                      >
                                        &#9734;
                                      </button>
                                    </span>
                                  </td>
                                  {/* <td>
                                <input
                                  type="number"
                                  style={{
                                    width: "30per",
                                    height: "10per",
                                    textAlign: "center",
                                  }}
                                  placeholder="enter quantity"
                                  onChange={(e) => {
                                    console.log(e);
                                    // this.handleQuantity(e.target.value);
                                    this.setState({
                                      quantity: e.target.value,
                                    });
                                    // this.setState.quan(e.target.value);
                                    // console.log("Testing");
                                    // console.log(e.target.value);
                                  }}
                                />
                              </td> */}
                                  {/* <td>{item.threshold_limit}</td> */}
                                  {/* <td>
                                <button
                                  className="btn btn-success ml-6"
                                  onClick={() => {
                                    this.handleQuantity(this.state.quantity);
                                    this.handleUpdate(item.product.id);
                                  }}
                                >
                                  update
                                </button>
                              </td> */}
                                  {/* <td>
                                <button
                                  className="btn btn-danger ml-6"
                                  onClick={() => {
                                    this.handleDelete(item.product.id);
                                  }}
                                >
                                  delete
                                </button>
                              </td> */}
                                </tr>
                              ) : (
                                ""
                              )}
                            </>
                          ))}
                        </tbody>
                      </table>
                      <button
                        className="btn btn-success col-lg-2"
                        onClick={this.handleAdd}
                      >
                        My Store
                      </button>
                      {/* <button
                        className="btn btn-success col-lg-2"
                        onClick={this.handleAdd}
                      >
                        shop more
                      </button>*/}
                      <span>&nbsp;&nbsp;</span>
                      <button
                        className="btn btn-success ml-2 col-lg-2"
                        onClick={this.getAllOrders}
                      >
                        Refresh
                      </button>
                      <span>&nbsp;&nbsp;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      // addToCartAction,
      // incrementUnitsCartAction,
      // decrementUnitsCartAction,
      // deleteItemFromCart,
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(WholesalerAcceptOrders);
