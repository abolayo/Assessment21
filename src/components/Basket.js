import React from "react";
import scooter from "../images/illustration_3.svg";
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const DeliveryFee = itemsPrice > 2000 ? 1000 : 1200;
  const totalPrice = itemsPrice + DeliveryFee;
  return (
    <div className="row">
      <h2>Cart Items</h2>
      <div className="row xs={1} center md={3}">
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row xs={1} center md={3}">
            <div className="col mb-4 xs={12} md={12} xl={2}">
              <img className="small" src={item.image} alt={item.name} />
            </div>
            <div className="col xs={12} md={12} xl={1}">
              <p> {item.name}</p>

              <p>
                {" "}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                {item.qty}
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
              </p>
            </div>

            <div className="col text-right xs={12} md={6} xl={3}">
              #{item.qty * item.price}
            </div>
            <hr></hr>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <div className="row center xs={1} md={3}">
              <div className="col mb-4 xs={12} md={12} xl={2}">
                <img
                  className="small"
                  src= {scooter}
                  alt="Delivery Fee"
                />
              </div>
              <div className="col xs={12} md={12} xl={1}">
                <div className="col">Delivery Fee</div>
              </div>
              <div className="col-2 text-right">#{DeliveryFee.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-2 text-right">#{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-2 text-right">
                <strong>#{totalPrice.toFixed(2)}</strong>
              </div>
            </div>

            <div className="row ">
              <div className="col xs={12} md={6} xl={3}">
                <button
                  className=" checkout"
                  onClick={() => alert("Implement Checkout!")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
