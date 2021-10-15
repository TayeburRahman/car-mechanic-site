import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const{surviceId}= useParams();
    return (
        <div>
            booking
        </div>
    );
};

export default Booking;