import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import gallerybannerImg from './Image/Photo/gallerybanner.jpg'
import threeImg from './Image/Photo/three.gif'
import aImg from './Image/Photo/a.jpg'
import bImg from './Image/Photo/b.jpg'
import banguetImg from './Image/Photo/banguet.jpg' 
import banguet1Img from './Image/Photo/banguet1.jpg'
import bar1Img from './Image/Photo/bar1.jpg'
import bar2Img from './Image/Photo/bar2.jpg'
import bar3Img from './Image/Photo/bar3.jpg'
import bar4Img from './Image/Photo/bar4.jpg'
import bar5Img from './Image/Photo/bar5.jpg'
import bar6Img from './Image/Photo/bar6.jpg'
import boordroomImg from './Image/Photo/boordroom.jpg'
import cImg from './Image/Photo/c.jpg'
import closeup6Img from './Image/Photo/closeup6-web.jpg'
import dImg from './Image/Photo/d.jpg'
import eImg from './Image/Photo/e.jpg'
import fImg from './Image/Photo/f.jpg'
import gImg from './Image/Photo/g.jpg'
import gymImg from './Image/Photo/gym.jpg'
import hImg from './Image/Photo/h.jpg'
import hallImg from './Image/Photo/hall.jpg'
import lobbyImg from './Image/Photo/lobby.jpg'
import new1Img from './Image/Photo/new1.jpg'
import new2Img from './Image/Photo/new2.jpg'
import new3Img from './Image/Photo/new3.jpg'
import new4Img from './Image/Photo/new4.jpg'
import new8Img from './Image/Photo/new8.jpg'
import new9Img from './Image/Photo/new9.jpg'
import new10Img from './Image/Photo/new10.jpg'
import new11Img from './Image/Photo/new11.jpg'
import new12Img from './Image/Photo/new12.jpg'
import new14Img from './Image/Photo/new14.jpg'
import new16Img from './Image/Photo/new16.jpg'
import new21Img from './Image/Photo/new21.jpg'
import new22Img from './Image/Photo/new22.jpg'
import new23Img from './Image/Photo/new23.jpg'
import new24Img from './Image/Photo/new24.jpg'
import new26Img from './Image/Photo/new26.jpg'
import receptionImg from './Image/Photo/reception.jpg'
import restorent1Img from './Image/Photo/restorent1.jpg'
import restorent2Img from './Image/Photo/restorent2.jpg'
import roomImg from './Image/Photo/room.jpg'
import room1Img from './Image/Photo/room1.jpg'
import room2Img from './Image/Photo/room2.jpg'
import Nav from '../Nav';
import Footer from '../footer';

function Photos() {
  return (
    <section className='photos'>
      <Nav />
      <div className='gallery'>
      <img src={gallerybannerImg} alt='gallerybanner' style={{width:'100%', height:'50%' }}/>
          <h1 style={{marginTop:'-20%', fontWeight:'bolder',  textAlign:'center', fontSize:'50px', color:'white'}}>PHOTO GALLERY</h1>
          </div>

          <div className='gallery1'>
            <h1 style={{marginTop:'18%', textAlign:'center', fontSize:'40px', marginBottom:'2%'}}>GALLERY</h1>
            <img src={threeImg} alt='three' style={{height:'10%', width:'10%', marginLeft:'45%'}}/>
          </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={aImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0"    >
    <img src={bImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}}  />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0"    >
    <img src={banguetImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}}  />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0"    >
    <img src={banguet1Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}}  />
    </div>
    </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={bar1Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={bar2Img} class="rounded " alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={bar3Img} class="rounded " alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={bar4Img} class="rounded " alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={bar5Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={bar6Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={boordroomImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={cImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={boordroomImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={dImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={eImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={fImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={gImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={gymImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={hImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={hallImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>


    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={lobbyImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new1Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new2Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new3Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new4Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new8Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new9Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new10Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new11Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new12Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new14Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new16Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new21Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new22Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new23Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new24Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={new26Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={receptionImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={restorent1Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={restorent2Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>

    <div className="row m-0 mt-5 p-2" >
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={roomImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={room1Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={room2Img} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    <div className="col-12 col-md-6 col-lg-3 ps-0 "    >
    <img src={aImg} class="rounded" alt="checkout" style={{width:'400px',height:'220px'}} />
    </div>
    </div>

    <Footer/>
   </section>
           
  )
}

export default Photos
