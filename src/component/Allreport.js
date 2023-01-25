import React from 'react'
import pic1 from '../5s.png'
import {classroom} from '../static/data.js'


const Allreport = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <div className='banner-list'>
                {classroom.data.map((item) =>{
                    return(
                        <div>
                            <div class='card'>
                                <img className="card-img-top-allreport" src={pic1}  alt="Card image cap"></img>
                                <div class='card-body'>
                                    <h5 class="card-title">{item.classroom}</h5>
                                    <button type="button" class="btn btn-primary">Detail</button>
                                </div>
                            </div>
                        </div>
                ) 
                })}
            </div>
        </div>
    </div>
  )
}

export default Allreport