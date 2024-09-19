  import React from "react";
  import 'bootstrap/dist/css/bootstrap.min.css';
 
  import Carousel from 'react-bootstrap/Carousel';
  import barImg from './Image/Dining/bar.jpg';
  import bar1Img from './Image/Dining/bar1.jpg'
  import bar2Img from './Image/Dining/bar2.jpg'
  import bar3Img from './Image/Dining/bar3.jpg'
  import dining1Img from './Image/Dining/dining1.jpg'
  import dining2Img from './Image/Dining/dining2.jpg'
  import dining3Img from './Image/Dining/dining3.jpg'
  import dining4Img from './Image/Dining/dining4.jpg'
  import dining5Img from './Image/Dining/dining5.jpg'
  import dining6Img from './Image/Dining/dining6.jpg'
  import dining7Img from './Image/Dining/dining7.jpg'
  import bar4Img from './Image/Dining/bar4.jpg'
import Nav from "../Nav";
import Footer from "../footer";



const Dining1 = () => {
  var controls=false;
    return (
      <section id="banner" style={{fontFamily:'Open Sans'}} >
        <Nav />
        <img src={dining2Img} alt='bar4'style={{width:'100%', height:'400px', imageRendering:'highquality'}}/>

        <div className="heading" style={{textAlign:"center", marginTop:'5%', fontSize:'40px', fontWeight:'bolder'}}>
          <h1>DINING & BAR</h1>
          <img src={bar4Img} alt='bar4'style={{width:'15%', height:'15%', marginTop:'10px', marginLeft:'42%' }}/>
        </div>

      <div className="row m-0">
      <div className="col-6">
      <Carousel data-bs-theme="dark" indicators={false} controls={controls}>
      <Carousel.Item>
         <img src={barImg} className="d-block w-100" alt="Second slide"/>
         </Carousel.Item>
         <Carousel.Item>
          <img src={bar1Img} className="d-block w-100" alt="Second slide"  />
        </Carousel.Item>
        <Carousel.Item>
       <img src={bar2Img} className="d-block w-100" alt="Second slide"  />
       </Carousel.Item>
        <Carousel.Item>
        <img src={bar3Img} className="d-block w-100" alt="Second slide"  />
        </Carousel.Item>
        <Carousel.Item>
       <img src={dining1Img} className="d-block w-100" alt="Second slide"  />
        </Carousel.Item>
        <Carousel.Item>
      <img src={dining2Img} className="d-block w-100" alt="Second slide"  />
        </Carousel.Item>
        <Carousel.Item>
      <img src={dining3Img} className="d-block w-100" alt="Second slide"  />
      </Carousel.Item>
        <Carousel.Item>
      <img src={dining4Img} className="d-block w-100" alt="Second slide"  />
      </Carousel.Item>
        <Carousel.Item>
      <img src={dining5Img} className="d-block w-100" alt="Second slide"  />
      </Carousel.Item>
        <Carousel.Item>
    <img src={dining6Img} className="d-block w-100" alt="Second slide"  />
    </Carousel.Item>
        <Carousel.Item>
    <img src={dining7Img} className="d-block w-100" alt="Second slide"  />
      </Carousel.Item>
    </Carousel>
    </div>
    
    <div className="col-6 pe-5">
      <div className="dinner">
      <p style={{fontSize:'18px'}} >A food connoisseur's delight, The Empire is a multi-cuisine restaurant,
         houses some of Coimbatore's best specialty restaurants and a bar that never fail to delight and have 
         attained an iconic place in the hearts of both the city dwellers and frequent travelers. The Empire is 
         the newest and finest multi-cuisine restaurant in coimbatore.</p>
      <h1 style={{fontWeight:'bolder', fontSize:'20px', marginTop:'15px'}}>The Empire</h1>
       <p style={{fontSize:'18px'}} >At the Empire restaurant where the Spice rule you can find various flavours and cuisines.</p>  
       <h1 style={{fontWeight:'bolder', fontSize:'20px', marginTop:'15px' }}>Speciality</h1> 
       <p style={{fontSize:'18px'}}>At the Empire restaurant where the Spice rule you can find various flavours and cuisines.</p>
       <h1 style={{fontWeight:'bolder', fontSize:'20px', marginTop:'15px' }}>Hyyper - Permit Room</h1>
       <p style={{fontSize:'18px'}} >At the Empire restaurant where the Spice rule you can find various flavours and cuisines.</p><br/>
       </div>

        <div className="content-margin">
       <p style={{fontSize:'18px', marginTop:'25px', textAlign:'center', textAlignLast:'justify'}}>The Kiscol Grands also has a best rooftop seating on the fourth floor. With the open air, as the aroma of the food cuts into the air, you, in the meantime get to enjoy the sights around you and the laidback ambience, you can definitely look forward to an evening of long conversations. The ambience is enhanced in its gorgeous setting. One of the best rooftop restaurants in coimbatore.</p>
       </div>
       </div>
       </div>

      <div className="bar p-5">
      <h1 style={{fontWeight:"bolder", textAlign:'center', marginTop:'15px', fontSize:'35px'}}>BEST RESTAURANTS IN COIMBATORE</h1>
      <p style={{marginTop:'20px', fontSize:'18px'}}><b>What’s your priority? Good food,</b> excellent ambiance, nice sightseeing, and tourism, or a quiet solo stay indoors? 
      Whatever be your preference, it helps to find a hotel with the <b>best restaurants in Coimbatore.</b>
       Especially if you are a foodie or are traveling with someone who loves food, it helps to look for
        good in-room dining facilities, all-inclusive in-house bars, 24-hour cafes, or multi-cuisine restaurants. 
        Bars are ideal while traveling with friends and in-room dining is ideal for families with children. 
        Some hotels also offer good buffet services during their lunch or special occasions.</p><br/>
      <p style={{fontSize:'18px'}}>The <b>best restaurants in Coimbatore </b>will have a good variety of food from around the globe in their 
        multi-cuisine menu. What sets them apart is their ability to serve food with authentic flavours from the part
         of the globe the dish is from. This way, if you wish to try a variety of dishes from different parts of 
         the world all at the same restaurant, you are covered! Furthermore, if you are traveling with a big group of
          people with different preferences and expectations, it’s a bonus to have so many options! On the whole, 
          if you are someone who wishes to try good cuisine at a reputed restaurant within your budget, pick a  
            <span style={{color:"blue"}}> hotel in coimbatore</span> with a good multi-cuisine restaurant!</p><br/>
      </div>
      
      <Footer />
      </section>


    )
}

export default Dining1
