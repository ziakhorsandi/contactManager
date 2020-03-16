import React, { Component } from 'react'

export default class addContact extends Component {
  constructor(props){    
    super(props);

    this.nameInput=React.createRef();
    this.emailInput=React.createRef();
    this.phoneInput=React.createRef();

    this.onSubmit=this.onSubmit.bind(this);

  }



  onSubmit(e){
    e.preventDefault();
    const cn={
      name:this.nameInput.current.value,
      email:this.emailInput.current.value,
      phone:this.phoneInput.current.value
    };

    console.log(cn);
  }
  
  render() {
    const {name, email, phone}=this.props;
    return (
      <div className='card mb-3' >
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
          <form onSubmit={this.onSubmit} >
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input  style={{ fontSize:"14px" }} type='text' name='name' className='form-control form-control-lg' placeholder='Enter Name...' 
              defaultValue={name} 
              ref={this.nameInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input  style={{ fontSize:"14px" }} type='text' name='email' className='form-control form-control-lg' placeholder='Enter email...' 
              defaultValue={email}
              ref={this.emailInput} 
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input  style={{ fontSize:"14px" }} type='text' name='phone' className='form-control form-control-lg' placeholder='Enter phone...' 
              defaultValue={phone} 
              ref={this.phoneInput}
              />
            </div>
            <input  style={{ fontSize:"14px" }} type='submit' value='Add Contact' className='btn btn-light btn-block'/>
          </form>
        </div>
      </div>
    )
  }
}

addContact.defaultProps={
  name:'neda Nimaee',
  email:'nn@gmail.com',
  phone:'09234234343'
}
