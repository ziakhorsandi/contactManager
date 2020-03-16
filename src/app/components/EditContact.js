import React, { Component } from 'react';
import {Consumer} from '../Context';
import TextInputGroup from './layout/TextInputGroup';
// import {Link} from ''

// import uuid from 'uuid';
import axios from 'axios'

export default class EditContact extends Component {
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

  componentDidMount(){
    let id = this.props.match.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res=>{
        this.setState({
          name:res.data.name,
          email:res.data.email,
          phone:res.data.phone,
        });
      });
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

    const updContact={
      name,
      email,
      phone,
    }
    
    const {id}=this.props.match.params;

    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact)
      .then(res=>dispatch({
        type:'UPDATE_CONTACT',
        payload: res.data
      }));
      

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
              <div className='card-header'>Edit Contact</div>
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
                  <input  style={{ fontSize:"14px" }} type='submit' value='Edit Contact' className='btn btn-light btn-block'/>
                </form>
              </div>
            </div>
          ) 
        }}
      </Consumer>
    )

  }
}
