import React, { Component } from 'react';
import Modal from './modal';
import {connect} from 'react-redux'; 
import Item from './item';
import CartItem from './cartItem';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalOpen : false
        }
    }
    render() {
        return (
            <header>
                <button className="headerButton" onClick = { () => this.openModal()}>Your Cart <span className="cart">{this.props.cart.length}</span></button>
                <div className="logo">
                    Cart.ly 
                </div>
                <span className="shop">Shop</span>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h1>Your Cart</h1>
                    <table>
                        <tbody>
                            {this.props.cart.map((item)=>{
                                return <CartItem key={item.price} filename={item.filename} name={item.name} price={item.price}/>
                            })}
                            <tr>
                                <td>
                                    <div>Total</div>
                                </td>
                                <td>
                                    <div>${this.props.total}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button" onClick={() => this.closeModal()}>Back</button>
                </Modal>
            </header>
        );
    }
    openModal(){
        this.setState({isModalOpen : true})
    }
    closeModal(){
        this.setState({isModalOpen : false})
    }
}

function mapStateToProps(state){
    console.log('state inside the cart', state.cart)
    let prices = state.cart.map((item)=>{
        return item.price
    })
    if(prices.length>0){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let totalPrice = prices.reduce(reducer);
        console.log('the total price', totalPrice) 
        const finalPrice= (totalPrice/100).toFixed(2)
        return {
            cart: state.cart, 
            total: finalPrice
        }
    }
    else {
        return {
            cart: state.cart, 
            total: 0
        }
    }
	
}


export default connect(mapStateToProps)(Header)