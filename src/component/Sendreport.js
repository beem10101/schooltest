import React, { useState } from 'react'
import pic1 from '../5s.png'
import { v4 } from 'uuid';
import { db, storageref } from '../Firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection,addDoc } from 'firebase/firestore/lite';
const Sendreport = () => {
  const option = [
    {classroom : '6-1'},
    {classroom : '6-2'},
    {classroom : '6-3'},
    {classroom : '6-4'},
    {classroom : '6-5'},
    {classroom : '6-6'},
    {classroom : '6-7'},
    {classroom : '6-8'}
  ]
  const [name, setName] = useState()
  const [lastname, setLastName] = useState()
  const [classroom,setClassroom] = useState()
  const [image, setImage] = useState()
  const [formLoad,setFormLoad] = useState()
  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormLoad(true);
    const path = `/images/${image.name}/` + v4();
    console.log('v4:', path)
    const imageref = ref(storageref, path);
    const d = new Date().toLocaleString()
    console.log(d)
    // uploadBytes(imageref, image).then((img) => {
    //     getDownloadURL(img.ref).then((url) => {
    //         addDoc(collection(db,classroom), {
    //             name: name, 
    //             lastname: lastname,
    //             classroom: classroom,
    //             image: url,
    //             date : d,
    //         })
    //             .then(() => {
    //                 alert('Message added successfully');
    //                 setFormLoad(false)
    //             })
    //             .catch((error) => {
    //                 alert(error.message);
    //                 setFormLoad(false)
    //             });
              
    //           })
    // })

    setName("")
    setLastName("")
    setImage(null)
    document.getElementById('file-input').value=''
    // setClassroom('')

  }

const getImage = () =>{
  console.log(image);
}

  return (
    <div className='header-wrapper'>
    <div className='main-info'>
      <div className='container'>  
      <br/>
      <br/>
      <button onClick={getImage}>getImage</button>
      <br/>
        <div className='banner-about'>
          <div class="card">
            <img class="card-img-top" src={pic1}  alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title"><i class="bi bi-check-circle"></i>Sendreport Here!!</h5>
              <form class="row mt-3 g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                  <input type='file' id="file-input" onChange={(e)=> setImage(e.target.files[0])}></input>
                  <div class="col-md-4 mt-3">
                    <label for="fname">First name:</label>
                    <input type="text" placeholder='Enter your first name' value={name}
                    
                    onChange={(e)=> setName(e.target.value)}></input>
                  </div>
                  <div class="col-md-4">
                    <label for="lname">Last name:</label>
                    <input type="text" placeholder='Enter your last name' value={lastname}
                    onChange={(e)=> setLastName(e.target.value)}>
                    </input>
                  </div>
                  <div class="col-md-3 ">
                    <label for="cars">Choose:</label>
                    <select name="cars" id="cars" onChange={e => setClassroom(e.target.value)}>
                      {option.map((item)=>{
                        return (
                        <option>
                          {item.classroom}
                          </option>
                          );
                      })}
                    </select>
                  </div>
                  <div class="col-12 mt-5">
                    <button class="btn btn-primary" type="submit">Submit</button>
                  </div>
              </form>
              </div>
            </div>
        </div>
      <br/>
      <br/>
      </div>
      </div>
  </div>
    )
}

export default Sendreport