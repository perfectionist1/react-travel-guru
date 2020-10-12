import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Places.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import cox from '../Images/Rectangle1.png';
import shreemangal from '../Images/Sreemongol.png';
import sundorbon from '../Images/sundorbon.png';
import { Link, useParams } from 'react-router-dom';


const Places = () => {
    const {placeId} = useParams();
    //console.log(placeId);
    const shreeMangal = "shreemangal";
    const sundorBon   = "sundorbon";
    return (
        <div className="background-style">
           {
               <Header></Header>
           }
           <Container className="mt-5 ">
               <Row className="top-container">
                    <Col className="col-md-5 description-side">
                        { placeId === "shreemangal" && 
                            <div>
                                <h1 style={{fontWeight: '900', fontSize: '50px'}}>SHREEMANGAL</h1>
                                <p className="mt-3 mb-4 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, dolores id? Ipsam adipisci veritatis dolorum distinctio at nisi culpa nesciunt, nihil a rerum assumenda necessitatibus magni repudiandae.</p>
                                <Link to={`/booking/${shreeMangal}`}>
                                    <button className="btn btn-warning pr-4"> 
                                        <span style={{paddingRight: '10px'}}>Booking</span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> 
                                    </button> 
                                </Link>
                            </div>
                        }
                        {placeId === "sundorbon" && 
                            <div>
                                <h1 style={{fontWeight: '900', fontSize: '50px'}}>SUNDORBON</h1>
                                <p className="mt-3 mb-4 text-justify"> sundorbon is a great forest, Fuga, dolores id? Ipsam adipisci veritatis dolorum distinctio at nisi culpa nesciunt, nihil a rerum Lorem ipsum dolor sit, amet consectetur adipisicing. and it ...</p>
                                <Link to={`/booking/${sundorBon}`}>
                                    <button className="btn btn-warning pr-4"> 
                                        <span style={{paddingRight: '10px'}}>Booking</span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> 
                                    </button> 
                                </Link>
                            </div>
                        }
                    </Col>
                    <Col className="col-md-7">   
                        { placeId === "shreemangal" && 
                            <div className="all-images-alignment">
                            <Link to={`/home/cox`} className="image-style10"> <img src={cox} alt=""/> </Link>
                            <Link to={`/places/shreemangal`} className="image-style20"> <img src={shreemangal} alt=""/> </Link>
                            <Link to={`/places/sundorbon`} className="image-style30"> <img src={sundorbon} alt=""/> </Link>  
                            <h4 className="cox-float-text"> COX'S BAZAR</h4> 
                            <h4 className="shreemangal-float-text"> SHREEMANGAL</h4>  
                            <h4 className="sundorbon-float-text"> SUNDORBON</h4>
                        </div> 
                        }                                          
                        { placeId === "sundorbon" && 
                            <div className="all-images-alignment">
                            <Link to={`/home/cox`} className="image-style10"> <img src={cox} alt=""/> </Link>
                            <Link to={`/places/shreemangal`} className="image-style220"> <img src={shreemangal} alt=""/> </Link>
                            <Link to={`/places/sundorbon`} className="image-style330"> <img src={sundorbon} alt=""/> </Link>  
                            <h4 className="cox-float-text"> COX'S BAZAR</h4> 
                            <h4 className="shreemangal-float-text"> SHREEMANGAL</h4>  
                            <h4 className="sundorbon-float-text"> SUNDORBON</h4>
                        </div> 
                        }                   
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

export default Places;