import React, { Component } from 'react';
import './App.css';
import AddCard from './AddCard';
import ProductItem from './ProductItem';

const products = [
  {
    name: 'Radeon RX580',
    price: '419'
  },
  {
    name: 'GeForce GTX 1060',
    price: '345'
  }//,
  // {
  //   name: 'Galax GTX 1050Ti',
  //   price: '222'
  // }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({products});
  }

  getProducts(){
    return this.state.products

  }

  onAdd(name, price){
    const products = this.getProducts();

    products.push({
      name,
      price
    });

    this.setState({products});
  }

  onDelete(name){

    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    console.log(filteredProducts);

    this.setState({products: filteredProducts});
  }

  onEditSubmit(name, price, originalName)
  {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }
    return product;
    });

    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <h1>Graphics Card Price List</h1>

        <AddCard
          onAdd={this.onAdd}
        />
        {
          this.state.products.map(product => { return (
              <ProductItem
                key = {product.name}
                name = {product.name}
                price = {product.price}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              /> ) } )
        }
      </div>
    );
  }
}

export default App;
