import React from 'react';
import {useParams, useHistory} from 'react-router-dom'


const Faqs = () => {
    let {faqID} = useParams();
    let history = useHistory();
    const handleClick = () => {
        history.push('/')
    }
  return (
    <>
      <h2> {faqID}  </h2>
      <br></br>

      <button onClick={handleClick}> Navigate to home Page </button>
    </>
  )
}

export default Faqs
