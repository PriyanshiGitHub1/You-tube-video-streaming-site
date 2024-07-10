import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./MenuBar.css";
import { IoIosMenu } from "react-icons/io";
import { IconContext } from 'react-icons';
import { API_KEY } from '../../Data';



const MenuBar = ({ menuBar, category, setCategory }) => {

    return (
        <>
            <div className={menuBar ? "sidebar" : "no-sidebar"}>
                <div className='list-menu-bar'>
                    <nav className='menu-navbar'>
                    <NavLink to = "/" className='menu-links'> Home</NavLink>
                    <NavLink to = "/categories/24" className='menu-links'>Entertainment</NavLink>
                    <NavLink to = "/categories/10" className='menu-links'>Music</NavLink>
                    <NavLink to = "/categories/25" className='menu-links'>News and Politics</NavLink>
                    <NavLink to = "/categories/28" className='menu-links'>Science and Technology</NavLink>
                    </nav>
                    {/* <div className='menu-links'> <NavLink to = "/" > Home</NavLink></div>
                    <div className='menu-links' ><NavLink to = "/categories/24"> Entertainment</NavLink></div>
                    <div className='menu-links' > <NavLink to = "/categories/10"> Music</NavLink></div>
                    <div className='menu-links' > <NavLink to = "/categories/25"> News and Politics</NavLink></div>
                    <div className='menu-links' > <NavLink to = "/categories/28"> Science and Technology</NavLink></div>
                    <div className='menu-links' ><NavLink to = "/history"> History</NavLink></div><hr /> */}
                </div>

                <div className='subscriptions-list'>
                    <h3>Subscriptions</h3>
                </div>
            </div>

        </>
    )
}

export default MenuBar