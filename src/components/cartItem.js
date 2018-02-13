import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { addToCart } from '../actions/index'
import { bindActionCreators } from 'redux'; 

class CartItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            filename: this.props.filename, 
            name: this.props.name, 
            price: this.props.price
        }
    }
    render() {
        return (
            <div className='cartItem'>   
                <img src={"../images/"+this.props.filename}/>
                <p>{this.props.name}</p>
                <p>${(this.props.price/100).toFixed(2)}</p>
                <button onClick={()=>this.props.addToCart(this.props)}>
                    Add to Cart
                </button>
            </div>
        );
    }
}

function mapStateToProps(state){
	return {
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({ addToCart: addToCart }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)