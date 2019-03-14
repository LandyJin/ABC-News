import React, { Component } from 'react';

// CSS
import '../../styles/header.css';

// Import Redux
import { connect } from 'react-redux';
import * as actionCreators from '../../Actions/RootAction';

export class Header extends Component {
    // Redux Dispatch
    componentDidMount() {
        this.props.loadLogo()   
    }

    render() {
        return (
        <div className="header">
            <img src={this.props.logo} alt="Logo" />
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
  }
  
export default connect (mapStateToProps, actionCreators) (Header)