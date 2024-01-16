import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import CommentArea from './CommentArea';

export default class SingleBook extends Component{

    state = {
        selected: false
    }

    render(){
        return (
              <Card className={this.state.selected === true ? 'selectedBook' : ''}>
                  <Card.Img variant="top" type='button' src={this.props.book.img} onClick={() => this.setState((prevState) => ({selected: !prevState.selected}))}/>
                  <Card.Body>
                      <Card.Title>{this.props.book.title}</Card.Title>
                      
                        {this.state.selected && 
                            <CommentArea book={this.props.book}
                        />}
                      
                  </Card.Body>
              </Card>
        )
    }
}
