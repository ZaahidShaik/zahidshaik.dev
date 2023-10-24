import React, { useEffect, useState } from 'react';
import '../styles/Navbarstyle.css';
import { navBarList } from '../models/models';
import Logo from './Logo';
// import { log } from 'console';


/**
### Nav Sections
 - Home (Landing/greeting/Intro)
 - Featured (Featured Projects section)
 - Projects (All other project section)
 - Work Expreseinec (Work experience Section)
 - Education (Educationa and Certifications)
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
    }, [])


  return (
    <div className={showNavbar ? 'nav_container show-navbar' : 'nav_container hide-navbar' }>

     <Logo/> 
     <nav>
        <ul className='nav_list'> {showNavbar}
            {tabList.map((navItem:any, index:number) => {
                return <a className='nav_item' key={index} href={navItem.tabLink}>{navItem.tabName}</a>
            })}
        </ul>
     </nav>
     {/* <StateButton/> */}
    </div>
  )
}

export default Navbar