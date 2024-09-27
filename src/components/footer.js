import React from 'react'
import './footer.css'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <> 

     <div className='row container bg-white text-center m-0 mt-5 mb-5'>
      <div className='col-12 col-lg-4'>
      <div className="address lh-base">
            	<i className="fa fa-mobile fs-1" aria-hidden="true"></i>
                <h2>Phone</h2>
                <p>Hotline : +91 422 4555999.</p>
                <p>Mob: +91 8508664444.</p>
                <p><i class="fa fa-whatsapp fs-3" aria-hidden="true" style={{fontSize:'17px'}}></i> +91 9965544463</p>
            </div>
       
      </div>
      <div className='col-12 col-lg-4'>
          <div className="address lh-base">
            	<i className="fa fa-map-o fs-1" aria-hidden="true"></i>
                <h2>Address</h2>
                <p># 245A, Dr Rajendra Prasad Road <br/>Tatabad, Gandipuram, Coimbatore,<br/>Tamil Nadu 641012.</p>
            </div>
          
      </div>
      <div className='col-12 col-lg-4'>

      <div className="address lh-base">
            	<i className="fa fa-inbox fs-1" aria-hidden="true"></i>
                <h2>E-mail</h2>
                <p>info@kiscolgrands.com</p>
                <p>reservation@kiscolgrands.com</p>
            </div>
      </div>
     </div>


    <div className='container-fluid footer d-flex justify-center'>
      <div className='container-fluid row text-justify p-5'>
      <div className='col-12 col-md-5  mt-5 me-5'>
        <h5>About</h5>
        <p>Kiscol Grands - Best Luxury Business Class Hotels in Coimbatore near airport,railway station, Bus stand - is the newest emerging bouquet of quality Top four star hotels, offering the top notch and unparalleled hospitality at chic and contemporary styled hotels in the most desirable locations in Coimbatore. Property is uniquely styled to bring to the umbrella a unique dynamism and vibrance in its eclectic offering of accommodation options. Each offering presents an experience of refinement, elegance and style, crafted with expertise and sustained with attention and care. Indulge in an experience of joy and fulfillment that is - Coimbatore!.</p>
      </div>
      <div className='col-12 col-md-3 mt-5'>
      <h5>News Letter</h5>
      <p>Subcribe to us!</p>
         <input type='text' className='emailinp' placeholder='E-mail ID'/>
          <button type='button' className='button'>E-mail</button>
          <div className='socialicons pt-3'>
            <h5>Get In Touch</h5>
          <SocialIcon url="https://linkedin.com" bgColor="darkblue" style={{width: '30px', margin:"3px"}} />
          <SocialIcon url="https://facebook.com" bgColor="darkblue" style={{width: '30px', margin:"3px"}} />
          <SocialIcon url="https://x.com" bgColor="darkblue" style={{width: '30px', margin:"3px"}} />
          <SocialIcon url="https://instagram.com" bgColor="darkblue" style={{width: '30px', margin:"3px"}} />
          <SocialIcon url="https://whatsapp.com" bgColor="darkblue" style={{width: '30px', margin:"3px"}} />
          </div>
      </div>
      <div className='col-12 col-md-2 mt-5 ms-5'>
        <h5>Hot Links</h5>
        <ul>
          <li>
            <Link to='/'><span>&#8594;</span>Home</Link>
          </li>
          <li>
            <Link to='https://www.kiscolgrands.com/blog/'><span>&#8594;</span>Blog</Link>
          </li>
          <li>
            <Link to='/'><span>&#8594;</span>The Brand</Link>
          </li>
          <li>
            <Link to='/reservation'><span>&#8594;</span>Reservations</Link>
          </li>
          <li>
            <Link to='/'><span>&#8594;</span>Corporate</Link>
          </li>
          <li>
            <Link to='/dining'><span>&#8594;</span>Dining & Bar</Link>
          </li>
          <li>
            <Link to='/banquets'><span>&#8594;</span>Banquets</Link>
          </li>
          <li>
            <Link to='/'><span>&#8594;</span>Contact Us</Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
    <div className='container-fluid bg-dark d-flex justify-center text-white'>
      <p className='p-5'>Copyright © 2016 KISCOL Grands. All rights reserved. Reservations</p>
    </div>
    </>
  )
}

export default Footer
