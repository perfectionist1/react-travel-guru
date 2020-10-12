import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

const NoMatch = () => {
    return (          
        <Container style={{marginTop: '15%'}}>            
            <Row className="d-flex justify-content-center mt-5">
                <Col className="col-md-6"> 
                    <Jumbotron fluid>
                        <Container>                            
                            <h1 className="text-danger text-center"> 404 Error!</h1>
                            <p className="text-primary pt-4">
                                Please note that your desired page's url is not found. Please recheck and come back with a correct one.
                            </p>                    
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
};

export default NoMatch;