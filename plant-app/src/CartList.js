// TODO: create a component that displays a single bakery item
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import React from "react";
import "./App.css";
import ListGroup from 'react-bootstrap/ListGroup';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';


function CartList(props){


    const createEntry = (m) => {
        return (
          <ListGroup.Item>
            {m.name}: 

            {/* <IconButton color="primary" component="label" > */}
            <IconButton color="primary" component="label" onClick={() => props.removeItem(m)} >
              
              <RemoveCircleOutlineOutlinedIcon/>
            </IconButton>
          
            x{props.agg[m.key]}

            {/* <IconButton color="primary" component="label"> */}
            <IconButton color="primary" component="label" onClick={() => props.addItem(m)}>
              <AddCircleOutlineOutlinedIcon/>
            </IconButton>
          
          </ListGroup.Item>
        );
      };

    const cartList = props.list.map(createEntry)
    

    return (
        <div>
            <ListGroup>{cartList}</ListGroup>

        </div>
        
        );

    
 

}

export default CartList