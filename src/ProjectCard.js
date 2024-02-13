import React from 'react';
import { connect } from 'react-redux';

const ProjectCard = ({ name, price, addToCart, removeFromCart }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartCount: state.project.cartCount
});

const mapDispatchToProps = dispatch => ({
  addToCart: () => dispatch({ type: 'ADD_TO_CART' }),
  removeFromCart: () => dispatch({ type: 'REMOVE_FROM_CART' })
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);

