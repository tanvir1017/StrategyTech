import React from 'react';
import img from '../../images/';

const NotFound = () => {
    return (
        <div className='text-center mt-3'>
            <h1 className='text-muted'>Page Not Found</h1>
            <img width='60%' src={img} alt="" /><br />
        </div>
    );
};

export default NotFound;