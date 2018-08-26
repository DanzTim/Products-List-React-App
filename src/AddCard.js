import React, { Component } from 'react';

class AddCard extends Component {

  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(event){
    event.preventDefault();
	
	if(isNaN(this.priceInput.value)){ 
		alert("Must input numbers");
	} else {
		this.props.onAdd(this.nameInput.value, this.priceInput.value);
	}
	
    this.nameInput.value = '';
    this.priceInput.value = '';
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <h3> Add Card </h3>
        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
        <input placeholder="Price" ref={priceInput => this.priceInput = priceInput}/>
        <button>Add</button>
        <hr />
      </form>
    );
  }
}

export default AddCard;
