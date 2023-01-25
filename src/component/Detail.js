import React from 'react'
import pic1 from '../5s.png'

const Detail = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <div className='container'>
                <div className='banner-about'>
                <div class='card'>
                    <img className="card-img-top-allreport" src={pic1}  alt="Card image cap"></img>
                    <div class='card-body'>
                        <h5 class="card-title">6/1</h5>
                        <p class="card-text">date</p>
                        <p class="card-text">name</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail