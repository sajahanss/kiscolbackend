import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './BookingAdmin.css'
import { Roomsdetail } from './Roomadmin'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const BookingAdmin = () => {
    const navigate=useNavigate()
    const [invoicedatas,setinvoicedatas]=useState([])
    const [bookingbar,setbookingbar]=useState(false)
    const [bookeddata,setbookeddata]=useState([]);
    const [roomtype,setroomtype]=useState([]);
    const [selected,setselected]=useState(null)
    const bookedroomtype=Roomsdetail()
    const [roomno,setroomno]=useState(null)
    const [status,setstatus]=useState([])
  
    
    useEffect(()=>{
        
        axios.get("https://kiscol-backend.onrender.com/admin/bookingdetails")
        .then((res)=>{
        
           setinvoicedatas((res.data).reverse())
           
        })
        .catch(err=>console.log(err))
        

    },[])
  

    if(invoicedatas.length!==0){
        invoicedatas.map((st)=>{
          
            status.push(false);
        })
    }

    const handlebooking=async(data,index)=>{
        if(roomtype.length!==0){
           while(roomtype.length){
            roomtype.pop();
          }
        }
        if(data.roomtype==='Superior Double'){
             bookedroomtype.suproom.map((roomdata,index)=>{
               if(bookedroomtype.roomclr[index]=== false){
                 roomtype.push(roomdata)
                }
             })
             
        }else if(data.roomtype==='Delux Room'){
            bookedroomtype.delroom.map((roomdata,index)=>{
                if(bookedroomtype.roomclr[index+10]=== false){
                roomtype.push(roomdata)
                }
             })
             
        }else if(data.roomtype==='Junior Room'){
            bookedroomtype.junroom.map((roomdata,index)=>{
                if(bookedroomtype.roomclr[index+20]=== false){
                roomtype.push(roomdata)
                }
             })
             
        }
        
       
         setbookingbar(true);
         setbookeddata(data);
         console.log(data.cstatus)
        
    }

    const handleselect=async(dat,i)=>{
        setselected(i)
        setroomno(dat);
        
    
    }

    const handlecheckin=async()=>{
       
         const bkid=bookeddata.book_id
         const broomtype=bookeddata.roomtype
         const guestname=bookeddata.guestname
         const checkintime=new Date().toString()
         const book_id=bookeddata._id;
         const formdata={bkid,broomtype,roomno,guestname,checkintime,book_id}
         
         await axios.post("https://kiscol-backend.onrender.com/checkin",formdata)
         .then((output)=>{
            alert('checked In')
            setbookingbar(false);
            navigate('/Adminkiscol')
         })
         .catch((err)=>{console.log(err)})
         
         

    }

    const handlebookingchckout=async(data,index)=>{
        const coutid=data.book_id;
       await axios.post('https://kiscol-backend.onrender.com/checkout',{coutid})
       .then((output)=>{
        alert('checked out')
        setbookingbar(false);
        navigate('/Adminkiscol')
     })
     .catch((err)=>{console.log(err)})

    }

  return (
    <div className='admincontainer'>
        
        <div className="order__history__container2">
        <div className='Header-bar-button'>
            <Link className='btn btn-dark w-75' to='/Adminkiscol'>Back To Admin Page</Link>
         </div>
                <div className="order__history2">
                    <div className="order__history__header2 fs-1 text-center m-3">Booking Information </div>
                    {/* <button onClick={handleinvoice}>view orders</button> */}
                    <div className="order__history__detail2">
                        <div className='container2'>
                        <table className='table2'>
                                <tr>
                                    <th>User_id</th>
                                    <th>booking_id</th>
                                    <th>GuestName</th>
                                    <th>PhoneNumbe/E-mail</th>
                                    <th>Date</th>
                                    <th>RoomType </th>
                                    <th>Rooms</th>
                                    <th>Nights</th>
                                    <th>Paid Amount</th>
                                    <th>PaymentId</th>
                                    <th>Checkin Status</th>
                                    <th>Booking Status</th>
                                    
                                </tr>
                                {
                    invoicedatas.map((d,index)=>(
                        <tr>
                            <td>{d.userid}</td>
                            <td>{d.book_id}</td>
                            <td>{d.guestname}</td>
                            <td>{d.phonenumbet}/{d.guestemail}</td>
                            <td>{new Date(d.date).getDate()+'-'+new Date(d.date).getMonth()+'-'+new Date(d.date).getFullYear()}</td>
                            <td>{d.roomtype}</td>
                            <td>{d.totroom} Room(s)</td>
                            <td>{d.no_night} Nights(s)</td>
                            <td>{d.gtot}</td>
                            <td>{d.payment_id}</td>
                            <td>{d.cstatus !== 'pending' && d.cstatus !== 'Checkout' ? <button className='btn bg-danger' onClick={(e)=>{handlebookingchckout(d,index)}}>CheckOut</button> :<span><b style={{color:'blue'}}>Check-In</b> -- {d.cindat}</span> }</td>
                            <td>{d.cstatus !== 'Checkin' && d.cstatus !== 'Checkout' ? <button className='btn bg-success' onClick={(e)=>{handlebooking(d,index)}}>Check In</button> :<span><b style={{color:'blue'}}>Check-Out </b> -- {d.coutdate}</span>}</td>
                            
                        </tr>
                    ))
                    
                }
                               
                            </table>


               
                        </div>
                    </div>
                </div>
            </div>

        { bookingbar && <div className='check-in' >
            <div className='d-flex justify-content-between'>
            <h1 className='fs-2 text-center m-3'>Guest Details</h1>
            <button className='btn m-2 text-center bg-danger' onClick={()=>{setbookingbar(false)}} style={{borderRadius:'50%', border:'0.5px solid black'}}>X</button>
            </div>
              <div className='row m-0 cin-header'>
                <div className='col-6'>GuestName : {bookeddata.guestname}</div>
                <div className='col-6'>Contact No : {bookeddata.phonenumbet}</div>
                <div className='col-6'>Address : {bookeddata.address}</div>
                <div className='col-6'>Email : {bookeddata.guestemail}</div>
                <div className='col-6'> Booking Id : {bookeddata.book_id}</div>
                <div className='col-6'>Booking Date : {new Date(bookeddata.date).getDate()+'-'+new Date(bookeddata.date).getMonth()+'-'+new Date(bookeddata.date).getFullYear()}</div>
                <div className='col-6'> RoomType : {bookeddata.roomtype}</div>
                <div className='col-6'> Check in Time : {new Date().toLocaleTimeString()}</div>
                <div className='col-6'> Booked Rooms : {bookeddata.totroom}</div>
              </div>
              <div>
              <label className='form-label'>Asign Room To Guest </label>
              <h1 className='fs-5 text-center'>{bookeddata.roomtype}</h1>
                <div className='rooms1'> {
                       roomtype.map((rootype,index)=>(
                        <div>
                        <div className='room1' style={selected == index ?{width:'50px',height:'50px', border:'0.5px solid black',backgroundColor:'yellow'}:{width:'50px',height:'50px', border:'0.5px solid black'}} key={index} onClick={(e)=>{handleselect(rootype,index)}} >{rootype}</div>
                         </div>
                       ))
                            }
                </div>
                <center><button type='button' className='btn btn-success w-75' onClick={handlecheckin}>Check In</button></center>
             </div>
             
        </div> 
    }

    </div>
  )
}

export default BookingAdmin
