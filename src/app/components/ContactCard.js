import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../Context';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class ContactCard extends Component {
  constructor(){
    super();
    this.state={
      showInfo:false
    };

    this.onShowClick=this.onShowClick.bind(this);
  }
  
  onShowClick(e){
    this.setState({
      showInfo:!this.state.showInfo
    });
  }
  onDeleteContact(dispatch,id){
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res=>dispatch({type:'DELETE_CONTACT',payload:id}))
  }
  
  render() {
    const {id,name,email,phone}=this.props.contact;
    const {showInfo}=this.state;
    return (
      <Consumer>
        {value=>{
          return(
            <div className="card card-body my-3" style={{ fontSize:"14px" }}>
              <h6>
                {name}
                {showInfo ? (
                  <i 
                    className="fa fa-sort-down ml-2"
                    onClick={this.onShowClick} 
                    style={{
                      cursor:'pointer'
                    }}
                  ></i>
                ) :(
                  <i 
                    className="fa fa-sort-down ml-2"
                    onClick={this.onShowClick} 
                    style={{
                      cursor:'pointer',
                      transform :'rotate(-90deg)'
                    }}
                  ></i>
                )}
                <i className="fa fa-times"
                  style={{color:'red', float:'right',cursor:'pointer'}}
                  onClick={this.onDeleteContact.bind(this,value.dispatch,id)}
                ></i>
                <Link to={`edit/${id}`} >
                  <i className="fa fa-pencil-square-o mr-2"
                    style={{color:'black', float:'right',cursor:'pointer'}}
                  ></i>
                </Link>
              </h6>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null  }
              
            </div>
          )
        }}
      </Consumer>
    )
  }
}

ContactCard.propTypes={
  contact:PropTypes.object.isRequired
  // onDeleteContact:PropTypes.func.isRequired
};