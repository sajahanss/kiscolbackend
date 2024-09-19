import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import banquetsImg from './Image/banquets/banquets1.jpg'
import banquets1Img from './Image/banquets/banquets1.jpg'
import banquets2Img from './Image/banquets/banquets2.jpg'
import banquets3Img from './Image/banquets/banquets3.jpg'
import banquets4Img from './Image/banquets/banquets4.jpg'
import banquets5Img from './Image/banquets/banquets5.jpg'
import Nav from '../Nav';
import Footer from '../footer';

function Banquets() {
  return (
    <div>
       <Nav />
        <section className='banquets'>
            
            <div className=''>
            <img src={banquetsImg} alt='banquest'style={{width:'100%', height:'400px'}}/>
            </div>

            <div className='hall mt-5 ps-5 pt-5 pe-5 ' style={{textAlign:'justify' }} >
                <h1 style={{textAlign:'center', fontSize:'40px', fontWeight:'bold', marginBottom:'2%' }}>BANQUET HALL IN COIMBATORE</h1>
                <p style={{fontSize:'12px', textAlign:'center', marginBottom:'2%', fontWeight:'bold'}}>The North Court and The South Court & Senate Board Room</p>
                <p>Many hotels in Coimbatore offer banquet halls and board room facilities. But not all banquet halls in Coimbatore are packed with all the facilities you will need to make your occasion unique - be it a proper stage setup, lighting and music, food and beverages, decorations customized to suit your occasion, and so on. Some other unique facilities that will enhance the experience of your guests include a valet to park vehicles, a bellboy to hold doors open, a concierge to carry luggage to your guests’ rooms, a waiter to ensure everyone’s orders are catered to, and so on.</p>          <p>If you are planning to throw a birthday party or a wedding reception, it makes sense that you will want personalized preparations. Or if you are looking for a banquet hall for your board meeting, business gathering, or any other formal occasion, you will require all the essential supplies to be prepared to make a good impression on your clients. Mainly, all this has to be within the budget of your preference - inclusive of all the specific requirements your guests might expect.</p><br/>
                <p>Whatever be the occasion, ensure that the party halls in Coimbatore that you choose have all the facilities you require and eager staff to prepare everything by the date of the occasion. You can personalize everything - from the decorations to the lighting and music. Ensure that the food selection is good and has a fine blend of vegetarian and non-vegetarian, so all your guests are satisfied with the menu. Finally, ensure that the distance of the hotel is close to an airport, railway station, or any other means of commuting to ensure that you can reduce travel time and expenses for your guests. All these aspects will guarantee a safe and comfortable stay for your guests and undoubtedly, a satisfactory trip for you as well!</p>
            </div>

            <div className='row m-0 ps-5 pe-5 pt-2 pb-3'>
            <div className='elegal col-6'>
            <Carousel data-bs-theme="dark" indicators={false}>
                <Carousel.Item>
                <img src={banquets1Img} className="d-block w-100" alt="Second slide"/>
         </Carousel.Item>
         <Carousel.Item>
                <img src={banquets2Img} className="d-block w-100" alt="Second slide"/>
         </Carousel.Item>
         <Carousel.Item>
                <img src={banquets3Img} className="d-block w-100" alt="Second slide"/>
         </Carousel.Item>
         <Carousel.Item>
                <img src={banquets4Img} className="d-block w-100" alt="Second slide"/>
         </Carousel.Item>
         <Carousel.Item>
                <img src={banquets5Img} className="d-block w-100" alt="Second slide"/>
         </Carousel.Item>

         </Carousel>
         </div>

      <div className='style1 col-6 mt-3' style={{ textAlign:'justify'}}>
        <h1 style={{fontSize:'20px', fontWeight:'bold'}}>Elegance & Style</h1>
        <p style={{marginRight:'5%', fontSize:'17px'}}>A beautiful and elegant banquet facility suitable for any special occasion! Consider Kiscol Grands for your next corporate meeting, business event, wedding reception, anniversary, reunion, birthday, or luncheon, consider Kiscol Grands for a professional meeting room.</p><br/>
        <p style={{marginRight:'5%'}} >Banquet Halls & Conference Rooms in Hotel Kiscol Grands is dedicated to providing our customers with a superior banquet experience. With a facility designed to accomodate up to 600 people, our elegant rooms are perfect for corporate meeting, business event, weddings, birthdays, anniversaries, and other special events.</p><br/>
        <p style={{marginRight:'5%'}} >We're also proud to have chefs who expertise in presenting creative, mouthwatering and delicious menu options. Our Banquet Manager can also assist you in choosing best menu plan that fits your budget needs. Call us today at our Hotline +91 422 4555999 Mobile: +91 8508664444 for a free consultation.</p><br/>

      </div>

      </div> 
        </section>
        <Footer/>
    </div>
  )
}

export default Banquets
