import React from 'react';
import './CharacterContent.css';
import {ListGroup, Image} from 'react-bootstrap';

function Character(props){

const {character: {name, description, thumbnail}}= props;

    return(
        <div>
            <ListGroup.Item>
                <div className='center'>
            <div className="name_hero">{name}</div>
            <Image style={{width:'25%'}} roundedCircle src={`${thumbnail.path}.${thumbnail.extension}`}/>
            </div>
            {/* Перевірка на пустий дескріпшн */}
            <div className="description_hero">{!description ? 'No description' : description}</div>
            </ListGroup.Item>
        </div>

    )
}
export default Character;