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

export class LawList extends Component {
  render() {
    const {
        laws,
        className
    } = this.props;
    return (
      <div>
        <ListGroup flush>
            {laws
            .sort((a,b) => {return new Date(b.date) - new Date(a.date)})
            .map((law, i) => (
            <ListGroupItem tag="a" href={law.link} key={i}>
                <Card data-aos="fade-up" data-aos-duration="1000">
                    {law.enclosure.link ?
                        <CardImg top width="100%" src={law.enclosure.link} alt="Card image cap" />
                        :
                        ""
                    }
                    <CardBody className={className}>
                    <CardTitle>{law.title}</CardTitle>
                    <CardText className="description">{law.description}</CardText>
                    <CardText>
                        <small className="text-muted">{moment(law.pubDate).format('L, LT')}</small>
                        <small className="text-muted">Author: {law.author}</small>
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

export default LawList
