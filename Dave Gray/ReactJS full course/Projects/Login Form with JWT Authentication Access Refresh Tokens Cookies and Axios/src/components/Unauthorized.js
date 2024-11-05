
// The [Unauthorized] page ->  to be displayed for the unauthorized users [public Route] + wiht assinging a function of Goback   : 

import React from 'react'

import { useNavigate } from 'react-router-dom';


const Unauthorized = () => {
  const navigate = useNavigate();

  // Navigatge into  the  previous page   :
  const goBack = () => navigate(-1);


  return (
    <section>
      <h1>  Unauthorized </h1>
      <br />
      <p> You dont have access to the requisted page   </p>
      <div className='flexGrow'>
        <button
          onClick={goBack}
        >
          Go back
        </button>
      </div>
    </section>
  )
}

export default Unauthorized