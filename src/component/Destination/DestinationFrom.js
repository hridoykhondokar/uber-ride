import React, { useState } from 'react';
import DestinationConform from './DestinationConform';


const DestinationFrom = () => {
 const [from, setFrom] = useState ({})
 const [to, setTo] = useState ({})
 const [Destination, setDestination] = useState ({})
    
    const handleBlur = (event) => {
        if(event.target.name === 'from'){
           const fromInfo = {
               area : event.target.value
           } ;
           setFrom(fromInfo)
        }

        if(event.target.name === 'to'){
            const fromInfo = {
                area : event.target.value
            } ;
   
            setTo(fromInfo)
         }
         else{
            const fields = {
                fillUp : false
            }
            setDestination(fields)
         }

    };

    const handleSubmit = (event) => {
        const fields = {fillUp : true}
        setDestination(fields)
        event.preventDefault()
    };


    return (
       <div>
           {
               Destination.fillUp ? <DestinationConform from={from} to={to} ></DestinationConform> : 
               
               <div className='from'>
               <form onSubmit={handleSubmit}>
                  <input className='w-75' onBlur={handleBlur} name='from' type="text" placeholder='From' required/>
                  <br/><br/>
                  <input className='w-75' onBlur={handleBlur} name='to' type="text" placeholder='To' required/>
                  <br/><br/>
                  <input className='w-75 btn-success' style={{border: 'none'}} type="submit" value="submit" />
               </form>
           </div>
           }
            
       </div>
    );
};

export default DestinationFrom;