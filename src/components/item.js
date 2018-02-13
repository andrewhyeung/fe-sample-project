import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
        <div className='Item'>   
            <img src={"../images/"+this.props.filename}/>
            <p>{this.props.name}</p>
            <p>${this.props.price}</p>
            <button>Add to Cart</button>
        </div>
    );
  }
}
