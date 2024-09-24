import * as React from 'react';
import { useEffect } from 'react';
import './booking.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import suproom from '../Image/booking/superiorroom.jpg'
import delux from '../Image/booking/deluxroom.jpg'
import junior from '../Image/booking/junior.jpg'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import { getUserData } from '../services/Storage';
import Nav from '../Nav';
import { useNavigate } from 'react-router-dom';
import cpntusjpg from '../images/homepage/recep.webp'
import Getroomdata from './getroomdata';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const stylesuccess = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  bgcolor: 'green',
  color:'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const Booking = () => {
  const [userid,setuserid]=useState(getUserData())
  const [search,setsearch]=useState(true);
  const [avalablebar,setavailablebar]=useState(false);
  const [addressbar,setaddressbar]=useState(false)
  const [booking,setbooking]=useState(false)
  const [country, setCountry] = useState('');
  const [openbarright1,setopenbarright1]=useState(false)
  const [openbarright2,setopenbarright2]=useState(false)
  const [openbarright3,setopenbarright3]=useState(false)
  const [guestname,setguestname]=useState('')
  const [guestemail,setguestemail]=useState('')
  const [phonenumbet,setphonenumber]=useState('')
  const [address,setaddress]=useState('')
  const [city,setcity]=useState('')
  const [pcode,setpcode]=useState('')
  const [date, setDate] = useState(new Date());
  const [todate, settodate] = useState(new Date());
  const [roombar,setroombar]=useState(false)
  const [adult,setadult]=useState(1)
  const [Child,setchild]=useState(1)
  const [totroom,settotroom]=useState(1)
  const [roomtype,setroomtype]=useState()
  const [cost, setcost]=useState(0)
  const [gtot,setgtot]=useState(0)
  const [region, setRegion] = useState('');
  const [cstatus,setcstatus]=useState('pending')
  
  var amount=0;
  
  const[payment_id,setpayment_id]=useState();
  const[book_id,setbook_id]=useState();
  
  const [aadhar_no,setaadhar_no]=useState('xxxxxxxxxxxx');
  const navigate=useNavigate()

 
  var date1, date2;

  //define two date object variables with dates inside it
  date1 = date;
  date2 = todate;

  
  
  var time_difference = date2.getTime() - date1.getTime();
  var rounnight = time_difference / (1000 * 60 * 60 * 24);
  var no_night=Math.round(rounnight)
  var cacl=((((cost)*12)/100) + (cost))*(totroom)*(no_night);
  var gst=((cost)*(totroom)*(no_night))*12/100
   amount=cacl;

   const [sroom,setsroom]=useState(10)
   const [droom,setdroom]=useState(10)
   const [jroom,setjroom]=useState(10)
   const datacolloction=Getroomdata()
   useEffect(()=>{
    datacolloction.roomavailablity.map((m)=>{
      console.log(m.broomtype)
       if(m.broomtype === 'Superior Double'){
         setsroom(sroom-1)
       }
       if(m.broomtype === 'Delux Room'){
         setdroom(droom-1)
       }
       if(m.broomtype === 'Junior Room'){
         setjroom(jroom-1)
       }
      
     
     })
  
   },[])

  
    


   
const clearall=()=>{
  setsearch(true);
  setavailablebar(false);
  setaddressbar(false)
  setbooking(false)
  setCountry('');
  setopenbarright1(false)
  setopenbarright2(false)
  setopenbarright3(false)
  setguestname('')
  setguestemail('')
  setphonenumber('')
  setaddress('')
  setcity('')
  setpcode('')
  setDate(new Date());
  settodate(new Date());
 setroombar(false)
  setadult(1)
  setchild(1)
  settotroom(1)
  setroomtype('')
   setcost(0)
  setgtot(0)
  setRegion('');
  setbook_id('');
  setpayment_id('');

}

if(userid==="" || userid===undefined || userid===null){
  navigate('/login')
}

const openbar1=()=>{
  if (openbarright1===true){
    setopenbarright1(false)
  }else if(openbarright1===false){
    setopenbarright1(true)
  }
}

const openbar2=()=>{
  if (openbarright2===true){
    setopenbarright2(false)
  }else if(openbarright2===false){
    setopenbarright2(true)
  }
}

