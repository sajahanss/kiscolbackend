import React, { useEffect } from 'react'
import { useState } from 'react'
import './Roomadmin.css'
import axios from 'axios';
import avtr from '../Image/booking/superiorroom.jpg'

export function Roomsdetail(){
  const [totroom,settotroom]=useState(30);
  const [bookedroomdata,setbookedroomdata]=useState([]);
  const roomclr=[];
  const suproom=[];
  const delroom=[];
  const junroom=[];
  var iterstop=false;
  
   useEffect(()=>{
   async function dataretreive(){
    await axios.get("http://localhost:5000/checkindata")
    .then((res)=>{
      setbookedroomdata(res.data)
      
    })
    .catch(err=>console.log(err))
  }
  dataretreive()
   },[])

   if(suproom.length!==0){
    while(suproom.length){
     suproom.pop();
   }
 }

 if(delroom.length!==0){
  while(delroom.length){
   delroom.pop();
 }
}

if(junroom.length!==0){
  while(junroom.length){
   junroom.pop();
 }
}

if(roomclr.length!==0){
  while(roomclr.length){
   roomclr.pop();
 }
}
 
  
  
  for(var i=1;i<=totroom;i++)
  {
   
    if (bookedroomdata.length===0){
      if(i<=10){
        suproom.push(1000+i)
        roomclr.push(false)
      }else if(i<=20){
        delroom.push(2000+(i-10))
        roomclr.push(false)
      }else{
        junroom.push(3000+(i-20))
        roomclr.push(false)
      }

    }else{
   iterstop=false;
    bookedroomdata.map((dd,index)=>{
      
      
        if(i<=10){

          if(parseInt(dd.roomno)===(1000+i)){
            suproom.push(dd.bkid)
            roomclr.push(true)
            iterstop=true
          }
        }else if(i<=20){
          if(parseInt(dd.roomno)===(2000+(i-10))){
            delroom.push(dd.bkid)
            roomclr.push(true)
            iterstop=true
          }

        }else{
          if(parseInt(dd.roomno)===(3000+(i-20))){
            junroom.push(dd.bkid)
            roomclr.push(true)
            iterstop=true
          }
        }
      }) 
      if(iterstop===false){
        if(i<=10){
          suproom.push(1000+i)
          roomclr.push(false)
        }else if(i<=20){
          delroom.push(2000+(i-10))
          roomclr.push(false)
        }else{
          junroom.push(3000+(i-20))
          roomclr.push(false)
        }
      }
    }
  }

  return {suproom,delroom,junroom,roomclr}

}

const Roomadmin = () => {
      
     const roomstot=Roomsdetail();
     const [postImage, setPostImage] = useState( {roomtype:"Superior Rooms", cost:0, inclusion:'', myFile : ""})
     const [roomtype,setroomtype]=useState('')
     const [cost,setcost]=useState(0)
     const [inclusion,setinclusion]=useState('')
     const [profuloadbtn,setprofuploadbtn]=useState(false)
     const [updatebar,setupdatebar]=useState(false)
     
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      createPost(postImage)
      
    }

    const createPost = async (newImage) => {
      try{
          
        await axios.post('http://localhost:5000/roomdatas',newImage)
        .then((data)=>{
          alert('Profile Picture updated')
          setprofuploadbtn(false)
          console.log(data.data.myFile);
          setPostImage({ ...postImage,myFile:data.data.myFile})
        })
        
      }catch(error){
        console.log(error)
      }
    }
    
      const handleFileUpload = async (e) => {
        setprofuploadbtn(true)
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        console.log(base64)
        setPostImage({ ...postImage,roomtype: roomtype, cost:cost, inclusion:inclusion, myFile : base64 })
      }

   const handleupdatebarclose=()=>{
     setupdatebar(false)
   }
          
  return (
    <div>
       
     {updatebar && <div className='rooms-update'>
        <h1 className='fs-2 ml-5 mb-3 mt-5'>Rooms Updation</h1>
          <div className='row'>
            <div className='col-3 '>RoomName/Roomtype</div>
            <div className='col-9 '><select style={{padding:'5px',width:'250px',borderRadius:'5px', marginBottom:'5px'}} onChange={(e)=>{setroomtype(e.target.value)}}>
              <option defaultValue={roomtype}>Superior Rooms</option>
              <option>Deluxe Rooms</option>
              <option>Junior Suite Rooms</option>
              </select></div>
            <div className='col-3 '>cost</div>
            <div className='col-9 '><input style={{padding:'5px',width:'250px',borderRadius:'5px',marginBottom:'5px'}} type='number' placeholder='Cost of the Room' value={cost} onChange={(e)=>{setcost(e.target.value)}} /></div>
            <div className='col-3 '>Inclusion</div>
            <div className='col-9 '><input style={{padding:'5px',width:'250px',borderRadius:'5px',marginBottom:'5px'}} type='text' placeholder='Inclusion With Room' value={inclusion} onChange={(e)=>{setinclusion(e.target.value)}} /></div>
          </div>
         <h1>Chenge Room Picture</h1>
          <label htmlFor="file-upload" className='custom-file-upload1'>
          <img src={postImage.myFile || avtr} alt="img"/>
        </label>
        
        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         /><br></br>
          {profuloadbtn && <button type='submit' className='btn btn-dark butt' onClick={handleSubmit}>Submit</button>}
          <button type='submit' className='btn btn-dark ms-3 butt' onClick={handleupdatebarclose}>close</button>
      </div>
}
<div className='Header-bar-button'>
 <button className='btn btn-dark w-75' onClick={()=>{setupdatebar(true)}}>Rooms Details Update Portal</button>
 </div>
     
     <h1 className='text-center fs-2 mb-3'>Superior Rooms</h1>
     <div className='rooms'> {
        roomstot.suproom.map((room,index)=>( 
           <div className='room border' style={roomstot.roomclr[index] ? {width:'100px',height:'100px', backgroundColor:'olivedrab', color:'white'} :{width:'100px',height:'100px'}}><h1>{room}</h1></div>
        ))
      }
    </div>
    <h1 className='text-center fs-2 mb-3'>Deluxe Rooms</h1>
    <div className='rooms'> {
        roomstot.delroom.map((room,index)=>( 
           <div className='room border' style={roomstot.roomclr[index+10] ? {width:'100px',height:'100px', backgroundColor:'olivedrab', color:'white'} :{width:'100px',height:'100px'}}><h1>{room}</h1></div>
        ))
      }
    </div>
    <h1 className='text-center fs-2 mb-3'>Junior Suite Rooms</h1>
    <div className='rooms'> {
        roomstot.junroom.map((room,index)=>( 
           <div className='room border' style={roomstot.roomclr[index+20] ? {width:'100px',height:'100px', backgroundColor:'olivedrab', color:'white'} :{width:'100px',height:'100px'}}><h1>{room}</h1></div>
        ))
      }
    </div>
    </div>
  )
}

export default Roomadmin


function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}