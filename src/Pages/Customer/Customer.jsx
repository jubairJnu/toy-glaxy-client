import React, { useEffect, useState } from 'react';
import HappyCus from './HappyCus';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(()=>{
    fetch('https://toy-glaxy-server.vercel.app/customer')
    .then(res => res.json())
    .then(data => setCustomers(data))
  },[])
  return (
   <div>
    <h1 className='text-3xl font-bold text-orange-500 my-10 text-center'>Our Happiest Client</h1>
     <div className='md:flex gap-5'>
      {
        customers.map(customer=> <HappyCus
        key={customer._id}
        customer={customer}
        ></HappyCus> )
      }
    </div>
   </div>
  );
};

export default Customer;