const openbar3=()=>{
  if (openbarright3===true){
    setopenbarright3(false)
  }else if(openbarright3===false){
    setopenbarright3(true)
  }
}

  const roombaropen=(e)=>{
    setroombar(true)
    settotroom(e)
  }      
  
   
   const handleopenbar=()=>{
     
   
           
      if(date.getDate()===todate.getDate() && date.getMonth()===todate.getMonth() && date.getFullYear()===todate.getFullYear()){
        alert('can not accept same date Checkout for booking')
        document.getElementById('date2').focus();
      }else {
    
    if (search===true){
     setsearch(false)
     setavailablebar(true)
    }else if(avalablebar===true){
      setaddressbar(true)
      setavailablebar(false)
    }else if(addressbar===true){
      setgtot(cacl)
      
       setaddressbar(false)
       setbooking(true)
    }
  }
   }

   const handleditbar1=()=>{
    setsearch(true)
    setavailablebar(false)
    setaddressbar(false)
    setbooking(false)
   }
   const handleditbar2=()=>{
    setsearch(false)
    setavailablebar(true)
    setaddressbar(false)
    setbooking(false)
   }
   const handleditbar3=()=>{
    setsearch(false)
    setavailablebar(false)
    setaddressbar(true)
    setbooking(false)
   }


   
   const [open,setopen]=useState(false)
   const handleopen=()=>setopen(true)
   const handleClose=()=>setopen(false)

   const [open1,setopen1]=useState(false)
   const handleopen1=()=>setopen1(true)
   const handleClose1=()=>setopen1(false)

   const [open2,setopen2]=useState(false)
   const handleopen2=()=>setopen2(true)
   const handleClose2=()=>setopen2(false)
    
   const [bookingsuccess,setbookingsuccess]=useState(false)
   const bookingsuccessopen=()=>setbookingsuccess(true)
   const bookingsuccessclose=()=>{setbookingsuccess(false);clearall(); navigate('/profile')}

  

   const superiorroom=()=>{
    setroomtype('Superior Double');
    setcost(3300)
    handleopenbar()
   }
   
   const deluxroom=()=>{
    setroomtype('Delux Room');
    setcost(3500)
    handleopenbar();
   }

   const juniorroom=()=>{
    setroomtype('Junior Room');
    setcost(5500)
    handleopenbar()
   }


   
   
    
 


   const handleCheckout = async () => {

    if(amount === "" || amount===0){
    alert("Please Check Your Booking Detais // Minimum Booking 1 night // We don't allow hourly booking");
    }else{
      var options = {
        key: "rzp_test_nvMrDRWRJ7Gyu0",
        key_secret:"xSeeqqahOgekbMXPM6phC6wa",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler:async function(response){
          var pay_id=response.razorpay_payment_id;
          var b_id="kiscol" + Math.floor(1000+Math.random()*9000)
          setpayment_id(pay_id);
          setbook_id(b_id);
           var data={userid,guestname,guestemail,phonenumbet,address,adult,Child,totroom,roomtype,date,todate,cost,amount,payment_id:pay_id,aadhar_no,book_id:b_id,no_night,gtot,cstatus}
          await axios.post('https://hotel-management-system-backend-audc.onrender.com/booking',data)
           .then(res=>{console.log(res);
            bookingsuccessopen();
           })
           .catch(err=>console.log(err))
        },
        prefill: {
          name:{guestname},
          email:{guestemail},
          contact:{phonenumbet}
        },
        notes:{
          address:"Razorpay Corporate office-SAJAHAN"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
}    
}

const selectoption=[];
for(var i=1;i<11;i++){
  selectoption.push({'value': i, 'label' : i});
}


  return (

    <div className='bgbody container-fluid'>
      <Nav/>
      <div className='topper'>
        <h1 className='fs-1 text-center'> Hotel Kiscol Grands</h1>
        <p className='fs-5 text-center'>245A, Dr Rajendra Prasad Road Tatabad, Gandipuram, Coimbatore Tamil Nadu 641012</p>
      </div>
      <div className='row ms-5 mt-3'>
       <div className='col-12 col-md-8'>
        <div className='bgcolor size'>
          <h1 className='ms-3'>Search For Availability</h1>
          { !search &&
           <button type='button' onClick={handleditbar1}><i style={{fontSize:'18px'}} className="fa">&#xf040;</i> Edit</button>  }
        </div>
        {search &&
          <div className='acordionbody row'>
            <div className='col-12 col-md-6 col-lg-4 checkin'>
              <label className='p-2'>Check In.</label><br/>
              {/* <input type='date' className='border p-2 me-2' id='cin'   onChange={(e)=>{setcin(e.target.value)}}></input> */}
              <DatePicker className='border p-2 me-2' dateFormat="dd-MM-YYYY hh:mm aa" selected={date} minDate={new Date()} onChange={(date) => setDate(date)} />
             
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <label className='p-2'>Check Out.</label><br/>
              {/* <input type='date' className='border p-2 me-2' onChange={(e)=>{setcout(e.target.value)}}></input> */}
              <DatePicker  className='border p-2 me-2' id='date2' dateFormat="dd-MM-YYYY hh:mm aa" selected={todate} minDate={new Date()} onChange={(date) => settodate(date)} />
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <label className='p-2'>Rooms</label><br/>
              <select className="border p-2 me-2" onChange={(e)=>{roombaropen(e.target.value)}}>
            <option value="0">--select Rooms-- </option>
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
            </div>
            {roombar && 
             <div className='row'>
              <div className='col-12 col-md-6'>
               <label className='p-2'>Adults</label>
               <select className='border p-2 me-2 mt-3 selectwidth' onChange={(e)=>{setadult(e.target.value)}}>
                 {selectoption.map((optval)=>(<option value={optval.value}>{optval.label}</option>))}
               </select>
               </div>
               <div className='col-12 col-md-6'>
               <label className='p-2'>Child</label>
               <select className='border p-2 me-2 mt-3 selectwidth' onChange={(e)=>(setchild(e.target.value))}>
                 {selectoption.map((optval)=>(<option value={optval.value}>{optval.label}</option>))}
               </select>
               </div>
             </div>
            }
            <div className='mt-5'>
            <button type='button' className='bgcolor btnsearch' onClick={handleopenbar}>Search</button>
            </div>
          </div>
          
          }
        <div className='bgcolor size'>
        <h1 className='ms-3'>Available Rooms</h1>  
        { !avalablebar&&!search &&
           <button type='button' onClick={handleditbar2}><i style={{fontSize:'18px'}} className="fa">&#xf040;</i> Edit</button>  }

        </div>
        { avalablebar &&
        <div className='acordionbody'>
             <div className='border ac-card p-1 row bdw mb-3'>
              <div className='col-3 p-0'>
                  <img src={suproom} className='imgsize' alt='superiorroom'/>
              </div>
              <div className='col-6'>
                  <h1>Superior Double <sup className='text-danger'>(only {sroom} room(s) available)</sup></h1>
                 <div className='d-flex mt-2'>
                  <FaUsers /> Maxmum Adults-3 | <FaChild /> Maxmum Child-1</div>
                  <p className='w-75 mt-2 ms-2'>INCLUSIONS: Breakfast, 24 hrs wifi Facilities Complimentary 
                    newspaper Air conditioning Blackout drapes/ curtains Climate control Direct-dial...
                    <a className='w-75' style={{cursor:'pointer',color:'blue'}} onClick={handleopen}>Read More</a> </p>
                   <Modal open={open}
                          onClose={handleClose}>
                    <Box sx={style}>
                      <div style={{float:'right'}} onClick={handleClose}><IoMdCloseCircleOutline /></div>
                    
                     <h1>Superior Double </h1>
                     <br></br>
                     <hr></hr>
                     <br></br>
                     <center><img src={suproom} className='imgsizebig' alt='superiorroom'/></center><br></br>
                     <h1>Room Description</h1>
                     <p>
                     INCLUSIONS: Breakfast, 24 hrs wifi Facilities Complimentary newspaper Air conditioning Blackout drapes/ curtains Climate control Direct-dial phone Coffee/ tea maker Wake-up calls Daily housekeeping Complimentary toiletries Hair dryer Bathroom phone Extra towel/ bedding in room Handheld showerhead Electronic/ magnetic keys In-room safe Rollaway/ extra beds available Complimentary bottled water High Speed WiFi Airport Transfers Dry cleaning/ laundry service
                     </p>
                     <h1>Room Amenities</h1>
                     <p>
                     Air Conditioner, Fan, Cable Channels, Telephone, TV, Cupboard, Table-Chair, Bed Sheets, Bed Covers, Pillows, Refrigerator, Mineral water bottle, Tea/ Coffee maker, Charging Points, Private Bathroom, Shower, Toilet, Towels, Free Toiletries
                     </p>
                    </Box>
                   </Modal>
              </div>
              <div className='col-2'>
             <div className='d-flex'> <FaRupeeSign /> <h1>3300/-</h1></div>
             <p>Avg. Per Room/Night</p>
              </div>
              <div className='acordionfooter'>
              <h1>Rooms with Breakfast</h1>
              <div className='d-flex ali'> <FaRupeeSign /> <h1>3300/-<span style={{color:'yellow'}}>Price</span></h1></div>
              <button className='btn btn-success p-1 ps-3 pe-3 text-white mb-3' onClick={superiorroom} >Select</button>
             </div>

             </div>
            {/* row2 */}
            
            <div className='border ac-card p-1 row bdw mb-3'>
              <div className='col-3 p-0'>
                  <img src={delux} className='imgsize' alt='superiorroom'/>
              </div>
              <div className='col-6'>
                  <h1>Deluxe Double Room <sup className='text-danger'>(only {droom} room(s) available)</sup></h1>
                 <div className='d-flex mt-2'>
                  <FaUsers /> Maxmum Adults-3 | <FaChild /> Maxmum Child-1</div>
                  <p className='w-75 mt-2 ms-2'>Facilities Complimentary newspaper Air conditioning Blackout drapes/ curtains Climate control Direct-dial phone Coffee/ tea maker Wake-up calls Daily... 
                    <a className='w-75' style={{cursor:'pointer',color:'blue'}} onClick={handleopen1}>Read More</a> </p>
                   <Modal open={open1}
                          onClose={handleClose1}>
                    <Box sx={style}>
                      <div style={{float:'right'}} onClick={handleClose1}><IoMdCloseCircleOutline /></div>
                    
                     <h1>Deluxe Double Room</h1>
                     <br></br>
                     <hr></hr>
                     <br></br>
                     <center><img src={delux} className='imgsizebig' alt='superiorroom'/></center><br></br>
                     <h1>Room Description</h1>
                     <p>
                     Facilities Complimentary newspaper Air conditioning Blackout drapes/ curtains Climate control Direct-dial phone Coffee/ tea maker Wake-up calls Daily housekeeping Complimentary toiletries Hair dryer Bathroom phone Extra towel/ bedding in room Handheld showerhead Electronic/ magnetic keys In-room safe Rollaway/ extra beds available Complimentary bottled water High Speed WiFi Airport Transfers Dry cleaning/ laundry service
                     </p>
                     <h1>Room Amenities</h1>
                     <p>
                     Air Conditioner, Fan, Cable Channels, Telephone, TV, Cupboard, Table-Chair, Bed Sheets, Bed Covers, Pillows, Pillow Covers, Refrigerator, Mineral water bottle, Tea/ Coffee maker, Charging Points, Toilet, Towels
                     </p>
                    </Box>
                   </Modal>
              </div>
              <div className='col-2'>
             <div className='d-flex'> <FaRupeeSign /> <h1>3500/-</h1></div>
             <p>Avg. Per Room/Night</p>
              </div>
              <div className='acordionfooter'>
              <h1>Rooms with Breakfast</h1>
              <div className='d-flex'> <FaRupeeSign /> <h1>3500/-<span style={{color:'yellow'}}>Price</span></h1></div>
              <button className='btn btn-success p-1 ps-3 pe-3 mb-3 text-white' onClick={deluxroom}>Select</button>
             </div>

             </div>

             {/* row3 */}
             <div className='border ac-card p-1 row bdw '>
              <div className='col-3 p-0'>
                  <img src={junior} className='imgsize' alt='superiorroom'/>
              </div>
              <div className='col-6'>
                  <h1>Junior Suite Room <sup className='text-danger'>(only {jroom} room(s) available)</sup></h1>
                 <div className='d-flex mt-2'>
                  <FaUsers /> Maxmum Adults-3 | <FaChild /> Maxmum Child-1</div>
                  <p className='w-75 mt-2 ms-2'>24 hrs wifi, Fruit Basket on Arrival Facilities Complimentary newspaper Air conditioning Blackout drapes/ curtains Climate control Direct-dial...
                    <a className='w-75' style={{cursor:'pointer',color:'blue'}} onClick={handleopen2}>Read More</a> </p>
                   <Modal open={open2}
                          onClose={handleClose2}>
                    <Box sx={style}>
                      <div style={{float:'right'}} onClick={handleClose2}><IoMdCloseCircleOutline /></div>
                    
                     <h1>Junior Suite Room </h1>
                     <br></br>
                     <hr></hr>
                     <br></br>
                     <center><img src={junior} className='imgsizebig' alt='superiorroom'/></center><br></br>
                     <h1>Room Description</h1>
                     <p>24 hrs wifi, Fruit Basket on Arrival Facilities Complimentary newspaper Air conditioning Blackout drapes/ curtains Climate control Direct-dial phone Coffee/ tea maker Wake-up calls Daily housekeeping Complimentary toiletries Hair dryer Bathroom phone Extra towel/ bedding in room Handheld showerhead Electronic/ magnetic keys In-room safe Rollaway/ extra beds available Complimentary bottled water High Speed WiFi Airport Transfers Dry cleaning/ laundry service
                    </p>
                     <h1>Room Amenities</h1>
                     <p>
                     Air Conditioner, Fan, Cable Channels, Telephone, TV, Cupboard, Bed Sheets, Bed Covers, Pillows, Refrigerator, Mineral water bottle, Tea/ Coffee maker, Charging Points, Toilet, Towels, Table-Chair, Pillow Covers, Chairs/ Sofas
                     </p>
                    </Box>
                   </Modal>
              </div>
              <div className='col-2'>
             <div className='d-flex'> <FaRupeeSign /> <h1>5500/-</h1></div>
             <p>Avg. Per Room/Night</p>
              </div>
              <div className='acordionfooter'>
              <h1>Rooms with Breakfast</h1>
              <div className='d-flex'> <FaRupeeSign /> <h1>5500/-<span style={{color:'yellow'}}>Price</span></h1></div>
              <button className='btn btn-success p-1 ps-3 pe-3 mb-3 text-white' onClick={juniorroom}>Select</button>
             </div>

             </div>
        </div>
        }


        <div className='bgcolor size'>
        <h1 className='ms-3'>Your Details</h1>  
        { !search && !avalablebar && !addressbar &&
           <button type='button' onClick={handleditbar3}><i style={{fontSize:'18px'}} className="fa">&#xf040;</i> Edit</button>  }
        
        </div>
        { addressbar && 
        <div className='acordionbody'>
          <form>
              <div className='row mb-2'>
                  <div className='col'>
                    <label className='ms-2'>Guest Name</label>
                    <input type='text' className='form-control mt-1' value={guestname} onChange={(e)=>setguestname(e.target.value)} placeholder='Guest name'/>
                  </div>  
                  <div className='col'>
                    <label className='ms-2'>E-Mail ID</label>
                    <input type='email' className='form-control mt-1' value={guestemail} onChange={(e)=>setguestemail(e.target.value)} placeholder='Enter Email-id'/>
                  </div>  

              </div>

              <div className='row mb-2'>
                  <div className='col'>
                    <label className='ms-2'>Contact Number</label>
                    <input type='number' className='form-control mt-1' value={phonenumbet} onChange={(e)=>setphonenumber(e.target.value)} placeholder='Mobile Number'/>
                  </div>  
                  <div className='col'>
                    <label className='ms-2'>Address</label>
                    <input type='text' className='form-control mt-1' value={address} onChange={(e)=>setaddress(e.target.value)} placeholder='Enter Address'/>
                  </div>  

              </div>
              <div className='row mb-2'>
                  <div className='col'>
                    <label className='ms-2'>Country</label>
                    <CountryDropdown
                        value={country}
                        onChange={(val) => setCountry(val)} className='border mt-1'  />
                  </div>  
                  <div className='col'>
                    <label className='ms-2'>State</label>
                    <RegionDropdown
                      country={country}
                      value={region}
                      onChange={(val) => setRegion(val)} className='border mt-1' />
                  </div>  

              </div>

              <div className='row mb-2'>
                  <div className='col'>
                    <label className='ms-2'>City</label>
                    <input type='text' className='form-control mt-1' value={city} onChange={(e)=>setcity(e.target.value)}  placeholder='Enter Your City'/>
                  </div>  
                  <div className='col'>
                    <label className='ms-2'>Postal Code</label>
                    <input type='text' className='form-control mt-1' value={pcode} onChange={(e)=>setpcode(e.target.value)} placeholder='Enter Postal Code'/>
                  </div>  

              </div>
              <div className=''>
                    <label className='ms-2'>Aadhar No</label>
                    <input type='text' className='form-control mt-1' value={aadhar_no} onChange={(e)=>setaadhar_no(e.target.value)} placeholder='Enter Aadhar no'/>
              </div>  
              <button type='button' className='bgcolor p-1 ps-2 pe-2 rounded mt-3' onClick={handleopenbar}> Confirm</button>

          </form>
        </div>

        }
       
        <div className='bgcolor size'>
        <h1 className='ms-3'>Review Your Booking</h1>  
        </div>
        { booking && 
      <div className='acordionbody'>
        <h1 className='text-center m-1 mt-3'>Customer Details</h1>
        <div>
         
            <table className='t1'>
              <tr>
                <td>Name </td> <td>{guestname}</td>
                <td>E-mail </td> <td>{guestemail}</td>
              </tr>
        
              <tr>
                  <td>Mobile </td> <td>{phonenumbet} </td>
                  <td>Address </td> <td>{address + " " + city + " " + region + " " + country} </td>
              </tr>
           </table>
        </div>
        <div>
        <h1 className='text-center m-1 mt-3'>Booking details</h1>
            <table className='t1'>
              <tr>
                <td>Checkin Date </td> <td> {date1.toISOString().split('T')[0]}</td>
                <td>Checkout Date </td> <td>{date2.toISOString().split('T')[0]} </td>
              </tr>
        
              <tr>
                  <td>No.Rooms </td> <td>{totroom} </td>
                  <td>MealPlan </td> <td>Room with Breakfast (CP) </td>
              </tr>
           </table>
        </div>

        <div>
          <br></br>
          <table className='t2'>
             <tr>
              <th>Room</th>
              <th>Guest</th>
              <th>Child</th>
              <th>Nights</th>
              <th>Extrabed</th>
              <th>Extrabed Cost</th>
              <th>Room Cost</th>
             </tr>
            <tr>
              <td>{totroom + " " + roomtype}</td>
              <td>{adult}</td>
              <td>{Child}</td>
              <td>{no_night} Night(s)</td>
              <td>--</td>
              <td>--</td>
              <td className='text-right'>Rs.{(cost * totroom * no_night)}.00</td>
            </tr>

          </table>
           <h1 className='text-center m-1 mt-3'>Summary</h1>
          <table className='t3'>
            
            <tr><td></td><td className='text-right pe-5'>Sub Total	</td> <td className='text-right'>{(cost * totroom * no_night)}.00	</td></tr>
            <tr><td></td><td className='text-right pe-5'>Total GST(12%)	</td> <td className='text-right'>{gst}.00	</td></tr>
            <tr><th></th><th className='text-right pe-5'>Grand Total	</th> <th className='text-right'>{gtot}.00	</th></tr>
          </table>
        </div>
         <p className='text-right pe-2'><button type='button' onClick={handleCheckout} className='bgcolor p-1 ps-2 pe-2 rounded mt-3'> Payment</button></p>
      </div>
}
</div>

<div className='col-12 col-md-4'>
<div className='bgcolor size w-50' onClick={openbar1}>
  <h1 className='h6 pe-none'>Hotel Details</h1>
  { !openbarright1 ? <i style={{float:'right',marginTop:'5px'}} className="fa fa-angle-double-down"></i> :
<i style={{float:'right',marginTop:'5px'}} className="fa fa-angle-double-up" ></i>
}
</div>
   {openbarright1 && <div className='bg-white w-50 w-md-50 p-1 ease' style={{marginLeft:'9px'}}>
    <p style={{marginBottom:'5px',paddingLeft:'15px'}}><b>Hotel Name:</b> <br/><span>Hotel Kiscol Grands</span></p>
    <p style={{marginBottom:'5px',paddingLeft:'15px'}}><b>Email:</b> <br/><span>reservation@kiscolgrands.com</span></p>
    <p style={{marginBottom:'5px',paddingLeft:'15px'}}><b>Mobile:</b> <br/><span>+91 8148616691</span></p>
    <p style={{marginBottom:'5px',paddingLeft:'15px'}}><b>Phone:</b> <br/><span>+91- 91 422 4555999</span></p>
    <p style={{marginBottom:'5px',paddingLeft:'15px'}}><b>Hotel Address:</b> <br/><span className='w-50'>245A, Dr Rajendra Prasad Road Tatabad, Gandipuram, Coimbatore Tamil Nadu 641012</span></p>
    </div>
  }

<div className='bgcolor size w-50 w-md-50 ' onClick={openbar2}>
<h1 className='h6 pe-none'>Cancellation Policy</h1>
  { !openbarright2 ? <i style={{float:'right',marginTop:'5px'}} className="fa fa-angle-double-down"></i> :
<i style={{float:'right',marginTop:'5px'}} className="fa fa-angle-double-up"></i>
}
</div>

{openbarright2 && <div className='bg-white w-50 w-md-50 p-1' style={{marginLeft:'9px'}}>
      <ul style={{listStyleType:'disc', fontSize:'0.9em'}} className='ps-4'>
        <li>
           If cancelled before 3 days of Check In date refundable amount would Be 100% of total billing.
        </li>
        <li>
            If cancelled before 2 days of Check In date refundable amount would Be 50% of total billing.
        </li>
        <li>
           If cancelled before 1 days of Check In date booking will Be Non Refundable.
        </li>
      </ul>
      
      </div>
  }


<div className='bgcolor size w-50 w-lg-50 ' onClick={openbar3}>
<h1 className='h6 pe-none'>Checkin/Checkout Policy</h1>
  { !openbarright3 ? <i style={{float:'right',marginTop:'5px'}} className="fa fa-angle-double-down"></i> :
<i style={{float:'right',marginTop:'5px'}} className="fa fa-angle-double-up"></i>
}
</div>

{ openbarright3 && <div className='bg-white w-50 w-md-50 p-1' style={{marginLeft:'9px',fontSize:'0.9em'}}>
	<p style={{marginBottom:'5px',paddingLeft:'12px'}}><b>Check In Time :</b>12:00 PM</p>
	<p style={{marginBottom:'5px',paddingLeft:'12px'}}><b>Check Out Time :</b>11:45 AM</p>

	<p style={{marginBottom:'5px',paddingLeft:'12px'}}><b>Early Check In Allowed :</b> Subject To Availability</p>
	<p style={{marginBottom:'5px',paddingLeft:'12px'}}><b>Late Check Out Allowed :</b> Subject To Availability</p>
</div>
}
</div>


</div>

<Modal open={bookingsuccess}
        onClose={bookingsuccessclose}>
<Box sx={stylesuccess}>
<div style={{float:'right',fontSize:'1rem'}} onClick={bookingsuccessclose}><IoMdCloseCircleOutline style={{fontSize:'2rem',width:'25px',height:'25px'}} /></div>
<div>
 <p className='h2'> Hi! {guestname}, Your Booking Confirmed </p>
 <p> Your Booking Id:  <span style={{color:'blue'}}> {book_id}</span></p>
 <p> Your Payment Id:<span style={{color:'blue'}}> {payment_id} </span> </p>
 <p>Confirmation Details Will send to your Email and Mobile No</p>
</div>
</Box>
</Modal>

</div>
  )
}

export default Booking
