import React from 'react'
import './admin.css'
import Nav from '../Nav'
import Footer from '../footer'

const Admin = () => {
  return (
    <div>
    <Nav />
    
    <div className='adminpage'>
    <h1 className='fs-1 myh1'>Welcome To Hotel Kiscol Grands Admin Panal</h1>
        <a className=' btnadmin' href='/roomAdmin'>Rooms</a>
        <a className=' btnadmin' href='/bookingAdmin'>Booking</a>
    </div>
    <Footer />
    </div>
  )
}

export default Admin
