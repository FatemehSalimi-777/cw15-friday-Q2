import React, { Component } from 'react';
import './list.css';

class List extends Component {
    state = {  } 
    render() {
        const {product} = this.props;
        const test = product.filter((item,index)=>index<6);
        return (
            <table>
            
            {test.map((item)=>{
                const {name,discription,price} = item;
                return (
                    <tr>
                        <td>{name}</td>
                        <td>{discription}</td>
                        <td>{price}</td>
                    </tr>
                )
            })}
            </table>
        );
    }
}
 
export {List};