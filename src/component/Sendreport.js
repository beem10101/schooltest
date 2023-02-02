import React, { useState } from 'react'
import pic1 from '../5s.png'
import { v4 } from 'uuid';
import { db, storageref } from '../Firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection,addDoc } from 'firebase/firestore/lite';
const Sendreport = () => {
  const option = [
    {classroom : '1-1'},
    {classroom : '1-2'},
    {classroom : '1-3'},
    {classroom : '1-4'},
    {classroom : '1-5'},
    {classroom : '1-6'},
    {classroom : '2-1'},
    {classroom : '2-2'},
    {classroom : '2-3'},
    {classroom : '2-4'},
    {classroom : '2-5'},
    {classroom : '2-6'},
    {classroom : '3-1'},
    {classroom : '3-2'},
    {classroom : '3-3'},
    {classroom : '3-4'},
    {classroom : '3-5'},
    {classroom : '3-6'},
    {classroom : '4-1'},
    {classroom : '4-2'},
    {classroom : '4-3'},
    {classroom : '4-4'},
    {classroom : '4-5'},
    {classroom : '4-6'},
    {classroom : '5-1'},
    {classroom : '5-2'},
    {classroom : '5-3'},
    {classroom : '5-4'},
    {classroom : '5-5'},
    {classroom : '5-6'},
    {classroom : '6-1'},
    {classroom : '6-2'},
    {classroom : '6-3'},
    {classroom : '6-4'},
    {classroom : '6-5'},
    {classroom : '6-6'},
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
    uploadBytes(imageref, image).then((img) => {
        getDownloadURL(img.ref).then((url) => {
            addDoc(collection(db,classroom), {
                name: name, 
                lastname: lastname,
                classroom: classroom.replace('/','-'),
                image: url,
                date : d,
            })
                .then(() => {
                    alert('Message added successfully');
                    setFormLoad(false)
                })
                .catch((error) => {
                    alert(error.message);
                    setFormLoad(false)
                });
              
              })
    })

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
      {/* <button onClick={getImage}>getImage</button> */}
      <br/>
        <div className='banner-about'>
          <div class="card">
            <img class="card-img-top" src={pic1}  alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title"><i class="bi bi-check-circle"></i>Sendreport Here!!</h5>
              <form class="row mt-3 g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                  <input type='file' id="file-input" multiple='multiple' onChange={(e)=> setImage(e.target.files[0])}></input>
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
                    <button type="submit" class="btn btn-primary">Submit</button>
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