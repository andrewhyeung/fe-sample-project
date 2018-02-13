import React, { Component } from 'react';
import Modal from './modal'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalOpen : false
        }
    }
    render() {
        return (
            <header>
                <button className="headerButton" onClick = { () => this.openModal()}>Your Cart</button>
                <div className="logo">
                    Cart.ly 
                </div>
                <span className="shop">Shop</span>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h2>Your Cart</h2>
                    <p>Nothing in your cart, start shopping.</p>
                    <p><button onClick={() => this.closeModal()}>Close</button></p>
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
