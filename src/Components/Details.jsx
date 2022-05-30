import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = ({movies}) => {
  const Params=useParams();
  console.log(Params)
  const mov =movies.find(el=>el.id==Params.id)
  console.log(mov)
  return (
    <div className='detail'> 
      <iframe src={mov.trailer} frameborder="0" title='youtube video player' width="500" height="315"></iframe>
            <div className='test'>
            <h2>{mov.title}</h2>
            <p>{mov.description}</p>
            </div>

        
      <Link to="/"> Go back </Link>
    </div>

  )
}

export default Details