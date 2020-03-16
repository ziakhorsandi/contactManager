
import React, { Component } from 'react';
import axios  from 'axios';
const Context=React.createContext(null);

// const reducer=(state,action)=>{
//   switch (action.type) {
//     case 'DELETE_CONTACT':
//       return{
//         ...state,
//         contacts:state.contacts.filter(contact=>contact.id!=action.payload)
//       }
  
//     default:
//       return(state);
//   }
// }

export class Provider extends Component {
  constructor(){
    super();
    this.state={
      contacts:[
        // {
        //   id:1,
        //   name:'saba sorme',
        //   email:'saba@gmail.com',
        //   phone:'0915522522'
        // },
        // {
        //   id:2,
        //   name:'kerim kalbasi',
        //   email:'kerim@gmail.com',
        //   phone:'0912544522'
        // },
        // {
        //   id:3,
        //   name:'shima shamluo',
        //   email:'shima@gmail.com',
        //   phone:'091545622'
        // }
      ],
      dispatch: action =>{
        // this.setState(state=>reducer(state,action))
        // this.setState(state=>this.reducer(state,action))
        this.setState(this.reducer.bind(this,this.state,action))
      }
    }
  }

  componentDidMount(){
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response=>this.setState({
        contacts:response.data
      }))
  }

  reducer(state,action){
    switch (action.type) {
      case 'DELETE_CONTACT':
        return{
          ...state,
          contacts:state.contacts.filter(contact=>contact.id!=action.payload)
        }
      case 'ADD_CONTACT':
        return{
          ...state,
          contacts:[
            action.payload,
            ...state.contacts
          ]
        }
      case 'UPDATE_CONTACT':
        console.log('action.payload', action.payload)
        return{
          ...state,
          contacts:state.contacts.map(contact=>
             contact.id === action.payload.id?(contact=action.payload):contact
          )
        }
    
      default:
        return(state);
    }
  }
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer=Context.Consumer;