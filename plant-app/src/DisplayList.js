// TODO: create a component that displays a single bakery item
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import React from "react";
import "./App.css";

class DisplayList extends React.Component{

    constructor(props){
        super(props)
    }


    render() {

        return (
            <div className='flex'>
                {this.props.list.map((item) =>
                    <Card style={{ width: '18rem' , marginRight:'2%', marginBottom:'2%'}}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                    
                        {item.price}
                        </Card.Text>
                        <Button variant="primary" 
                            onClick={()=>{
                                this.props.addItem(item); 
                                }}>
                            
                            Add to Cart
                        </Button>
                    </Card.Body>
                    </Card>
                )}

            </div>
            
          );

    }
 

}

export default DisplayList