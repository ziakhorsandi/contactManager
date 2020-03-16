import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends PureComponent {
  render() {
    return (
     <nav className="navbar navbar-expand-sm navbar-light bg-light">
       <div className="collapse navbar-collapse" id="collapsibleNavId">
         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

           <li className="nav-item">
             <Link className="nav-link" to="/"><i className="fa fa-home"></i> Home</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/add"><i className="fa fa-plus"></i> Add</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/about"><i className="fa fa-question"></i> About</Link>
           </li>

         </ul>
         {/* <form  className="form-inline my-2 my-lg-0">
           <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
         </form> */}
       </div>
     </nav>
    )
  }
}
