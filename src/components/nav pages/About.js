import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImg from './Image/Aboutus/bg.jpg'
import alloyImg from './Image/Aboutus/alloy.png'
import LogoImg from './Image/Aboutus/Logo.png'
import rollingImg from './Image/Aboutus/rolling.png'
import texttilelogoImg from './Image/Aboutus/texttilelogo.png'
import TMTLogoImg from './Image/Aboutus/TMTLogo.png'
import windfarmlogoImg from './Image/Aboutus/windfarmlogo.jpg'
import Nav from '../Nav';
import Footer from '../footer';



function Aboutus() {
  return (
    
      <section className='about'>
        <Nav/>
        <div className=''>
      <img src={bgImg} alt='bg'style={{width:'100%', height:'420px'}}/>
      <p style={{ fontWeight:'bolder', fontSize:'50px', color:'white', position:'absolute',zIndex:999, top:80, left:250}}>ABOUT | BEST START HOTELS IN COIMBATORE<br/>
      <h1 className='text-center'> Welcome to Kiscol Group of Companies !!! </h1></p>
      </div>
      
      <div className='group' style={{ textAlign:'center', fontWeight:'bold'}}>
      <h1>GROPU OF COMPANIES</h1>
     </div>

      <section className='m-5'>
      <div className="row m-0 justify-content-between"  style={{marginTop:'5%'}} >
    <div className="col-12 col-md-4 p-2 m-2 " style={{ border:'1px solid black',height:'300px', width:'400px'}}>
    <img src={TMTLogoImg} class="rounded" alt="chekin" style={{ height:'200px', width:'200px'}}  />
    <h1 style={{fontSize:'13px', fontWeight:'bold', marginTop:'5%', textAlign:'center',  paddingLeft:'5%'}}>KANNAPPAN IRON & STEEL COMPANY PVT LTD  (KIRCOL TMT) </h1>
    </div>
    <div className="col-12 col-md-4 p-2 m-2 " style={{ border:'1px solid black',height:'300px', width:'400px'}}>
    <img src={LogoImg} class="rounded" alt="chekin" style={{ height:'200px', width:'300px'}} /> 
    <h1 style={{fontSize:'13px', fontWeight:'bold', marginTop:'5%', textAlign:'center',  paddingLeft:'5%'}}> KISCOL GRANDSS </h1>
    </div>
    <div className="col-12 col-md-4 p-2 m-2 " style={{ border:'1px solid black',height:'300px', width:'400px'}}>
    <img src={texttilelogoImg} class="rounded" alt="chekin" style={{ height:'200px', width:'300px'}} />
    <h1 style={{fontSize:'13px', fontWeight:'bold', marginTop:'10%', textAlign:'center',  paddingLeft:'5%'}}> KANNAPPAN TEXTILE PRIVATE LIMITED </h1>
    </div>
    </div>

    <div className="row m-0 justify-content-between"  style={{marginTop:'5%'}} >
    <div className="col-12 col-md-4 p-2 m-2 " style={{ border:'1px solid black',height:'300px', width:'400px'}}>
    <img src={rollingImg} class="rounded" alt="chekin" style={{ height:'200px', width:'300px'}} />
    <h1 style={{fontSize:'13px', fontWeight:'bold',  textAlign:'center',  paddingLeft:'5%'}}> THIRUMALAISWAMY ROLLING MILL </h1>
    </div>
    <div className="col-12 col-md-4 p-2 m-2 " style={{ border:'1px solid black',height:'300px', width:'400px'}}>
    <img src={alloyImg} class="rounded" alt="chekin" style={{ height:'200px', width:'300px'}} /> 
    <h1 style={{fontSize:'13px', fontWeight:'bold', marginTop:'5%', textAlign:'center',  paddingLeft:'5%'}}> KANNAPPAN ALLOY AND STEEL COMPANY PRIVATE LIMITED </h1>
    </div>
    <div className="col-12 col-md-4 p-2 m-2 " style={{ border:'1px solid black',height:'300px', width:'400px'}}>
    <img src={windfarmlogoImg} class="rounded" alt="chekin" style={{ height:'200px', width:'300px'}} />
    <h1 style={{fontSize:'13px', fontWeight:'bold', marginTop:'10%', textAlign:'center',  paddingLeft:'5%'}}> KANNAPPAN WIND FARMS </h1>
    </div>
    </div>
</section>

<Footer/>

      </section>
  )
}

export default Aboutus
