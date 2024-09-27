import React, { useEffect } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import cmplogo from './logo.png'
import { useState } from 'react'
import {getUserName,getprofilepic,getUseremail} from './services/Storage'
import { Link } from 'react-router-dom';
import { logout,isAuthenticated } from './services/Auth'



const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Reservations', href: '/reservation', current: false },
    { name: 'Facilities', href: '/Facilities', current: false },
    { name: 'Rooms', href: '/rooms', current: false },
    { name: 'Dining & Bar', href: '/dining', current: false},
    { name: 'Banquets', href: '/banquets', current: false},
    { name: 'Photo & Virtual Tour', href: '/photos', current: false},
    { name: 'Contact-Us', href: '/about', current: false},
    { name: 'Enquiry', href: '/enquiry', current: false}
  ]

  

  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
function Nav() {
 
   const [btnstate,setbtnstate]=useState(false)
   const [propic,setpropic]=useState('');
   const ppic=getprofilepic();

    useEffect(()=>{
      setpropic(ppic);
    },[ppic]);

   function handleclick(item){
     navigation.map((navig)=>{
      navig.current=false;
     })
      item.current=true
     setbtnstate(btnstate =>!btnstate)
     

   }
   
   let active=" outline-none ring-2 ring-white ring-offset-2 ring-offset-gray-800"
   

   const logoutUser = ()=>{
    logout();
    window.location.reload(false);
}

  return (
    <div>
       
       <Link className='bkbutton' to='/booking'>
        Click Here to Book Now
     </Link>
      <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 md:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Left Menu Bar */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

            {/* CompanyLogo */}
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src={cmplogo}
                className="h-8 w-auto"
              />
            </div>
          
           {/* Menu Items*/}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                     onClick={(e)=>handleclick(item)}
                    aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      `rounded-md px-3 py-2 text-sm font-medium `, 
                    )}
                    
                    // className={({isActive})=>{
                    //   return 'rounded-md px-3 py-2 text-sm font-medium no-underline' + 
                    //   (!isActive ? 'text-gray-300 hover:bg-gray-700 hover:text-white' :'bg-gray-900 text-white' )
                    // }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Menu Bar */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button> */}

             {getUserName() && (<p className='text-white' style={{fontSize:'10px'}}>Hi! {getUserName()}</p>)}

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src= {propic || "https://tse4.mm.bing.net/th?id=OIP.4HFNPpAomjyQFfNm6XLZkAHaJ4&pid=Api&P=0&h=180"}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
              {isAuthenticated()?<MenuItem>
              {getUseremail() === 'admin@admin.in' ?
                <Link to="/Adminkiscol" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                Administration
              </Link>: 
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
               </Link>
                }
                 
                </MenuItem> :null}
                {/* {isAuthenticated()? <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>:null} */}
                {isAuthenticated()? <MenuItem>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100" onClick={logoutUser} style={{cursor:"pointer"}}>
                    Sign out
                  </Link>
                </MenuItem>:null}
                {!isAuthenticated()?<MenuItem>
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Login
                  </Link>
                </MenuItem>:null}
                {!isAuthenticated()?<MenuItem>
                  <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Register
                  </Link>
                </MenuItem>:null}
                
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="Link"
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </div>
  )
}


export default Nav

