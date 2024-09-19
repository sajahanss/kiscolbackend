import React, { useState } from 'react'
import bannerImg from './Image/Reservation/banner.jpg'
import corporateImg from './Image/Reservation/corporate.jpg'
import mapImg from './Image/Reservation/map.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reservation.css'
import Nav from './Nav';
import Footer from './footer';

import DatePicker from 'react-datepicker'




const Reservation = () => {
    const [date, setDate] = useState(new Date());
  const [todate, settodate] = useState(new Date());
  return (
    <div>
    <Nav/>

    <div className='row m-0 mt-5'>
          <div className='col-12 col-lg-6 bgcolor p-5'>
             <h1 className='fs-2 fw-bold text-white text-center'>Book Your Stay With Best Deals</h1>
            <p className='me-5 lbl'>Checkin Date :</p>  <DatePicker dayAriaLabel="Day" className='datepicker' dateFormat="dd-MMM-YYYY hh:mm aa" selected={date} minDate={new Date()} onChange={(date) => setDate(date)} />
            <br></br> <p className='me-5 lbl'>Checkout Date :</p> <DatePicker  className='datepicker' dateFormat="dd-MMM-YYYY hh:mm aa" selected={date} minDate={new Date()} onChange={(date) => setDate(date)} />
            <br></br> <p className='me-5 lbl'>Adult Count :</p> 
            <select name="count" className="select">
            <option value="0">Adults</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            </select>
            <br></br> <p className='me-5 lbl'>Children Count :</p>
            <select name="count" className="select">
            <option value="0">Children</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            </select>
            <br></br>
           <center> <a href='/booking' className='btn1 btn'>Check Availability</a></center>
          </div>    
          <div className='col-12 col-lg-6 m-0 p-0'>
          <img src={bannerImg} alt='banner' className='img m-0'/>
          </div>
    </div>

<section className='container-fluid text-justify bg-white p-3  m-0'>
<div className='corporate p-3'>
    <h1 className='fs-3 text-center m-3'>CORPORATTE</h1>
    
         <div className='corporate' style={{fontFamily:'Monospace', fontWeight:'bold'}} >
            <img src={corporateImg} alt='corporate' style={{width:'400px',  float:'left', height:'200px', paddingLeft:'75px', marginRight:'20px',   marginTop:'5px'}}/>
         </div>
         <div className='corporate1'>
         <p>Business stays in Coimbatore are almost becoming a norm of the day, and everyday Coimbatore hosts 
           a prolific profile of business executives and corporate guests, and of these the most discerning
           guests along with those who prefer nothing but the best, often choose to stay at Hotel Kiscol Grands and
           many also find with us a home away from home.</p><br/>

         <p>To get in touch with our corporate sales office, to get special corporate rates,</p><br/>
         <p><b>please email us on<span  style={{color:'blue'}}> info@kiscolgrands.com </span>or <span style={{color:'blue'}}>reservation@kiscolgrands.com</span> </b> </p>
         </div>
</div>
<section>
    <div className='budget ms-5 me-5 ' >
    <h1 className='fs-3 text-center m-3'>BUDGET HOTELS IN COIMBATORE NEAR GANDHIPURAM </h1>
    <b>
    <p > If you are traveling to Coimbatore and are on a tight budget, it makes sense that you will look for hotels near coimbatore railway station to book your stay at. Not only in terms of budget but terms of location as well a lot of aspects have to be kept in consideration. If the hotel is located at the heart of the city, close to an airport or railway station, it will be easier for you to commute. It will reduce travel time as well as expenses (which is a bonus as you are on a budget)!</p><br/>
    <p>In such cases, looking for <span  style={{color:'blue'}} >budget hotels in Coimbatore near Gandhipuram </span>can be ideal to cut costs during your trip. Why is Gandhipuram ideal? Because it is located at the heart of Coimbatore city - making it ideal for transport, tourism, and facilities. It is close to many means of commuting for you, which will ensure your stay is comfortable as well as a satisfactory stay for your guests if you are organizing a banquet or meeting. You can easily make your way to your hotel after a long day of travel and you can plan for trips in and around the place while you are staying. Another aspect to keep in mind is the availability of budget facilities and shopping centers or malls near the <span  style={{color:'blue'}} >hotels in coimbatore.</span> </p><br/>
    <p>This will help you drop by for quick last-minute purchases at a mall or to buy gifts and souvenirs for your family. The hotels as well are mostly star hotels that offer a wide variety of facilities without compromising on budget. Be it luxury facilities like swimming pools, spas, pet-friendly services, and in-room dining, or basic comfort services like a multi-cuisine restaurant, valet parking, or an in-house bar, you can be sure that all your specific needs are met.</p>
    </b>
    </div>
</section>

<section>
    <div className='map'>
        <a href='https://www.google.com/maps/embed/v1/place?q=Hotel+Kiscol+Grands,+Coimbatore,+Tamil+Nadu,+India&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU' target='_blank'>
    <img src={mapImg} alt='map' style={{width:'85%', height:'350px', marginLeft:'8%',  marginTop:'75px'}}/></a>


    </div>
</section>


</section>
<Footer/>
    </div>
  )
}

export default Reservation



