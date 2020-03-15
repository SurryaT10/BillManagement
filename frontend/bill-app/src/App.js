import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import BillForm from './components/BillForm'
import Bill from './components/Bill'


class App extends React.Component {
  render() {
    return (
      <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/bill-form' component={BillForm} />
            <Route exact path='/bill' component={Bill} />
          </Switch>
      </Router>
    )
  }
}

export default App;
