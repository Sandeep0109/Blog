import React from 'react'
import {NavLink} from  "react-router-dom";
 const Common= () => {
  return (
    <>

<section id='header' className='center'>
       <div className='container-fluid nav_bg'>
         <div className='row'>
           <div className='col-10 mx-auto my-3'>
            <div className='row mt-5'>

            
             <div className='col-md-6 pt-lg-0 order-lg-1 mt-5'>
              <h1>Grow your business with <strong className='brand-name'> Sandeep Technical</strong></h1>
                 <h2 className='my-3'>
                   Welcome to About
                 </h2>

                 <div className='mt-5'>
                   <NavLink to='/services' className='btn btn-get-started getdtsrted'>About now</NavLink>
                   {/* <NavLink href="" className="btn-get-started">Get Started </NavLink> */}
                 </div>
             </div>
             
             <div className='col-lg-6 order-1 order-lg-2 header-img my-5'>
                 {/* <img className='rai' src='data:image/jpeg;base64,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 /> */}
             <img className="homeImage" src="https://blog.hubspot.com/hubfs/GettyImages-1255905201%20copy.jpg"/>


             </div>
             </div>
           </div>

         </div>

       </div>
     </section>
    
    </>
  )
}
export default Common;