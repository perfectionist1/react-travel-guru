import React from 'react';

const SundorbonDescription = () => {
    return (
        <div>
            <h1 style={{fontWeight: '900', fontSize: '50px'}}>COX'S BAZAR</h1>
            <p className="mt-3 mb-4 text-justify">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <button className="btn btn-warning pr-4"> <span style={{paddingRight: '10px'}}>Booking</span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
        </div>
    );
};

export default SundorbonDescription;