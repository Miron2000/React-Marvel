import React from 'react';
import './StoriesContent.css';
import {ListGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";

function StoriesContent(props){
    const {story: {title, resourceURI}} = props;
    return(

<ListGroup.Item>
<h3 className="title_hero">{title}</h3>
<Link className="link_hero" to={resourceURI}>{resourceURI}</Link>

</ListGroup.Item>

    )
}
export default StoriesContent;