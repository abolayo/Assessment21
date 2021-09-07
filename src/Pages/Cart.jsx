import React from "react";
import kfc from "../images/fast-food.svg";
import refuel from "../images/vegetables_drinks.svg";
import max from "../images/resturant.svg";
import bike from "../images/drinks_cocktails.svg";
import "../styles/cart.css";
import PropTypes from 'prop-types';
import { Row, Col, Card } from "react-bootstrap";

  const goods = [
    {
      id: 1,
      image: kfc,
      type: "KFC- King Bucket",
      price: 4000,
      quantity: 1
    },
    {
      id: 2,
      image: refuel,
      type: "Refuel Max",
      price: 1000,
      quantity: 1
    },
    {
      id: 3,
      image: max,
      type: "Refuel Max",
      price: 1500,
      quantity: 1
    },
    {
      id: 4,
      image: bike,
      type: "Delivery fee",
      price: 1200,
    },
  ];

  function Header(props) {
    return (
        <div className="header">
          <h1>{goods.type}</h1>
        </div>
    );
  }
  
  Header.propTypes = {
    type: PropTypes.string.isRequired
    
  };
  
  function Goods(props) {
    const goods = [
      {
        id: 1,
        image: kfc,
        type: "KFC- King Bucket",
        price: 4000,
        quantity: 1
      },
      {
        id: 2,
        image: refuel,
        type: "Refuel Max",
        price: 1000,
        quantity: 1
      },
      {
        id: 3,
        image: max,
        type: "Refuel Max",
        price: 1500,
        quantity: 1
      },
      {
        id: 4,
        image: bike,
        type: "Delivery fee",
        price: 1200,
      },
    ];
    return (
      <div className="product" key={goods.id}>
        <Row xs={1} md={3} className="gcards">
        {goods.map((good) => (
        <Col xs={12} md={6} xl={3}>
        <img className="product-image" src={goods.image} alt=" hello"/>
        <div className="product-qty">
          <Qty 
            quantity={good.quantity} 
            onChange={good.onQtyChange} 
          />
        </div>
        <p className="product-title">
          <span>{goods.title}</span>
        </p>
        <p className="product-price">#{goods.price}</p>
      </Col>
      ))}
    </Row>
  </div>
);
}
     
Goods.propTypes = {
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onQtyChange:PropTypes.func.isRequired
  };
 
  function Qty(props) {
    return (
      <div className="qty">
        <button 
          className="qty-button plus"
          onClick={() => goods.onChange(+1)}
        >
          +
        </button>
        <div className="qty-num">{props.quantity}</div>
        <button 
          onClick={() => goods.onChange(-1)}
          className="qty-button mius"
        >
          -
        </button>
      </div>
    );
  }
  
  Qty.propTypes = {
    quantity: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  };
  
  class GiftWrap extends React.Component {
    render() {
      return (
        <div className="gift-wrap">
          <input 
            onChange={this.props.onAdd}
            checked={this.props.wrap}
            id="checkbox"
            type="checkbox" />
          <label htmlFor="checkbox">
            {this.props.label}
          </label>
        </div>
      );
    }
  }
  
  
  class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        elapsedTime: 0,
      };
    }
    
   componentDidMount() {
      const deadline = Date.now() + this.props.expires * 1000;
      
      this.interval = setInterval(() => {
        this.setState((prevState, props) => ({
          elapsedTime: deadline - Date.now()
        }));
      }, 100);
    }
    
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    
    render() {
      let subtotal = this.props.products.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0);
      
      let seconds = Math.floor(this.state.elapsedTime / 1000);
      
      return (
        <div className="footer">
          <h2>Subtotal: ${subtotal}</h2>
          <h3>Expires in: {seconds}s</h3>
        </div>
      );
    }
  }
  
  Footer.propTypes = {
    products: PropTypes.array.isRequired,
    expires: PropTypes.number.isRequired
  };
  
  function Button(props) {
    return (
      <button className="expand">{props.text}</button>
    );
  }
  
  Button.propTypes = {
    text: PropTypes.string.isRequired
  };
  
  class Application extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: props.products,
        wrap: false
      };
    }
    
    onQtyChange(qty, key) {
      this.setState((prevState, props) => {
        let product = prevState.products.find(p => p.id === key);
        
        product.quantity += qty;
        
        if (product.quantity === 0) {
          let index = prevState.products.indexOf(product);
          prevState.products.splice(index, 1);
          
          let state = {
            products: prevState.products
          };
          
          if (product.id === props.giftwrap.id) {
            state.wrap = false;
          }
          
          return state;
        }
        
        return {
          products: prevState.products
        };
      });
    }
    
   onGiftWrap(product) {
      this.setState((prevState, props) => {
        if (!prevState.wrap) {
          prevState.products.push({
            id: props.giftwrap.id,
            title: props.giftwrap.title,
            price: props.giftwrap.price,
            image: props.giftwrap.image,
            quantity: 1
          });
          
          return {
            products: prevState.products,
            wrap: true
          };
        }
        
        let index = prevState.products.indexOf(props.giftwrap);
        prevState.products.splice(index, 1);
          
        return {
          products: prevState.products,
          wrap: false
        };
      });
    }
    
    render() {
      return (
        <div className="application">
          <Header title={this.props.title} />
          <div className="products">
            {this.state.products.map(product => (
              <Goods 
                title={product.title}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
                onQtyChange={qty => this.onQtyChange(qty, product.id)}
              />
            ))}
          </div>
          <Button text="Checkout" />
        </div>
      );
    }
  }
  
  Application.propTypes = {
    title: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quantity:PropTypes.number.isRequired
    })),
    giftwrap: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  };
  
  Application.defaultProps = {
    title: 'Shopping Cart'
  };
  export default Goods;
 