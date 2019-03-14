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

export class SportList extends Component {
  render() {
    const {
        sports,
        className
    } = this.props;
    return (
      <div>
        <ListGroup flush>
            {sports
            .sort((a,b) => {return new Date(b.date) - new Date(a.date)})
            .map((sport, i) => (
            <ListGroupItem tag="a" href={sport.link} key={i}>
                <Card data-aos="fade-up" data-aos-duration="1000">
                    {sport.enclosure.link ?
                        <CardImg top width="100%" src={sport.enclosure.link} alt="Card image cap" />
                        :
                        ""
                    }
                    <CardBody className={className}>
                    <CardTitle>{sport.title}</CardTitle>
                    <CardText className="description">{TagReplace.htmlDecode(sport.description)}</CardText>
                    <CardText>
                        <small className="text-muted">{TagReplace.dateFormate(sport.pubDate)}</small>
                        <small className="text-muted">Author: {sport.author}</small>
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

export default SportList
