import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Booking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import icon from '../Icons/calender_icon.png';


const Booking = () => {
    const {bookingId} = useParams();    
    
    return (
        <div className="background-style">
           {
               <Header></Header>
           }
           <Container className="mt-5 ">
               <Row className="top-container">
                    <Col className="col-md-6 description-side">
                        <h1 className="text-uppercase" style={{fontWeight: '900', fontSize: '50px'}}>{bookingId}</h1>
                        <p className="mt-3 mb-4 text-justify">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore suscipit quisquam cumque explicabo eum voluptates tempora. Blanditiis, iure quia. Excepturi nisi quisquam unde quibusdam quos numquam quasi aliquam rem?Officia quaerat ab recusandae similique sit in cum tempore iste inventore accusantium nostrum reprehenderit </p>
                        
                    </Col>
                    <Col className="col-md-6 booking-top" >                        
                        <div className="book-main-section">
                            <Container>
                                <Row>
                                    <Col className="col-md-12 mt-3">
                                        <label className="text-secondary"> Origin</label>
                                        <input type="text" style={{backgroundColor: '#F2F2F2'}} className="form-control font-weight-bold" value="Dhaka"/>
                                        <label className="text-secondary mt-3"> Destination</label>
                                        <input type="text" style={{backgroundColor: '#F2F2F2'}} className="form-control font-weight-bold text-capitalize" value={bookingId}/>
                                        <div style={{display: 'flex'}} className="mt-3">
                                            <div className="from-calender">
                                                <label className="text-secondary"> From </label>
                                                <input type="text" style={{backgroundColor: '#F2F2F2'}} className="form-control font-weight-bold" value="01/09"/>
                                                <img src={icon} alt="" />
                                            </div>
                                            <div className="to-calender ml-4">
                                                <label className="text-secondary"> To</label>
                                                <input type="text" style={{backgroundColor: '#F2F2F2'}} className="form-control font-weight-bold" value="12/09"/>
                                                <img src={icon} alt="" />
                                            </div> 
                                        </div>
                                        <Link to="/create-account">
                                            <button className="btn btn-warning btn-lg btn-block mt-4">Start Booking 
                                            </button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </div>                     
                    </Col>
               </Row>             
           </Container>
        </div>
    );
};


export default Booking;