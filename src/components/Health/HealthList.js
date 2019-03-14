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
                .sort((a,b) => {return new Date(b.date) - new Date(a.date)})
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
                        <CardText className="description">{health.description.replace(/<p>/g, "").replace(/<\/p>/g,"")}</CardText>
                        <CardText>
                            <small className="text-muted">{moment(health.pubDate).format('L, LT')}</small>
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
