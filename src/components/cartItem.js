import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { removeFromCart } from '../actions/index'
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
                <tr className='cartItem'>
                    <td>
                        <img src={"../images/"+this.props.filename} />
                    </td>
                    <td>
                        <div>{this.props.name}</div>
                        <div>${(this.props.price/100).toFixed(2)}</div>
                    </td>
                    <td><div onClick={() => this.props.removeFromCart(this.props)} className="exitButton">x</div></td>
                </tr>
        );
    }
}

function mapStateToProps(state){
    // console.log('cartitem mapStateToProps', state); 
    return {

	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({ removeFromCart: removeFromCart }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)