import React from 'react'
import {Link} from 'react-router'

import About from './About'
import Service from './Service'
import Contact from './Contact'


class Dashboard extends React.Component {
   render() {
      return (
         <div>
          <p>Welcome! You are Logged in.</p>
            <ul className="menuLinks">
               <li><Link to='/about' className=''>About</Link></li>
               <li><Link to='/contact' className=''>Contact</Link></li>
               <li><Link to='/service' className=''>Service</Link></li>
            </ul>
         </div>
      )
   }
}

export default Dashboard;

 
