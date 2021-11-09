import React from 'react';

const ChoseTransport = (props) => {
    const { transport, cost, img, person } = props?.name;
    return (
        <div style={{ backgroundColor: '#2A3132',color:'white', borderRadius: '5px' }} className='d-flex justify-content-between align-items-center flex-wrap p-1 mb-2'>
            <img style={{ width: '60px', borderRadius: '2px' }} src={img} alt="" />
            <p >&nbsp;{transport}</p>
            <p>&nbsp;{person}</p>
            <p>${cost}</p>
        </div>
    );
};

export default ChoseTransport;