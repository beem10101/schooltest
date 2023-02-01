import React from 'react'
import pic1 from '../5s.png'
import {classroom} from '../static/data.js'

const Allreport = () => {
  return (
    <div>
    {/* <div className="header-wrapper">
      <div className="main-info"> */}
      <div className="container">
          <div class="row">
        {/* <div className="banner-list"> */}
          {classroom.data.map((item) => {
            return (
              <div class="col">
                <div class="card">
                <img class="img-thumbnail" src={item.img} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">{item.classroom}</h5>
                    <h5 class="card-title">{item.img}</h5>
                    <a
                      type="button"
                      class="btn btn-primary"
                      href={"classroom/" + item.classroom}
                      role="button"
                      >
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
  )
}

export default Allreport