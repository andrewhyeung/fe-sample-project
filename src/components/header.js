import React, { Component } from 'react';
import Modal from './modal';
import {connect} from 'react-redux'; 
import Item from './Item';
import CartItem from './cartItem'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalOpen : false
        }
    }
    renderCart(){
        this.props.cart.map((item)=>{
            console.log(item)
            return <Item key={item.price} filename={item.filename} price={item.price} name={item.name} />
        })
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
                        {this.props.cart.map((item)=>{
                            return <img src={"../images/"+item.filename}/>
                        })}
                        <hr></hr>
                        <div>Total</div>
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
	return {
		cart: state.cart
	}
}


export default connect(mapStateToProps)(Header)