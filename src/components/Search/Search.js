import React, { Component } from 'react';

// CSS
import '../../styles/search.css';

// Helpers
import Loading from '../Helpers/Loading';
import TagReplace from '../Helpers/TagReplace';

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
                       TagReplace.dateFormate(item.pubDate).toLowerCase().indexOf(search.toLowerCase()) !== -1 
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
                        // Sort based on Date in Alphabetical Order
                        .sort((a, b) => {
                            let compareDate = b.pubDate.localeCompare(a.pubDate);
                            return compareDate === 0 ? a.title.localeCompare(b.title) : compareDate
                        })
                        .map((item, i) => (
                    <ListGroupItem key={i}>
                        <Card>
                            <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText className="description">{TagReplace.htmlDecode(item.description)}</CardText>
                                <CardText>
                                    <small className="text-muted">{TagReplace.dateFormate(item.pubDate)}</small>
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
