import React, { useEffect, useState } from 'react'
import './home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import borimg from './images/border.png'
import room5 from './images/homepage/Room5.jpg'
import room2 from './images/homepage/Room2.jpg'
import room3 from './images/homepage/Room3.jpg'
import room4 from './images/homepage/Room4.jpg'
import imgrecep from './images/reception.avif'
import rooms from './images/homepage/Rooms.jpg'
import banquets from './images/homepage/Banquets.jpg'
import facility from './images/homepage/facility.jpg'
import reservation from './images/homepage/reservation.jpg'
import contact from './images/homepage/contactus.jpg'
import 'react-slideshow-image/dist/styles.css'
import { isAuthenticated } from "./services/Auth"
import Nav from './Nav';
import Footer from './footer';
import Accordions from './Accordion';

 

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor:'black' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor:'black'}}
      onClick={onClick}
    />
  );
}
    


const srcloc="https://poetic-douhua-022f4b.netlify.app/"


export default function Home() {


 

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };

  
  const [date, setDate] = useState(new Date());
  const [todate, settodate] = useState(new Date());
  

  return (
    <>
    <Nav/>
    <div id='ifram'>
      
   
          <iframe  src={srcloc} title='kiscol' className='fram'  style={{pointerEvents:'auto',width:'99vw',border:'none',height:'500px'}}>
          </iframe>
             
         <div className='imgcontainer'> 
              <h1 className='text-center mt-20 fs-1 m-2'>Favourite Rooms</h1>
              <img src={borimg} alt=''/>
              <p className='fs-4 m-2'>welcome to Kiscol Grands Coimbatore</p>
         </div>
         <div className='container-fluid'>

               <div className='row'>
                    <div className="card col-12 col-md-6 col-lg-3 border-0">
                            <img className='card-img-top'  src={room5} alt='crd img cap' />
                            
                            <div className="card-body">
                                   <h5 class="card-title text-3xl font-bold">Superior Rooms</h5>
                                  <p className="card-text">Breakfast, Dinner or Lunch 24 hrs wifi, Fruit Basket & Cookie platter on arrival. Automated Massage Chair.</p>
                                  <a href="/booking" class="btn btn-primary">Book Now</a>
                            </div>
                    </div>

                
               
                    <div className="card col-12 col-md-6 col-lg-3 border-0">
                            <img className='card-img-top' src={room2} alt='crd img cap' />
                            <div className="card-body">
                                  <h5 class="card-title text-3xl font-bold">Deluxe Rooms</h5>
                                  <p className="card-text">Breakfast, Dinner or Lunch 24 hrs wifi, Fruit Basket & Cookie platter on arrival. Automated Massage Chair.</p>
                                  <a href="/booking" class="btn btn-primary">Book Now</a>       
                            </div>
                    </div>

              
                
                    <div className="card col-12 col-md-6 col-lg-3 border-0">
                            <img className='card-img-top' src={room3} alt='crd img cap' />
                            <div className="card-body">
                                  <h5 class="card-title text-3xl font-bold">Junior Suite Rooms</h5>
                                  <p className="card-text">Breakfast, Dinner or Lunch 24 hrs wifi, Fruit Basket & Cookie platter on arrival. Automated Massage Chair.</p>
                                  <a href="/booking" class="btn btn-primary">Book Now</a>       
                            </div>
                    </div>

               
                
                    <div className="card col-12 col-md-6 col-lg-3 border-0">
                            <img className='card-img-top' src={room4} alt='crd img cap' />
                            <div className="card-body">
                                  <h5 class="card-title text-3xl font-bold">Executive Suite Rooms</h5>
                                  <p className="card-text">Breakfast, Dinner or Lunch 24 hrs wifi, Fruit Basket & Cookie platter on arrival. Automated Massage Chair.</p>
                                  <a href="/booking" class="btn btn-primary">Book Now</a>       
                            </div>
                    </div>

                </div>

              </div>

             <center> <img src={imgrecep} alt='img-recep' className='img-fluid ' /></center>

              <div className='imgcontainer'> 
                    <h1 className='text-center text-3xl font-bold	mt-20 fs-1 m-2'>Special Services</h1>
                    <img src={borimg} alt=''/>
                    <p className='w-50 text-center'>Kiscol Grands - Best conference halls,banquet hallsparty halls, seminar halls, meeting halls in Coimbatore. We are one of the most emerging bouquet of four star luxury hotels in Coimbatore, offering the top notch and unparalleled hospitality at chic and contemporary styled hotels in the most desirable locations in Coimbatore.</p>
              </div>

               
              
              <div className="slide">

                <Slider {...settings}>
                 
                    <div className='card'>
                      <img className='card-img-top' src={rooms} alt='rooms' />
                          <div class="card-body text-center">
                             <h2 class="card-title">Rooms</h2>
                              <p class="card-text">Our rooms are designed to offer the perfect blend of comfort.</p>
                              <a href="/rooms" class="btn btn-primary">More Details</a>
                        </div>
                    </div>

                    <div className='card'>
                      <img className='card-img-top' src={banquets} alt='rooms' />
                      <div class="card-body text-center">
                             <h2 class="card-title">Banquets</h2>
                              <p class="card-text">Elegant banquet facility suitable for any occasion.</p>
                              <a href="/rooms" class="btn btn-primary">More Details</a>
                        </div>
                    </div>
                 

                  
                    <div className='card'>
                      <img className='card-img-top' src={facility} alt='rooms' />
                      <div class="card-body text-center">
                             <h2 class="card-title">Facilities</h2>
                              <p class="card-text">We will take care of everything for you.</p>
                              <a href="/rooms" class="btn btn-primary">More Details</a>
                        </div>
                    </div>


                    <div className='card'>
                      <img className='card-img-top' src={reservation} alt='rooms' />
                      <div class="card-body text-center">
                             <h2 class="card-title">Reservation</h2>
                              <p class="card-text">24 Hours check in and check out.</p>
                              <a href="/rooms" class="btn btn-primary">More Details</a>
                        </div>
                    </div>
               
                
             
               
                    <div className='card'>
                      <img className='card-img-top' src={contact} alt='rooms' />
                      <div class="card-body text-center">
                             <h2 class="card-title">Contact Us</h2>
                              <p class="card-text">We will take care of everything for you.</p>
                              <a href="/rooms" class="btn btn-primary">More Details</a>
                        </div>
                    </div>
                    
               

            </Slider>
            </div>
           

       <div className='container-fluid text-center'>
        <h1 className='fs-1 m-2'>Book Your stay at the Best hotels in coimbatore</h1>
       <center> <img src={borimg} alt=''/></center>
        <p>It isn’t every day that you plan an elaborate trip to Kovai - be it a quick solo trip to enjoy the weekend, pilgrimage with family, or long-overdue friends outing. So, it makes sense that when you do plan your trip, you will expect everything to be perfect and make your stay memorable.With so many star hotels in the market and such a wide array of services they offer, how do you choose good hotels in Coimbatore? Read on to know-how!...
        </p>
        <a href="/booking" class="btn btn-success">More Details</a>
       </div>   

      
       <div className='container-fluid text-center'>
        <h1 className='fs-1 m-2'>FAQ - All you need to know about luxury hotels in Coimbatore</h1>
       <center> <img src={borimg} alt=''/></center>
        
       <center> <div className='p-3 m-2 wdt'>
         <Accordions/>
         </div></center>
                  
       </div>   
      
       
       
         
    </div>
    <br/>
    <Footer/>
    </>
  )
}
