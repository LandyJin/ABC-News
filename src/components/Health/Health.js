import React, { Component } from 'react';

// CSS
import  '../../styles/components.css';

/// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Loading from '../Loading/Loading';
import HealthList from './HealthList';

import { 
    Container, 
    Row, 
    Col } from 'reactstrap';

export class Health extends Component {
    state = {
        healths: [],
    }

    // Fetch API & get all items
    componentDidMount() {
        // Iterate & Filter all health type
        const filterByCategories = ['Health', 'Healthcare Facilities', 'Death', 'Community and Societ'];
        const filterByCategorySet = new Set(filterByCategories);
        const healths = this.props.items.filter((health) => 
            health.categories.some((category) => filterByCategorySet.has(category))
        );
        this.setState({
            healths: healths
        })

        AOS.init({
            duration : 2000
        })
    }

    render() {
        const {
            healths
        } = this.state;
        return (
        <div>
            {this.props.isLoading ? 
            <Loading />
            :
            <Container>
                {healths.length ?
                <Row>
                    <Col md='8'>
                        <HealthList 
                            healths = {healths}
                            className = ""
                        />
                    </Col>
                    <Col md='4'>
                        <h4>FEATURES</h4>
                        <HealthList 
                            healths = {healths}
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

export default Health
