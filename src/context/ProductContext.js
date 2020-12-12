import Product1A from '../images/product1A.jpg';
import Product1B from '../images/product1B.jpg';
import Product1C from '../images/product1C.jpg';
import Product1D from '../images/product1D.jpg';
import Product2A from '../images/product2A.jpg';
import Product2B from '../images/product2B.jpg';
import Product3A from '../images/product3A.jpg';
import Product3B from '../images/product3B.jpg';
import Product3C from '../images/product3C.jpg';
import Product4A from '../images/product4A.jpg';
import Product4B from '../images/product4B.jpg';
import Product4C from '../images/product4C.jpg';
import Product4D from '../images/product4D.jpg';
import Product5A from '../images/product5A.jpg';
import Product5B from '../images/product5B.jpg';
import Product6A from '../images/product6A.jpg';
import Product6B from '../images/product6B.jpg';

import React, { Component, createContext } from 'react'
export const ProductContext = createContext();

export default class ProductContextProvider extends Component {
    state = {
        hasProduct: true,
        product: [
                {
                    id:1,
                    title:'FLUIDFLOW 2.0 SHOES',
                    price: 80, 
                    img: [
                        Product1A,
                        Product1B,
                        Product1C,
                        Product1D
                    ],
                    color: [
                        'Gray',
                        'Blue',
                        'White',
                        'Black'
                    ]
                },
                {
                    id:2,
                    title:'DAILY 3.0 SHOES',
                    price: 60, 
                    img: [
                        Product2A,
                        Product2B
                    ],
                    color: [
                        'Black',
                        'Gray'
                    ]
                },
                {
                    id:3,
                    title:'SUPERSTAR SHOES',
                    price: 85, 
                    img: [
                        Product3A,
                        Product3B,
                        Product3C
                    ],
                    color: [
                        'Black',
                        'Green',
                        'Red'
                    ]
                },
                {
                    id:4,
                    title:'Carman Salas Brown',
                    price: 10, 
                    img: [
                        Product4A,
                        Product4B,
                        Product4C,
                        Product4D
                    ],
                    color: [
                        'Pink',
                        'Yellow',
                        'Brown',
                        'Green'
                    ]
                },
                {
                    id:5,
                    title:'NMD_R1 SHOES',
                    price: 140, 
                    img: [
                        Product5A,
                        Product5B
                    ],
                    color: [
                        'Black',
                        'Gray'
                    ]
                },
                {
                    id:6,
                    title:'SAMBA VEGAN SHOES',
                    price: 80, 
                    img: [
                        Product6A,
                        Product6B
                    ],
                    color: [
                        'Black',
                        'White'
                    ]
                }
        ]
    }
    render() {

        return (
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>

        )
    }
}
