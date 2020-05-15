import React, { Component } from 'react';
import Axios from 'axios';
import Card from 'components/card';
import { 
  Container, 
  Box, 
  Header, 
  Products, 
  Loading,
  Checkboxes
} from './style';

import {createFilter} from 'react-search-input';
//https://github.com/enkidevs/react-search-input

const baseUrl = "https://www.mocky.io/v2/5c9105cb330000112b649af8";

 class App extends Component {
   constructor(props) {
    super(props);
      this.state = { 
        products: [],
        delivery_time:[],
        checkBoxes: false,
        furnitureStyles: [],
        newArrCheckBox:[],
        searchTerm: '',
        type: ''
      }
   }

  async componentDidMount(){
    const res = await Axios.get(baseUrl)
    const dt = await res.data
    const furnitureStyles = dt.furniture_styles
    this.setState({products: dt.products})

    let sortArr = Array.from(furnitureStyles).sort();
    this.setState({furnitureStyles: sortArr})

    this.mapDataDeliveryTime()
  }

  mapDataDeliveryTime = () => {
    let arr = []
    this.state.products.map((item) => {
      let changeNum = parseInt(item.delivery_time) 
      arr.push(changeNum)
      arr.sort((a, b) => a - b)
      
      return arr
    })
    // remove same value array
    let backToArray = Array.from(new Set(arr));

    return this.setState({delivery_time: backToArray})
  }

  showCheckBoxes = () => {
    this.setState({checkBoxes: !this.state.checkBoxes})
  }
  getValueCheck = (item, e)=>{
    let newArrCheckBox = this.state.newArrCheckBox;
    let addValue = item;
    
    
    if(e.target.checked ){
      newArrCheckBox.push(addValue);
      this.setState({newArrCheckBox:newArrCheckBox});
      this.setState({searchTerm: e.target.value})
    } else {
      newArrCheckBox.pop();
      this.setState({newArrCheckBox:newArrCheckBox});
      this.setState({searchTerm: e.target.value})
    }
  }

  renderCheckBox(){
    if(this.state.checkBoxes){
      return(
        <Checkboxes>
          {this.state.furnitureStyles.map((item,i)=> {
            return (
              <label key={i} className="container">{item}
                <input onChange={(e)=>this.getValueCheck(item,e)} type="checkbox" value={item} />
                <span className="checkmark"></span>
              </label>
            )
          })}
        </Checkboxes>
      )
    }
  }
  searchUpdated = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() { 

    const KEYS_TO_FILTERS = ['name', 'description', 'price', 'delivery_time', 'furniture_style'];
    const filteredProducts = this.state.products.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    
    return ( 
      <>
        <Container>
          <Box>
            <Header>

              <div className="search">
                <input type="text" placeholder="Search Furniture" data-set="seacrh" onChange={this.searchUpdated} />
              </div>

              <div className="filter">

                <div className="selectBox"  >
                  <input 
                    onClick={this.showCheckBoxes}
                    readOnly 
                    data-set="multiple"
                    type="text" 
                    placeholder="Furniture Style" 
                    value={this.state.newArrCheckBox.length ? this.state.newArrCheckBox : ''} 
                    />
                  { this.showCheckBoxes ? this.renderCheckBox() : ''}
                </div>

                <div className="Delivery">
                  <select multiple data-set="day" onChange={(e)=>this.searchUpdated(e)}>
                    <option value="">Delivery Time</option>
                    { this.state.delivery_time.map((item, i) => {
                      return(
                        <option key={i} value={item}>{item} Days</option>
                      )
                    })}
                  </select>
                </div>

              </div>
            </Header>     
            { this.state.products.length === 0 ? (
              <Loading><h5>Loading ...</h5></Loading>) : (
                <Products onClick={()=> this.setState({checkBoxes: false})}>
                  { filteredProducts.map((prod, i) => <Card key={i} products={prod} /> )}
                </Products>
              )
            }
          </Box>
        </Container>
      </>
    );
  }
 }
  
 export default App;
