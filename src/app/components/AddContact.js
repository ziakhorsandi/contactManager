import React, { Component } from 'react';
import {Consumer} from '../Context';
import TextInputGroup from './layout/TextInputGroup';
// import uuid from 'uuid';
import axios from 'axios'

export default class addContact extends Component {
  constructor(){    
    super();
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={
      name:'',
      email:'',
      phone:''
    }
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  onSubmit(dispatch,e){
    e.preventDefault();

    let {name,email,phone}=this.state;

    if(name=='' || email=='' || phone==''){
      return;
    }

    const newContact={
      // id:uuid(),
      name,
      email,
      phone,
    }

    axios
      .post(`https://jsonplaceholder.typicode.com/users`,newContact)
      .then(res=>dispatch({
        type:'ADD_CONTACT',
        payload: res.data
      }));
      
    this.setState({
      name:'',
      email:'',
      phone:''
    })

    this.props.history.push('/');
  }
  
  render() {
    const {name, email, phone}=this.state;

    return(
      <Consumer>
        {value=>{
          const {dispatch} =value;
          return(
            <div className='card mb-3' >
              <div className='card-header'>Add Contact</div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this,dispatch)} >
                  <TextInputGroup
                    label={'Name'}
                    name={'name'}
                    type={'text'}
                    placeholder="Enter Name ..."
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label={'Email'}
                    name={'email'}
                    type={'email'}
                    placeholder="Enter email ..."
                    value={email}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label={'Phone'}
                    name={'phone'}
                    type={'text'}
                    placeholder="Enter phone ..."
                    value={phone}
                    onChange={this.onChange}
                  />
                  <input  style={{ fontSize:"14px" }} type='submit' value='Add Contact' className='btn btn-light btn-block'/>
                </form>
              </div>
            </div>
          ) 
        }}
      </Consumer>
    )

  }
}
