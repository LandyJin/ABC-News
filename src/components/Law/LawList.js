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
            // Sort based on Date in Alphabetical Order
            .sort((a, b) => {
                let compareDate = b.pubDate.localeCompare(a.pubDate);
                return compareDate === 0 ? a.title.localeCompare(b.title) : compareDate
            })
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
                    <CardText className="description">{TagReplace.htmlDecode(law.description)}</CardText>
                    <CardText>
                        <small className="text-muted">{TagReplace.dateFormate(law.pubDate)}</small>
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
