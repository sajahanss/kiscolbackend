import React from 'react'
import './admin.css'
import Nav from '../Nav'
import Footer from '../footer'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
    <Nav />
    
    <div className='adminpage'>
    <h1 className='fs-1 myh1'>Welcome To Hotel Kiscol Grands Admin Panal</h1>
        <Link className=' btnadmin' to='/roomAdmin'>Rooms</Link>
        <Link className=' btnadmin' to='/bookingAdmin'>Booking</Link>
    </div>
    <Footer />
    </div>
  )
}

export default Admin
