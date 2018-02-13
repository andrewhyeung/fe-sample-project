import React, { Component } from 'react';
import Header from './header';
import Products from '../../product-payload'; 
import Item from './item';

export default class App extends Component {
    constructor(){
        super(); 
    }
    render() {
        return (
            <div>
                <div className="blur-filter"></div>
                <Header />
                <div className="message">Shop our featured collection</div>
                <div className="grid-container">{Products.products.map((data)=>{
                    return <Item key={data.price} filename={data.filename} price={data.price} name={data.name} />
                })}
                </div>
            </div>
        );
    }
}
