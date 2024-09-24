import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Getroomdata = () => {
    const [roomavailablity,setroomavailability]=useState([])
    const [roomsupdation,setroomsupdation]=useState([])
    
    useEffect(()=>{
         async function roomget(){
            await axios.get('http://localhost:5000/roomavailable')
            .then((res)=>{
                console.log(res)
                setroomavailability(res.data)
              })
            .catch((err)=>console.log(err))
         }
           
         async function roomupdation(){
            await axios.get('http://localhost:5000/roomdatas')
            .then((res)=>{console.log(res)
                setroomsupdation(res.data)
            })
            .catch((err)=>console.log(err))
         }
         roomget()
         roomupdation()

    },[])

    
       
  return {roomsupdation,roomavailablity}

}

export default Getroomdata