import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import cox from '../Images/Rectangle1.png';
import shreemangal from '../Images/Sreemongol.png';
import sundorbon from '../Images/sundorbon.png';
import { Link, useParams } from 'react-router-dom';


const Home = () => {
    
    const coxBazar = "cox's bazar";
    
    return (
        <div className="background-style">
           {
               <Header></Header>
           }
           <Container className="mt-5 ">
               <Row className="top-container">
                    <Col className="col-md-5 description-side">
                        <h1 style={{fontWeight: '900', fontSize: '50px'}}>COX'S BAZAR</h1>
                        <p className="mt-3 mb-4 text-justify">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Link to={`/booking/${coxBazar}`}>
                            <button className="btn btn-warning pr-4"> 
                                <span style={{paddingRight: '10px'}}>Booking</span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> 
                            </button> 
                        </Link>
                    </Col>
                    <Col className="col-md-7">                        
                        <div className="all-images-alignment">
                            <Link to="" className="image-style"> <img src={cox} alt=""/> </Link>
                            <Link to={`/places/shreemangal`} className="image-style2"> <img src={shreemangal} alt=""/> </Link>
                            <Link to={`/places/sundorbon`} className="image-style3"> <img src={sundorbon} alt=""/> </Link>  
                            <h4 className="cox-float-text"> COX'S BAZAR</h4> 
                            <h4 className="shreemangal-float-text"> SHREEMANGAL</h4>  
                            <h4 className="sundorbon-float-text"> SUNDORBON</h4>
                        </div>                     
                    </Col>
               </Row>
               <Row className="mt-5">
                    <Col>
                        <div style={{display: 'flex', width: '10%', margin: '0 auto'}}>
                            <div className="left-circle"><FontAwesomeIcon className="fav-left-arrow" icon={faChevronLeft}></FontAwesomeIcon></div>
                            <div className="right-circle"><FontAwesomeIcon className="fav-right-arrow" icon={faChevronRight}></FontAwesomeIcon></div>  
                        </div> 
                    </Col>
               </Row>
           </Container>


        </div>
    );
};

export default Home;