import React from 'react';

const Choose = () => {
  return (
    <>
     <h1 className='text-3xl font-bold text-orange-500 my-10 text-center border-t-2 border-zinc-700'>Why Choose Us?</h1>
     <div className='md:flex gap-5'>
     
      <div className="card w-96 bg-orange-400 text-primary-content">
  <div className="card-body text-zinc-700">
    <h2 className="card-title  text-2xl border-l-4 pl-4">Sevice On Time!</h2>
    <p>We Provive On time service on your any product. You will be tension free if you choose our product <br />
    Thanks!</p>
    
  </div>
</div>
      <div className="card w-96 bg-orange-400 text-primary-content">
  <div className="card-body text-zinc-700">
    <h2 className="card-title  text-2xl border-l-4 pl-4">24 Hour Help Line!</h2>
    <p>We Provive 24 Hours dedicated help line service. if your problem is minor, you can solve it over phone <br />
    Thanks!</p>
    
  </div>
</div>
      <div className="card w-96 bg-orange-400 text-primary-content">
  <div className="card-body text-zinc-700">
    <h2 className="card-title  text-2xl border-l-4 pl-4">Authentic Product!</h2>
    <p>Only We Provive authentic car and toys products in bd. <br />
    Thanks!</p>
    
  </div>
</div>
      
    </div>
    </>
    
  );
};

export default Choose;