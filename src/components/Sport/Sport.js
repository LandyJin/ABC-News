import React, { Component } from 'react';

// CSS
import  '../../styles/components.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Loading from '../Helpers/Loading';
import SportList from './SportList';

import { 
    Container, 
    Row, 
    Col } from 'reactstrap';

export class Sport extends Component {
    state = {
        sports: []
    }

    // Fetch API & get all items
    componentDidMount() {
        // Iterate & Filter all sport type
        const filterByCategories = ['Sport'];
        const filterByCategorySet = new Set(filterByCategories);
        const sports = this.props.items.filter((sport) => 
            sport.categories.some((category) => filterByCategorySet.has(category))
        );
        this.setState({
            sports: sports
        })

        AOS.init({
            duration : 2000
        })
    }

    render() {
        const {
            sports
        } = this.state;
        return (
        <div>
            {this.props.isLoading ? 
            <Loading/>
            :
            <Container>
                {sports.length ? 
                <Row>
                    <Col md='8'>
                        <SportList 
                            sports = {sports}
                            className = ""
                        />
                    </Col>
                    <Col md='4'>
                        <h4>FEATURES</h4>
                        <SportList 
                            sports = {sports}
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

export default Sport
