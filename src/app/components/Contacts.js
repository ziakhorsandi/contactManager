import React, { Component } from 'react'
import ContactCard from './ContactCard'
import {Consumer} from '../Context'

export default class Contacts extends Component {
  // delContact(id){
  //   const {contacts}=this.state;
  //   const newContact=contacts.filter(contact=>contact.id!=id);
  //   this.setState({
  //     contacts:newContact
  //   });

  // }
  render() {
    return(
      <Consumer>
        {value=>{
          const {contacts}=value;
          return(
            <React.Fragment>
              <h1 className="display-4"><span className="text-danger" >Contact</span> List</h1>
              {contacts.map(cn=>(
                <ContactCard 
                  key={cn.id}
                  contact={cn}
                  // onDeleteContact={this.delContact.bind(this)}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}
