import React, { useState } from 'react'
import "./Home.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import logo from "../image/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import RoundaboutRightIcon from '@mui/icons-material/RoundaboutRight';
import CloseIcon from '@mui/icons-material/Close';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Home() {
  const [darkHeader, setDarkHeader] = useState(false)
  const[arrow,setArrow]=useState(false)
  const[menu,setmenu]=useState(false);
  function openMenu(e){
      e.preventDefault()
      setmenu(true)
  }
  function closeMenu(){
    setmenu(false)
  }
  
  window.onscroll = () => {
    setDarkHeader(window.scrollY > 450 ? true : false)
  }
  window.onscroll = () => {
    setArrow(window.scrollY > 50 ? true : false)
  }
 


  return (
    <>
      <div className='Container'>
        <div className="home">
          <header className={darkHeader ? "dark" : ""}>
            <img src={logo}></img>
            <a onClick={openMenu} href=""><MenuOutlinedIcon/></a>
          </header>
          <a className={arrow ?"arrow":""} href=''> <ArrowUpwardIcon/> </a>

          <div className='menu' style={{right:(menu===false)?"-100%":"0px"}}>
            <h2><span><img src={logo}></img></span><span onClick={closeMenu}><CloseIcon/></span></h2>
            <ul>
      
              <li><a href=''>Home<HomeIcon/></a></li>
              <li><a href=''>About<RoundaboutRightIcon/></a></li>
              <li><a href=''>ContactUs<PermContactCalendarIcon /></a></li>
              <li><a href=''>Testimonial</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home