import React, { Component } from 'react';

// CSS
import  '../../styles/components.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Loading from '../Loading/Loading';
import BusinessList from './BusinessList';

import { 
    Container, 
    Row, 
    Col } from 'reactstrap';

export class Business extends Component {
    state = {
        businesses: []
    }

    // Fetch API & get all items
    componentDidMount() {
        // Iterate & Filter all business type
        const filterByCategories = ['Business, Economics and Finance'];
        const filterByCategorySet = new Set(filterByCategories);
        const businesses = this.props.items.filter((business) => 
        business.categories.some((category) => filterByCategorySet.has(category))
        );
        this.setState({
            businesses: businesses
        })

        AOS.init({
            duration : 2000
        })
    }

    render() {
        const {
            businesses
        } = this.state;
        return (
        <div>
            {this.props.isLoading ? 
            <Loading/>
            :
            <Container>
                {businesses.length ?
                <Row>
                    <Col md='8'>
                        <BusinessList 
                            businesses = {businesses}
                            className = "featureCard"
                        />
                    </Col>
                    <Col md='4'>
                        <h4>FEATURES</h4>
                        <BusinessList 
                            businesses = {businesses}
                            className = "featureCard"
                        />
                    </Col>
                </Row>
                :
                <h1>No News Yet</h1>                
                }
            </Container>
        }
        </div>
        )
    }
}

export default Business
