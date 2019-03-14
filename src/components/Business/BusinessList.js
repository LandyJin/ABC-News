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
            // Sort based on Date in Alphabetical Order
            .sort((a, b) => {
                let compareDate = b.pubDate.localeCompare(a.pubDate);
                return compareDate === 0 ? a.title.localeCompare(b.title) : compareDate
            })
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
                    <CardText className="description">{TagReplace.htmlDecode(business.description)}</CardText>
                    <CardText>
                        <small className="text-muted">{TagReplace.dateFormate(business.pubDate)}</small>
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
