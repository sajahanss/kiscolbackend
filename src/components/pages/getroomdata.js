import { useEffect, useState } from 'react'
import axios from 'axios'


const Getroomdata = () => {
    const [roomavailablity,setroomavailability]=useState([])
    const [roomsupdation,setroomsupdation]=useState([])
    
    useEffect(()=>{
         async function roomget(){
            await axios.get('https://kiscol-backend.onrender.com/roomavailable')
            .then((res)=>{
                
                setroomavailability(res.data)
              })
            .catch((err)=>console.log(err))
         }
           
         async function roomupdation(){
            await axios.get('https://kiscol-backend.onrender.com/roomdatas')
            .then((res)=>{
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