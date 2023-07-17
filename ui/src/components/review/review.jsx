import React, { useState } from 'react';
import {ImStarEmpty} from 'react-icons/im'
import SingleReview from './singleReview';
import CreateReview from './createreview';
import {useAuth0} from '@auth0/auth0-react'
import {Navigate} from "react-router-dom"

function Review() {

   const [userReview,setUserReview]=useState([
      {Name:"User Unknown",Review:`The Reviews component is a composite of Comments and Rating components ready for use. 
      The Reviews Summary (Display) component provides a summary of an active or closed 
      instance of Reviews component for display elsewhere on the site`,Date:"23/12/2021",Receive:4,Ratting:4.5},
      {Name:"User Unknown",Review:`The Reviews component is a composite of Comments and Rating components ready for use. 
      The Reviews Summary (Display) component provides a summary of an active or closed 
      instance of Reviews component for display elsewhere on the site`,Date:"267/12/2021",Receive:6,Ratting:4.5},
      {Name:"User Unknown",Review:`The Reviews component is a composite of Comments and Rating components ready for use. 
      The Reviews Summary (Display) component provides a summary of an active or closed 
      instance of Reviews component for display elsewhere on the site`,Date:"23/12/2021",Receive:4,Ratting:4.5},
      {Name:"User Unknown",Review:`The Reviews component is a composite of Comments and Rating components ready for use. 
      The Reviews Summary (Display) component provides a summary of an active or closed 
      instance of Reviews component for display elsewhere on the site`,Date:"267/12/2021",Receive:6,Ratting:4.5}
   ]);
   

    return ( 
        <div className="container mx-auto relative">
    
       <CreateReview/>
       <SingleReview UserReview={userReview}/>
         
        </div>
     );
}

export default Review;