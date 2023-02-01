import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { classroom } from '../../static/data';
import { db } from '../../Firebase.js'
import {collection,getDocs,addDoc,getFirestore} from 'firebase/firestore/lite'
import pic1 from '../../5s.png'

const Classroom = () => {
    const { slug } = useParams();
    const [show,setShow] = useState();
    const [dataList, setDataList] = useState();
    const [loading, setLoading] = useState(true);
    const fecthData = async () => {
        setLoading(true)
        const Data = collection(db,`${slug}`);
        console.log("Data",Data)
        const data = await getDocs(Data)
        console.log("data",data)
        const reportList = data.docs.map((doc) => doc.data())
        setDataList(reportList)
        console.log(reportList)
        setLoading(false)
    }
    useEffect(() => {
        console.log('hello')
        const post = classroom.data.find((item)=>item.classroom === slug)
        console.log("post",post)
        setShow(post)
        console.log(post)
        fecthData()
    },[])

    if(loading){
        return(
            <div>
                loading
            </div>
        )
    }


    
    return (
      <div>
        {show && dataList.length > 0 &&(
            <div>
                Classroom
                {slug}
                {dataList.map((item)=>{
                    return (
                        <div>
                            <div className='banner-about'>
                            <div class='card'>
                            <img className="card-img-top-allreport" src={item.image}  alt="Card image cap"></img>
                                <div class='card-body'>
                                    <h5 class="card-title">{}</h5>
                                    <p class="card-text">date:{item.date}</p>
                                    <p class="card-text">by:{item.name}  {item.lastname}</p>
                                </div>
                            </div>
                </div>
                            <br/>
                        </div>
                    )
                })}
            </div>
        )}

        {show && dataList.length === 0 && (
            <div>
                no report!
            </div>
        )}

        {!show && (
            <div>
                No data!!!
            </div>
        )}
      </div>
    )
}

export default Classroom