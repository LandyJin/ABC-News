import React, { Component } from 'react';

// CSS
import '../../styles/search.css';

// Components
import Loading from '../Loading/Loading';

import moment from 'moment';

import { 
    Container, 
    ListGroup, 
    ListGroupItem,
    Card, 
    CardBody, 
    CardTitle, 
    CardText, 
    Input  } from 'reactstrap';

export class Search extends Component {
    state = {
        search: "",
    }

    // Get Input Value
    updateSearch(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {
            search
        } = this.state;

        const {
            isLoading,
            items
        } = this.props;

        // Filter items for Search
        // Search Based on News Title OR Description OR Author OR Date
        let itemsList = items.filter(
            (item) => {
                return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                       item.description.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                       item.author.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                       moment(item.pubDate).format('L, LT').toLowerCase().indexOf(search.toLowerCase()) !== -1 
            }
        )

        return (
        <div className="search">
            <Container>
                <Input 
                    type="text"
                    name="search"
                    placeholder="Search for News"
                    value={search}
                    onChange={this.updateSearch.bind(this)}
                />
                {isLoading ? 
                <Loading />
                :
                <ListGroup flush>
                    {itemsList
                        .sort((a,b) => {return new Date(b.date) - new Date(a.date)})
                        .map((item, i) => (
                    <ListGroupItem key={i}>
                        <Card>
                            <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText className="description">{item.description}</CardText>
                                <CardText>
                                    <small className="text-muted">{moment(item.pubDate).format('L, LT')}</small>
                                    <small className="text-muted">Author: {item.author}</small>
                                </CardText>
                            </CardBody>
                        </Card>
                    </ListGroupItem>
                    ))}
                </ListGroup>
                }
            </Container>
        </div>
        )
    }
}

export default Search
