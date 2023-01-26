import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { classroom } from '../../static/data';
import { db } from '../../Firebase.js'
import {collection,getDocs,addDoc,getFirestore} from 'firebase/firestore/lite'
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
        {show && dataList &&(
            <div>
                Classroom
                {slug}
                {dataList.map((item)=>{
                    return (
                        <div>
                            <p>{item.name}</p>
                            <p>{item.lastname}</p>
                            <p>{item.date}</p>
                        </div>
                    )
                })}
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