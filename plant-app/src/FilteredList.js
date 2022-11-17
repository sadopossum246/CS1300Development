import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState , useRef} from "react"
import 'antd/dist/antd.css';
import DisplayList from "./DisplayList";
import React from "react";
import "./App.css";
import SortDropdown from "./components/SortDropdown"
import FilterDropdown from "./components/FilterDropdown"
// import { Button } from "antd";
import Button from 'react-bootstrap/Button';
import plantData from './data/plantData.json'
import FilterDropdown2 from "./components/FilterDropdown2";
import CartList from "./CartList";



export default class FilteredList extends React.Component{

    constructor(props) {

        super(props)

        this.state = {
            category: "none",
            price: "none",
            season: "none",
            total: 0,
            agg: [0,0,0,0,0,0,0,0,0,0,0,0],
            list: this.props.list,
            cartList:[]
        };

    

    }
    onSelectFilter = event => {
        this.setState({
            category: event
        })
        console.log(event)
    };

    onSelectFilter2 = event => {
        this.setState({
            season: event
        })
        console.log(event)
    }

    onSelectSortPrice = event => {
        this.setState({
            price: event
        })
        console.log(event)

        if(event === "none") {
            this.setState({list: plantData});
        } 
        else if (event === "lowHigh"){
            let lowHighSort = this.state.list;
            lowHighSort.sort((a,b) => a.price - b.price);
            this.setState({list: lowHighSort})

        }
        else if (event === "Highlow"){
            let highLowSort = this.state.list;
            highLowSort.sort((a,b) => b.price - a.price);
            this.setState({list: highLowSort})

        }
    };
    

    matchesPlantType = (item) => {
        // all items should be shown when no filter is selected
        if( this.state.category === "none" && this.state.season === "none") { 
            return true
        } 
        else if (this.state.category === item.category && this.state.season === item.season) {
            return true
        } 
        else if(this.state.category === "none" && this.state.season === item.season) {
            return true
        }
        else if(this.state.category === item.category && this.state.season === "none"){
            return true
        }
        else {
            return false
        }
    }
    
    sortByPrice = () => {
        if(this.state.price === "none") {
            this.setState({list: plantData});
        } 
        else if (this.state.price === "lowHigh"){
            let lowHighSort = this.state.list;
            lowHighSort.sort((a,b) => a.price - b.price);
            this.setState({list: lowHighSort})

        }
        else if (this.state.price === "Highlow"){
            let highLowSort = this.state.list;
            highLowSort.sort((a,b) => a.price - b.price);
            this.setState({list: highLowSort})

        }
    }

    addToCartButton =(item)=>{

        let cartListTemp = this.state.cartList
        console.log("AGG", this.state.agg[item.key])
        if(this.state.agg[item.key] === 0) {
            cartListTemp = [...cartListTemp, item]
            this.setState({
                cartList: cartListTemp
            })
        
        }
        
        let aggregator = this.state.agg
        console.log("item key", item.key)
        aggregator[item.key] = aggregator[item.key] + 1
        console.log("agg before", aggregator[item.key])
        this.setState({
            agg: aggregator
        })
        console.log(this.state.agg[item.key])

        let totalC = this.state.total
        totalC = totalC + item.price
        this.setState({
            total: totalC
        })
        console.log("total:", this.state.total)

        
    }

    removeItemButton = (item) => {
        //decrement the total quantity for this item by one
        let aggregator = this.state.agg
        console.log("item key", item.key)
        aggregator[item.key] = aggregator[item.key] - 1
        console.log("agg before", aggregator[item.key])
        this.setState({
            agg: aggregator
        })
        console.log(this.state.agg[item.key])

        //subtract the price of this item from the total
        let totalC = this.state.total
        totalC = totalC - item.price
        this.setState({
            total: totalC
        })

        let cartListTemp = this.state.cartList
       
       //if there is 0 quantity left for that item, remove it from the list
        if(this.state.agg[item.key] === 0) {
            //remove the item from cart
            let index = cartListTemp.indexOf(item)
            cartListTemp.splice(index, 1)
            this.setState({
                cartList:cartListTemp
            })
        }
    }

    clearAllItems = () => {
        this.setState({
            agg: [0,0,0,0,0,0,0,0,0,0,0,0],
            total: 0,
            cartList:[]
        })
    }
    
    render() {
    
        return (
          <div>
            <div className="dropdown-parent">   
                <div className="dropdown-children">
                    <h4 style={{color:'white', textAlign:'center'}}>Filter Type:</h4>     
                    <FilterDropdown select={this.onSelectFilter}/> 
                </div>
                <div className="dropdown-children">
                    <h4 style={{color:'white', textAlign:'center'}}>Filter Season:</h4>     
                    <FilterDropdown2 select={this.onSelectFilter2}/> 
                </div>
                <div className="dropdown-children">
                    <h4 style={{color:'white', textAlign:'center'}}>Sort By:</h4>                
                    <SortDropdown select={this.onSelectSortPrice}/>
                </div>
               
            </div>
            <div className="parent">
                <div className="child listPlacement">
                    <DisplayList 
                        list={this.props.list.filter(this.matchesPlantType)} 
                        addItem={this.addToCartButton}
            
                        />
                </div>
                <div className="child right-section">
                    <h3 style={{textAlign:'center'}}>CART:</h3>
                    <h5>Total: {Math.max(this.state.total.toFixed(2), 0)}</h5>

                    <CartList 
                        list={this.state.cartList} 
                        agg={this.state.agg}
                        addItem={this.addToCartButton}
                        removeItem={this.removeItemButton}
                        />
                    <Button className="button-placement"variant='outline-primary' onClick={this.clearAllItems}>Clear Cart</Button>
                </div>
            </div>
            
           
          </div>
        );
      }
    
}

