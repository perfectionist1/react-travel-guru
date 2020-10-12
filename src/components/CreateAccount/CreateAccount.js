import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Images/Logo1.png';
import './CreateAccount.css';
import fbLogo from '../Icons/fb.png';
import googleLogo from '../Icons/google.png';


const CreateAccount = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="col-md-12">                        
                        <Navbar  variant="light">                                
                            <Navbar.Brand> <img src={logo1} alt="" style={{height: '50px', marginLeft: '150px'}}/> </Navbar.Brand>
                                                                        
                            <Nav className="mr-auto d-flex justify-content-end " style={{marginLeft: '150px'}}>
                                <Nav.Link className="pr-5"><Link to="/news" className="text-dark"> News </Link></Nav.Link>
                                <Nav.Link className="pr-5"><Link to="/destination" className="text-dark"> Destination </Link></Nav.Link>
                                <Nav.Link className="pr-5"><Link to="/blog" className="text-dark"> Blog </Link></Nav.Link>
                                <Nav.Link className="pr-5"><Link to="/contact" className="text-dark"> Contact </Link></Nav.Link>
                                <Nav.Link><button className="btn btn-warning"> Login </button> </Nav.Link>
                            </Nav>                        
                        </Navbar>                       
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="account-create-form-main">
                            <h3> Create an account</h3>
                            <form className="pt-4">
                                <p><input type="text" placeholder="First Name" /></p>
                                <p><input type="text" placeholder="Last Name" /></p>
                                <p><input type="email" placeholder="Username or Email" /></p>
                                <p><input type="password" placeholder="Password" /></p>
                                <p><input type="text" placeholder="Confirm Password" /></p>
                                <input className="btn btn-warning btn-lg btn-block mt-4" type="submit" value="Create an account"/>
                            </form>
                            <p className="text-center mt-3">Already have an account? <span className="text-warning">Login</span></p>                           
                        </div>
                        <div className="facebook-google-bottom ">
                            <div style={{display: 'flex'}} className="mt-3 mb-3">
                                <div className="single-line mt-3"> </div> Or <div className="single-line mt-3"></div>
                            </div>
                            <p className="fb-logoSection-style"> <img src={fbLogo} alt=""/> <span style={{marginLeft: '42px'}}> Continue with Facebook </span></p>
                            <p className="fb-logoSection-style"> <img src={googleLogo} alt=""/> <span style={{marginLeft: '42px'}}> Continue with Facebook </span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CreateAccount;