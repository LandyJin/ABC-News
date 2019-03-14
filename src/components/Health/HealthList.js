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

export class HealthList extends Component {
  render() {
    const {
        healths,
        className
    } = this.props;
    return (
      <div>
        <ListGroup flush>
                {healths
                // Sort based on Date in Alphabetical Order
                .sort((a, b) => {
                    let compareDate = b.pubDate.localeCompare(a.pubDate);
                    return compareDate === 0 ? a.title.localeCompare(b.title) : compareDate
                })
                .map((health, i) => (
                <ListGroupItem tag="a" href={health.link} key={i}>
                    <Card data-aos="fade-up" data-aos-duration="1000">
                        {health.enclosure.link ?
                            <CardImg top width="100%" src={health.enclosure.link} alt="Card image cap" />
                            :
                            ""
                        }
                        <CardBody className={className}>
                        <CardTitle>{health.title}</CardTitle>
                        <CardText className="description">{TagReplace.htmlDecode(health.description)}</CardText>
                        <CardText>
                            <small className="text-muted">{TagReplace.dateFormate(health.pubDate)}</small>
                            <small className="text-muted">Author: {health.author}</small>
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

export default HealthList
