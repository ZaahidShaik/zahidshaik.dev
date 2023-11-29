import React, { useEffect, useState } from 'react';
import '../styles/Navbarstyle.css';
import { navBarList } from '../models/models';
import Logo from './Logo';
import { HashLink } from 'react-router-hash-link';
// import { log } from 'console';


/**
### Nav Sections
 - Home (Landing/greeting/Intro)
 - Featured (Featured Projects section)
 - Projects (All other project section)
 - Work Expressing (Work experience Section)
 - Education (Education and Certifications)
 - Skills (Skills Sections)
**/
interface props {
    tabList: navBarList[]
}



const Navbar = ({ tabList}: props) => {

  let oldScroll = 0; 
  const [showNavbar, setShowNavBar] = useState(true);

  const handleScroll= () => {
    
    if(window.scrollY > oldScroll) {
      // for when scrolling down
      setShowNavBar(false);
    } else {
      // for when scrolling up
      setShowNavBar(true);
    }
    
    oldScroll = window.scrollY;

  }

  useEffect(() => { 

    window.addEventListener("scroll", handleScroll);     
    return () => 
    window.removeEventListener("scroll",handleScroll);    
    })


  return (
    <div className={showNavbar ? 'nav_container show-navbar' : 'nav_container hide-navbar' }>

     <Logo/> 
     <nav>
        <ul className='nav_list'> {showNavbar}
            {tabList.map((navItem:any, index:number) => {
              
               return <HashLink smooth className='nav_item' key={index} to={navItem.tabLink}>{navItem.tabName}</HashLink>
                // return <a className='nav_item' key={index} href={navItem.tabLink}>{navItem.tabName}</a>

                // return <a className='nav_item' key={index}>
                //        <Link to={navItem.tabLink}>{navItem.tabName}</Link></a>
            })}
        </ul>
     </nav>
     {/* <StateButton/> */}
    </div>
  )
}

export default Navbar