import React, { Component } from 'react';

// CSS
import '../../styles/menu.css'

// Reacr Router Dom
// Better than reactstrap NavLink as a single page application
import { NavLink } from 'react-router-dom';

// Reactstrap Nav
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  } from 'reactstrap';

export class Menu extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <div className="menu">
            <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/law" activeClassName="activeLink">Law</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/business" activeClassName="activeLink">Business</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/health' activeClassName="activeLink">Health</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/sport' activeClassName="activeLink">Sport</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/search' activeClassName="activeLink">Search</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        )
    }
}

export default Menu
