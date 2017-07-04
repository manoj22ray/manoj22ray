import React from 'react'


class Service extends React.Component {
   render() {
      return (
         <div>
          <p className="fontTItle">Welcome! You are in Service Screen.</p>
           <div>
          <p>separate your component and application state by introducing a service layer that takes care of propagating changes through your application
            manage component dependencies in an explicit, testable way
            there's no events and no lifecycle management - everything is done automatically for you
            it's tiny and easy to understand - the core is less than 100 lines of code</p>
          </div>
         </div>
      )
   }
}

export default Service;