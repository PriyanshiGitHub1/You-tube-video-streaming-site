import React from 'react';
import { IoIosMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";

const NavBar = ({ setMenuBar, setSearchTerm }) => {
  return (
    <nav className='navbar'>
      <div className="sidebar-icon">
        <IoIosMenu size={30} onClick={() => setMenuBar(prev => !prev)} />
      </div>

      <div className="searchbar">
        <input type="text" placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
        <div className='searchbar-icon'>
          <FaSearch />
        </div>
      </div>

      <div className='upload-notification-profile'>
        <RiVideoAddLine size={30} style={{ margin: "5px 10px 0px 0px" }} />
        <IoIosNotifications size={30} style={{ margin: "5px 10px 0px 10px" }} />
        <CgProfile size={30} style={{ margin: "5px 0px 0px 10px" }} />
      </div>
    </nav>
  );
};

export default NavBar;