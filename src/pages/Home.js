import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='row'>
      
      <div className="col-lg-12">
        {/* <img className='img' src="https://i.postimg.cc/sX4LndBz/images-8.png" alt="" /> */}
        {/* <br /><br /><br /> */}
        <div class="d-grid gap-2 col-6 mx-auto bt">
          <Link to={'/quiz'}>
          <button style={{position:'relative', left:'100px'}} class="btn btn-primary" type="button">
            <b style={{ fontSize: '30px' }}> Let's Start</b></button>
            </Link>
        </div>
      </div>
   
    </div>
  )
}

export default Home