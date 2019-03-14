import React, { Component } from 'react';

// CSS
import  '../../styles/components.css';

import { 
    ListGroup, 
    ListGroupItem,
    Card, 
    CardBody, 
    CardTitle, 
    CardText, 
    CardImg  } from 'reactstrap';

// Helper
import TagReplace from '../Helpers/TagReplace';

export class HomeList extends Component {
  render() {
    const {
        items,
        className
    } = this.props;
    return (
    <ListGroup flush>
        {items
        .sort((a,b) => {return new Date(b.date) - new Date(a.date)})
        .map((item, i) => (
        <ListGroupItem tag="a" href={item.link} key={i}>
            <Card data-aos="fade-up" data-aos-duration="1000">
                {item.enclosure.link ?
                    <CardImg top width="100%" src={item.enclosure.link} alt="Card image cap" />
                    :
                    ""
                }
                <CardBody className={className}>
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
    )
  }
}

export default HomeList
