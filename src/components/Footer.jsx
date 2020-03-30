import React from 'react';
import './FooterContent.css';
import { Navbar } from 'react-bootstrap';


function Footer(props) {
    return (
        <Navbar className="footer" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <div className='fotter_row'>
                    <img className="footer_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png" />{' '}
                    <p><a href="https://github.com/Miron2000" target="_blank">GitHub</a></p>
                </div>
            </Navbar.Brand>
        </Navbar>
    )
}
export default Footer;