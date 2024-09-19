import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import facilitybgImg from './Image/Facilities/facilitybg.jpg'
import checkinImg from './Image/Facilities/checkin.jpg'
import gymImg from './Image/Facilities/gym.jpg'
import breakfastImg from './Image/Facilities/breakfast.jpg'
import ironingImg from './Image/Facilities/ironing.jpg'
import visitorsImg from './Image/Facilities/visitors.jpg'
import smokingImg from './Image/Facilities/smoking.jpg'
import paymentImg from './Image/Facilities/payment.jpg'
import mailsImg from './Image/Facilities/mails.jpg'
import pubImg from './Image/Facilities/pub.jpg'
import empireImg from './Image/Facilities/empire.jpg'
import firstaidImg from './Image/Facilities/firstaid.jpg'
import checkoutImg from './Image/Facilities/checkout.png'
import banquetsImg from './Image/Facilities/banquets.jpg'
import roomsImg from './Image/Facilities/rooms.jpg'
import carrentalImg from './Image/Facilities/carrental.jpg'
import Nav from "../Nav";
import Footer from "../footer";

const Facilities = () => {
  return (
    <section>
      <Nav />
              <div className='facilitybg' >
            <img src={facilitybgImg} alt='facilitybg' style={{width:'100%', height:'300px' }}/>
        </div>

<section>
  <div className="Directory">
    <h1 style={{textAlign:"center", fontSize:'50px', marginTop:'35px' , marginBottom:'25px'}}>DIRECTORY OF SERVICES</h1>
    <p style={{textAlign:"center", fontWeight:"bold", marginTop:'35px', marginBottom:'25px' }}>Extension numbers of frequently used Services.</p>

    <section className="container Services d-flex justify-content-between" style={{marginTop:'20px', fontSize:'30px'}}>
    <div className="User">
    <i className="fa fa-user" aria-hidden="true" style={{fontSize:'35px', color:'#E9B947', marginLeft:'25px'}}></i>
    <h5 style={{ fontSize:'15px', fontWeight:'bold'}}>Operator-9</h5>
    </div>
    <div className="building" style={{marginTop:'1px', paddingBottom:'50px'}} >
    <i class="fa fa-building" style={{fontSize:"25px", color:'#E9B947', marginLeft:'35px' }}></i>
    <h5 style={{ fontSize:'15px', fontWeight:'bold'}}>Reception - 5    </h5>
    </div>
    <div className="Room Service">
    <i class="fa fa-bed" aria-hidden="true" style={{fontSize:"35px", color:'#E9B947', marginLeft:'35px' }}></i>
    <h5 style={{ fontSize:'15px', fontWeight:'bold'}}>Room Service - 7</h5>
    </div>
    <div className="Duty Manager - 6">
    <i className="fa fa-user" aria-hidden="true" style={{fontSize:'35px', color:'#E9B947', marginLeft:'25px'}}></i>
    <h5 style={{ fontSize:'15px', fontWeight:'bold'}}>Duty Manager - 6</h5>
    </div>
    <div className="Duty Manager - 6">
    <i className="fa fa-phone" aria-hidden="true" style={{fontSize:'35px', color:'#E9B947', marginLeft:'35px'}}></i>
    <h5 style={{ fontSize:'15px', fontWeight:'bold'}}>Access for calls - 0</h5>
    </div>
</section>

<section>
  <div className="row " style={{marginLeft:'100px'}} >
    <div className="col-5 ps-0 " style={{backgroundColor:'#ddd'}}   >
    <img src={checkinImg} class="rounded float-left ms-0" alt="chekin" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Quick check In</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Please send us valid Government Photo ID Proof and 
        V-Card to have a quick check-in. Whatsup - 8508644487.</p>
    </div>
    <div className="col-5 ps-0" style={{backgroundColor:'#ddd', marginLeft:'60px'}} >
    <img src={gymImg} class="rounded float-left ms-0" alt="chekin" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Gym</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Timing 8 A.M. to 8 P.M.</p>
    </div>
    </div>
    <div className="row " style={{marginLeft:'100px', marginTop:'45px'}} >
    <div className="col-5 ps-0" style={{backgroundColor:'#ddd'}}   >
    <img src={breakfastImg} class="rounded float-left" alt="breakfast" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Breakfast</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}> Start your day with a lovely breakfast at our Empire restaurant.<br/>
    Daily from 7. A.M. to 10 A.M.</p>
    </div>
    <div className="col-5 ps-0" style={{backgroundColor:'#ddd', marginLeft:'60px'}} >
    <img src={ironingImg} class="rounded float-left" alt="ironing" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Laundry and Ironing</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Get your clothes laundered between 8 A.M. to 5 P.M.</p>
    </div>
    </div>
    <div className="row " style={{marginLeft:'100px', marginTop:'45px'}} >
    <div className="col-5 ps-0 " style={{backgroundColor:'#ddd'}}   >
    <img src={visitorsImg} class="rounded float-left" alt="visitors" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Guest and visitors</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Visitors are not allowed to enter the room after 1800 hours. 
      on such cases you might use our facilities like Restaurant, Pub Etc on specific time limit. 
      Single lady visiting the rooms are strictly not allowed in the rooms and vice versa.</p>
    </div>
    <div className="col-5 ps-0" style={{backgroundColor:'#ddd', marginLeft:'60px'}} >
    <img src={smokingImg} class="rounded float-left" alt="smoking" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Smoking Policy</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Our rooms, corridors, restaurant and banquet halls are non-smoking 
      zone equipped with smoke detectors and water sprinklers. We do have a smoking area, please call reception @ 9.</p>
    </div>
    </div>
    <div className="row  " style={{marginLeft:'100px', marginTop:'45px'}} >
    <div className="col-5 ps-0 " style={{backgroundColor:'#ddd'}}   >
    <img src={paymentImg} class="rounded float-left" alt="payment" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Payment Options</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Payments can be made by a valid credit card/debit card or cash. We do not accept personal cheques.</p>
    </div>
    <div className="col-5 ps-0" style={{backgroundColor:'#ddd', marginLeft:'60px'}} >
    <img src={mailsImg} class="rounded float-left" alt="mails" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>0 Dialling Service</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Local STD/ISD calls can be made from your room.</p>
    </div>
    </div>
    <div className="row " style={{marginLeft:'100px', marginTop:'45px'}} >
    <div className="col-5 ps-0 " style={{backgroundColor:'#ddd'}}   >
    <img src={mailsImg} class="rounded float-left" alt="mails" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Calls and Mails</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Dail 9 for mail services and wake-up calls.</p>
    </div>
    <div className="col-5 ps-0" style={{backgroundColor:'#ddd', marginLeft:'60px'}} >
    <img src={pubImg} class="rounded float-left" alt="pub" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Hyyper - Permit Room</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>1st lower level (Basement- 1)- open from 11.00am to 11.00pm.</p>
    </div>
    </div>
    <div className="row " style={{marginLeft:'100px', marginTop:'45px'}} >
    <div className="col-5 ps-0 " style={{backgroundColor:'#ddd'}}   >
    <img src={empireImg} class="rounded float-left" alt="empire" style={{float:"left", marginRight:'25px', height:'200px', width:'200px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>The Empire Multi-Cuisine Restaurant At lobby level</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Breakfast  7:00 AM to 10:30 PM.<br/> 
                                                   Lunch       12:30 PM to 3:00 PM.<br/>
                                                   Dinner      7:30 PM to 11:00 PM.<br/>
                                                <samp style={{fontWeight:'bold'}}>  Rooftop Restaurant/Resto-bar (Opening Shortly)</samp></p>
    </div>
    <div className="col-5 ps-0" style={{backgroundColor:'#ddd', marginLeft:'60px'}} >
    <img src={firstaidImg} class="rounded float-left" alt="firstaid" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Hyyper - Permit Room</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>1st lower level (Basement- 1)- open from 11.00am to 11.00pm.</p>
    </div>
    </div>
    <div className="row " style={{marginLeft:'100px', marginTop:'45px'}} >
    <div className="col-5 ps-0 " style={{backgroundColor:'#ddd'}}   >
    <img src={checkoutImg} class="rounded float-left" alt="checkout" style={{float:"left", marginRight:'25px', height:'200px', width:'200px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Check-out Time</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Flexible.</p>
    </div>
    <div className="col-5 ps-0" style={{backgroundColor:'#ddd', marginLeft:'60px'}} >
    <img src={banquetsImg} class="rounded float-left" alt="banquets" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Banquet Halls</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}><span style={{fontWeight:'bold'}}>Senate Board Room</span><br/>
                                                   At lobby Level.<br/>
                                                   <span style={{fontWeight:'bold'}}>North court & South Court</span><br/>
                                                   2nd Lower level (Basement-2).</p>
    </div>
    </div>
    <div className="row " style={{marginLeft:'100px', marginTop:'45px'}} >
    <div className="col-5 ps-0 " style={{backgroundColor:'#ddd'}}   >
    <img src={roomsImg} class="rounded float-left" alt="rooms" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Room service</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>24hours. Dial 7.</p>
    </div>
    <div className="col-5 ps-0" style={{backgroundColor:'#ddd', marginLeft:'60px'}} >
    <img src={carrentalImg} class="rounded float-left" alt="carrental" style={{float:"left", marginRight:'25px'}} />
    <h1 style={{fontSize:'16px', marginTop:'20px', textAlign:"center", fontWeight:'bold' }}>Travel Desk</h1>
    <p style={{fontSize:'13px', marginTop:'20px'}}>Dial 9 to know about our travel desk.</p>
    </div>
    </div>

<div className="row container w-100 text-center" style={{ marginTop:'50px', marginLeft:'5%'}}>
    <h1 className="text-center">Location</h1>
    <p>Welcome to Coimbatore and kiscol Grand's Hotel we are honored to have you as our guest and it is our pleasure to serve you. This directory gives a listing of all the facilities and services available at Kiscol Grand's Hotel Kindly contact the duty Manager (Dial-6) for assistance. The Team of Kiscol Grand's Hotel Wishes you a pleasant stay.</p>

  

</div>


</section>


    </div>

    </section>
   <Footer />
  </section>

  )
}

export default Facilities

      

