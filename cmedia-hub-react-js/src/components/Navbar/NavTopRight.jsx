import React from 'react';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/css/cmedia-hub.css'
import { NavLink } from 'react-router-dom';
import { useNavbar } from "./NavbarContext";
import HiddenNavTopRight from './HiddenNavTopRight';

const NavTopRight = () => {
  const { toggleHiddenNav, isHiddenNavVisible } = useNavbar();

  return ( 
    <div className="nav-right flex">
      <NavLink to="" className="nav-link" exact activeClassName="active">Home</NavLink>
      <NavLink to="upload" className="nav-link" exact activeClassName="active">Upload</NavLink>
      <NavLink to="stream" className="nav-link" exact activeClassName="active">Stream</NavLink>
      <NavLink to="explore" className="nav-link" exact activeClassName="active">Explore</NavLink>
      re
      <NavLink to="login" className="nav-link loginbtn" exact activeClassName="active">Login</NavLink>
      <NavLink to="Signup" className="nav-link signupbtn" exact activeClassName="active">Signup</NavLink>

      {/* <FontAwesomeIcon icon={faEllipsisVertical} className="more-nav-right icon" id="more-nav-right" onClick={toggleHiddenNav} onMouseOver={toggleHiddenNav} onMouseOut={toggleHiddenNav}/>
      { isHiddenNavVisible ? <HiddenNavTopRight /> : null} */}
    </div>
  );
}

export default NavTopRight;
