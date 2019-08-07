import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes
