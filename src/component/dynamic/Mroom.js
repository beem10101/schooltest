import React from 'react'
import { useParams } from 'react-router-dom'
import { classroom } from '../../static/data';
import { useState } from 'react';
import { useEffect } from 'react';



const Mroom = () => {
    const { slug } = useParams();
    const [show,setShow] = useState();
    const [path,setPath] = useState();

    useEffect(() => {
        console.log('hello')
        const post = classroom.classData.find((item)=>item.m === slug)
        console.log("post",post)
        setShow(post)
        const res = classroom.metaData
        console.log(res)
        const resFinding = res.find((item) => Object.keys(item)[0] === slug);
        console.log(resFinding)
        // const resFinding = classroom.data.find((item) => Object.keys(item) === slug);
        setPath(resFinding)
        console.log(post)
        // fecthData()
    },[])

  return (
    <div>
        {show &&(
            <div>
            {/* <div className="header-wrapper">
        <div className="main-info"> */}
      <div className="container">
          <div class="row">
        {/* <div className="banner-list"> */}
          {Object.values(path)[0].map((item) => {
              return (
                  <div class="col">
                <div class="card">
                <img class="img-thumbnail" src={item.img} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">{item.classroom.replace('-','/')}</h5>
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
      )}
      </div>
      )
    }

export default Mroom