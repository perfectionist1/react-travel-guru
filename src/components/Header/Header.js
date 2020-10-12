import { Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png';
import { BsSearch } from "react-icons/bs";
import './Header.css';



const formSearchStyle = {
    marginLeft: '40px', 
    padding: '1px', 
    width: '350px',
    opacity: '0.4',    
    background: `url${BsSearch} noRepeat 100%`,

};

const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navbar  variant="light">                                
                            <Navbar.Brand> <img src={logo} alt="" style={{height: '50px'}}/> </Navbar.Brand>
                            <Form style={formSearchStyle}>
                            
                                <FormControl type="text"  placeholder="Search Your Destination..." className="mr-sm-2 form-control" />
                                                                                 
                            </Form>                                             
                            <Nav className="mr-auto d-flex justify-content-end " style={{marginLeft: '50px'}}>
                                <Nav.Link className="pr-5"><Link to="/news" className="text-light"> News </Link></Nav.Link>
                                <Nav.Link className="pr-5"><Link to="/destination" className="text-light"> Destination </Link></Nav.Link>
                                <Nav.Link className="pr-5"><Link to="/blog" className="text-light"> Blog </Link></Nav.Link>
                                <Nav.Link className="pr-5"><Link to="/contact" className="text-light"> Contact </Link></Nav.Link>
                                <Nav.Link><button className="btn btn-warning"> Login </button> </Nav.Link>
                            </Nav>                        
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;