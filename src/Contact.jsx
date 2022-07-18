import React from 'react'

import contact from "./contact.css"
export const Contact = () => {
  return (
    <>
      <div className='my-4'>
        <h1 className='text-center'> Contact us </h1>
      </div>
      <div className='container contact_div  '>
         <div className='row mx-auto'>
          <div className='col-md-6 col-10 max-auto'>
             <form>
        <div class="mb-3">
       <label className='container' for="exampleFormControlInput1" class="form-label">FullName</label>
      <input className="form"type="text" class="form-control" id="exampleFormControlInput1" name="fullname"  placeholder="Enter youe name" />
      </div>


<div class="mb-3">
  <label className="container"for="exampleFormControlInput1" class="form-label">Phone</label>
  <input  type="number" class="form-control" id="exampleFormControlInput1"  name="phone"
   placeholder="mopbile number" />
</div>


<div class="mb-3">
  <label className='container' for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  name="email" placeholder="name@example.com" />
</div>

<div class="mb-3">
  <label className='container' for="exampleFormControlInput1" class="form-label">Message</label>

  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  ></textarea>
</div>

<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

             </form>
          </div>
        </div>
      </div>
    
    </>
  )
}
export default Contact;