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

// Moment
import moment from 'moment';

export class BusinessList extends Component {
  render() {
    const {
        businesses,
        className
    } = this.props;
    return (
      <div>
        <ListGroup flush>
            {businesses
            .sort((a,b) => {return new Date(b.date) - new Date(a.date)})
            .map((business, i) => (
            <ListGroupItem tag="a" href={business.link} key={i}>
                <Card data-aos="fade-up" data-aos-duration="1000">
                    {business.enclosure.link ?
                        <CardImg top width="100%" src={business.enclosure.link} alt="Card image cap" />
                        :
                        ""
                    }
                    <CardBody className={className}>
                    <CardTitle>{business.title}</CardTitle>
                    <CardText className="description">{business.description.replace(/<p>/g, "").replace(/<\/p>/g,"")}</CardText>
                    <CardText>
                        <small className="text-muted">{moment(business.pubDate).format('L, LT')}</small>
                        <small className="text-muted">Author: {business.author}</small>
                    </CardText>
                    </CardBody>
                </Card>
            </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    )
  }
}

export default BusinessList
