import React from 'react'
import Nav from '../Nav'
import Footer from '../footer'

const Enquiry = () => {
  return (
    <div className='bg-white'>
        <Nav/>
        <h1 className='fs-1 text-center m-5'>Enquiry</h1>
       
     <div className='d-flex align-center m-2 p-5'>
       <div className="contact-address me-5">
            	<h1>Get in Touch</h1>
                <div style={{height:'220px', marginTop:'38px',width:'585px',maxWidth:'100%',listStyle:'none', transition: 'none',overflow:'hidden'}}><div id="my-map-canvas" style={{height:'100%', width:'100%', maxWidth:'100%'}}><iframe style={{height:'100%',width:'100%',border:0}} frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2648224158443!2d76.95444411411825!3d11.018746657688755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85856b4145137%3A0x83e1ccb93f2bf7bb!2sHotel%20Kiscol%20Grands!5e0!3m2!1sen!2sin!4v1639812515129!5m2!1sen!2sin"></iframe></div><a className="embed-map-code" rel="nofollow" href="http://www.szablonypremium.pl" id="get-map-data">szablonypremium.pl</a></div>
                <h1 style={{margin: "20px 0"}}>Follow Us</h1>
                <ul className='d-flex fs-2 text-center' >
                   <li><a target="_blank" href="https://www.facebook.com/hotelkiscolgrands/" title="facebook"><i className="fa fa-facebook p-2"></i></a></li>
                   <li><a target="_blank" href="https://twitter.com/Kiscol_Grands" title="twitter"><i className="fa fa-twitter p-2"></i></a></li>
                   <li><a target="_blank" href="https://in.linkedin.com/in/kiscol-grands-coimbatore-002a2412a" title="linkedin"><i className="fa fa-linkedin p-2"></i></a></li> 
                   <li><a target="_blank" href="https://plus.google.com/u/7/" title="googleplus"><i className="fa fa-google-plus p-2"></i></a></li>
                   <li><a target="_blank" href="https://api.whatsapp.com/send?phone=918508644486&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20CES" title="Whatsapp number"><i className="fa fa-whatsapp p-2"></i></a></li>
                   <li><a target="_blank" href="https://www.instagram.com/hotelkiscolgrands/" title="Instagram"><i className="fa fa-instagram p-2"></i></a></li>
                   <li><a target="_blank" href="https://in.pinterest.com/hotelkiscolgrands/_created/" title="Pininterest"><i className="fa fa-pinterest p-2"></i></a></li>
                  <li><a  href="#" title="googleplus"><i className="fa fa-book p-2"></i></a></li> 
               </ul>
            </div>

            <div className='d-flex align-center justify-center ms-3'>
                
                <form className='w-100'>
                              <div className="radius mb-3">
                                  <input type="text" name="name" placeholder="Your Name" className="form-control" fdprocessedid="swv9e"/>
                              </div>
                              <div className="radius mb-3">
                                  <input type="text" name="email" placeholder="Email Address" className="form-control" fdprocessedid="84btqr"/>
                              </div>
                              <textarea name="description" id="description" cols="1" rows="3" placeholder="Message" className="form-control mb-3"></textarea>
                              <input type="submit" name="submit" className="btn btn-warning" value="send message" fdprocessedid="01xby5"/>
                          </form>
                 </div>
     </div>
     <Footer/>
    </div>
  )
}

export default Enquiry
