import React, { Component } from 'react';

// CSS
import  '../../styles/components.css';

// AOS Scroll Library
import AOS from 'aos';
import 'aos/dist/aos.css';

import { 
    Container, 
    Row, 
    Col } from 'reactstrap';

// Components
import Loading from '../Helpers/Loading';
import HomeList from './HomeList'

export class Home extends Component {
    componentDidMount() {
        AOS.init({
            duration : 2000
        })
    }
    render() {
        const {
            isLoading,
            items
        } = this.props;
        return (
        <div>
            {isLoading ? 
            <Loading/>
            :
            <Container>
                {items.length ?
                <Row>
                    <Col md='8'>
                        <HomeList
                            items = {items}
                            className = ""
                        />
                    </Col>
                    <Col md='4'>
                        <h4>FEATURES</h4>
                        <HomeList
                            items = {items}
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

export default Home
