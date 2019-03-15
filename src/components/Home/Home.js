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
import HomeList from './HomeList';

// Import Redux
import { connect } from 'react-redux';
import * as actionCreators from '../../Actions/RootAction';

// React infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

export class Home extends Component {
    state = {
        items : [],
        hasMore: true
    }
    // Redux Dispatch
    componentDidMount() {
        this.props.loadItem()
        .then(() => {
            const items = this.props.items
            this.setState({
                items : items.slice(items.length - items.length, 3)
            })
            console.log(this.state.items)
        })
        AOS.init({
            duration : 2000
        })
    }
    // Infinite Scroll Fetch More
    fetchMoreData = (i) => {
        const items = this.props.items;
        if (this.state.items.length >= items.length) {
            this.setState({ hasMore: false });
            return;
        }

        // Fake API loading time
        setTimeout(() => {
            this.setState({
                items: items.slice(items.length - items.length, 3 * i)
            });
            console.log(this.state.items)
        }, 1500);
    };

    render() {
        const { isLoading } = this.props;
        const { 
            items,
            hasMore
        } = this.state;
        return (
        <div>
            {isLoading ? 
            <Loading/>
            :
            <InfiniteScroll
                dataLength={items.length}
                next={this.fetchMoreData.bind(this, (items.length)/3 + 1)}
                hasMore={hasMore}
                loader={<Loading/>}
                endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
                }
            >
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
            </InfiniteScroll>
        }
        </div>
        )
    }
}

// export default Home

const mapStateToProps=(state)=>{
    return state
}
  
export default connect (mapStateToProps, actionCreators) (Home)