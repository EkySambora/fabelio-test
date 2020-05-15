import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const baseUrl = "http://www.mocky.io/v2/5c9105cb330000112b649af8"

const Dummy = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        async function fetchData() {
            const res = await Axios.get(baseUrl)
            const dt = await res.data.products
            // setProducts(state => ({ ...state, products: dt }));
            setProducts(dt)
        }
        fetchData()
    });

    return(
        <div>
            { products && products.map(item => <h2>{item.name}</h2>) }
        </div>
    );
}

// class Dummy extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             products : []
//          }
//     }

//     async componentDidMount(){
//         const res = await Axios.get(baseUrl)
//         const dt = await res.data.products
//         this.setState({ products: dt })
//     }
//     render() { 
//         return ( 
//             <div>
//                 {this.state.products.map((res) => <Title>{res.name}</Title>)}
//             </div>
//         );
//     }
// }
 
export default Dummy;