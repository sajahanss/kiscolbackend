import Account from './Account';
import './MyAccount.css';
import { Link } from 'react-router-dom'
import { logout } from '../services/Auth';
import { getUserData, getUseremail } from '../services/Storage';
import { getUserName } from '../services/Storage';
import axios from 'axios'
import { useEffect, useState } from 'react';

import UploadedDP from './uploadprofile';


const MyAccount = () => {
    const [invoicedatas,setinvoicedatas]=useState([]);
    var user_id= getUserData();
    const [inorderbar,setinorderbar]=useState(false)

    const handleopenbar=()=>{
        if(inorderbar===false){
            setinorderbar(true)
        }else{
            setinorderbar(false)
        }
    }



   

   
    useEffect(()=>{
        axios.post("https://kiscol-backend.onrender.com/bookingdetails",{user_id})
        .then((res)=>{
            
           setinvoicedatas((res.data).reverse())
           
        })
        .catch(err=>console.log(err))
    },[])

   
   

    const logoutUser = ()=>{
        console.log("sign out")
        logout();
        window.location.reload(false);
        
    }
    return ( 
        <Account>
             <a type='submit' href='/' className='btn mt-3' style={{width:'100px', backgroundColor:'#CFB53B',color:'white'}}>Home</a>
               <div className="account__details__container">
                <div className="account__details__header">
                    <div className="details__header">Account Details</div>
                    <UploadedDP/>
                </div>
                <div className="account__details">
                    <div className="account__holder__name">Account holder name : {getUserName()}</div>
                    <div className="account__holder__email">Account holder email : {getUseremail()}</div>
                    <div className="manage__account__action mt-2">
                       {getUseremail()==='admin@admin.in' ? <Link to="/Adminkiscol" className='btn btn-dark'>Admin</Link> : null }
                        <Link to="/" className="btn btn-dark ms-5" onClick={logoutUser} style={{cursor:"pointer"}}>
                    Sign out
                  </Link>  
                    </div>
                </div>
            </div>
            
            <div className="order__history__container">
                <div className="order__history">
                    <div className="order__history__header">Your Bookings </div>
                    {/* <button onClick={handleinvoice}>view orders</button> */}
                    <div className="order__history__detail">
                        <div className='container1'>
                        <table className='table'>
                                <tr>
                                    <th>booking_id</th>
                                    <th>GuestName</th>
                                    <th>Date</th>
                                    <th>RoomType </th>
                                    <th>Rooms</th>
                                    <th>Room Cost</th>
                                    <th>Nights</th>
                                    <th>Paid Amount</th>
                                    <th>PaymentId</th>
                                    <th>Booking Status</th>
                                </tr>
                                {
                    invoicedatas.map((d,index)=>(
                        <tr>
                            <td>{d.book_id}</td>
                            <td>{d.guestname}</td>
                            <td>{d.date}</td>
                            <td>{d.roomtype}</td>
                            <td>{d.totroom} Room(s)</td>
                            <td>{d.cost}</td>
                            <td>{d.no_night} Nights(s)</td>
                            <td>{d.gtot}</td>
                            <td>{d.payment_id}</td>
                            <td>Confirm</td>
                        </tr>
                    ))
                    
                }
                               
                            </table>


               
                        </div>
                    </div>
                </div>
            </div>
           
        </Account>
     );
}
 
export default MyAccount;