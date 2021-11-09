import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./DestinationConform.css";
import DestinationLocked from './DestinationLocked';
import BikeData from '../../FakeData/BikeData.json';
import BusData from '../../FakeData/BusData.json';
import CarData from '../../FakeData/CarData.json';
import TrainData from '../../FakeData/TrainData.json'
import ChoseTransport from './ChoseTransport';

const DestinationConform = (props) => {
    const from = props.from.area;
    const to = props.to.area;
    const { transport } = useParams()
    const [bikes, setBikes] = useState()
    const [cars, setCars] = useState()
    const [buses, setBuses] = useState()
    const [trains, setTrains] = useState()

     useEffect(()=>{
        setBikes(BikeData)
        setCars(BusData) 
        setBuses(CarData) 
        setTrains(TrainData) 
     },[])

    return (
        <div style={{ backgroundColor: '#336B87', padding: '15px', borderRadius: '9px' }}>
            <div className="timeLine">
                <DestinationLocked from={from} to={to}></DestinationLocked>
            </div>
            <div>
                {transport === 'BIKE' &&
                    bikes?.map(bike => <ChoseTransport name={bike}></ChoseTransport>)
                }
                {transport === 'CAR' &&
                    cars?.map(car => <ChoseTransport name={car}></ChoseTransport>)
                }
                {transport === 'TRAIN' &&
                    trains?.map(train => <ChoseTransport name={train}></ChoseTransport>)
                }
                {transport === 'BUS' &&
                    buses?.map(bus => <ChoseTransport name={bus}></ChoseTransport>)
                }
            </div>
        </div>
    );
};

export default DestinationConform;