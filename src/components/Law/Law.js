import React, { Component } from 'react';

// CSS
import  '../../styles/components.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Loading from '../Helpers/Loading';
import LawList from './LawList';

import { 
    Container, 
    Row, 
    Col } from 'reactstrap';

export class Law extends Component {
    state = {
        laws: [],
    }

    componentDidMount() {
        // Iterate & Filter all laws type
        const filterByCategories = ['Law, Crime and Justice', 'Courts and Trials', 'Local Governmen', 'Murder and Manslaughter', 'Crime', 'Prisons and Punishment'];
        const filterByCategorySet = new Set(filterByCategories);
        const laws = this.props.items.filter((law) => 
            law.categories.some((category) => filterByCategorySet.has(category))
        );
        this.setState({
            laws: laws
        })

        AOS.init({
            duration : 2000
        })
    }

    render() {
        const {
            laws
        } = this.state;
        return (
        <div>
            {this.props.isLoading ? 
            <Loading />
            :
            <Container>
                {laws.length ?
                <Row>
                    <Col md='8'>
                        <LawList 
                            laws = {laws}
                            className = ""
                        />
                    </Col>
                    <Col md='4'>
                        <h4>FEATURES</h4>
                        <LawList 
                            laws = {laws}
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

export default Law
