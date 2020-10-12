import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo1 from '../Images/Logo1.png';
import './Login.css';
import fbLogo from '../Icons/fb.png';
import googleLogo from '../Icons/google.png';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] =  useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {        
        const {displayName, email} = result.user;
        const signedInUser = {displayName, email};
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(signedInUser);
        
      }).catch(function(error) {        
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }

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
                                <p><input type="email" placeholder="Username or Email" /></p>
                                <p><input type="password" placeholder="Password" /></p>                                
                                <input className="btn btn-warning btn-lg btn-block mt-4" type="submit" value="Create an account"/>
                            </form>
                            <p className="text-center mt-3">Don't you have an account? 
                                <Link to="/create-account"> 
                                    <span className="text-warning ml-1">Create an account</span>
                                </Link>
                            </p>                           
                        </div>
                        <div className="facebook-google-bottom ">
                            <div style={{display: 'flex'}} className="mt-3 mb-3">
                                <div className="single-line mt-3"> </div> Or <div className="single-line mt-3"></div>
                            </div>
                            <p className="fb-logoSection-style"> <img src={fbLogo} alt=""/> <span style={{marginLeft: '42px'}}> Continue with Facebook </span></p>
                            <p className="fb-logoSection-style"> <img src={googleLogo} alt=""/> <span style={{marginLeft: '42px'}}> <button onClick={handleGoogleSignIn}>Continue with Google </button></span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;