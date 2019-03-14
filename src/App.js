import React, { Component } from 'react';

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Header
import Header from './components/Header/Header'

// Menu
import Menu from './components/Menu/Menu';

// Components
import Loading from './components/Loading/Loading';
import Sport from './components/Sport/Sport';
import Law from './components/Law/Law';
import Business from'./components/Business/Business';
import Health from './components/Health/Health';
import Search from './components/Search/Search';
import Home from './components/Home/Home';

// Import Redux
import { connect } from 'react-redux';
import * as actionCreators from './Actions/RootAction';

class App extends Component {
  // Redux Dispatch
  componentDidMount() {
    this.props.loadItem()   
  }

  render() {
    // Redux initialState
    const {
      isLoading,
      items
    } = this.props;
    
    return (
      <div className="App">
      {isLoading ? 
        <Loading/>
      :
        <Router>
          <div>
            <Header />
            <Menu />
            <Switch>
              <Route exact path="/" render = { () =>  < Home items = {items} isLoading={isLoading}/> }/>
              <Route path="/sport" render = { () =>  < Sport items = {items} isLoading={isLoading}/> } />
              <Route  path="/law" render = { () =>  < Law items = {items} isLoading={isLoading}/> } />
              <Route  path="/business" render = { () =>  < Business items = {items} isLoading={isLoading}/> } />
              <Route  path="/health" render = { () =>  < Health items = {items} isLoading={isLoading}/> } />
              <Route  path="/search" render = { () =>  < Search items = {items} isLoading={isLoading}/> } />
            </Switch>
          </div>
        </Router>
      
      }
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return state
}

export default connect (mapStateToProps, actionCreators) (App)