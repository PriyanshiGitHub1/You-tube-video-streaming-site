import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./MenuBar.css";



const MenuBar = ({ menuBar }) => {

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
                </div>

                <div className='subscriptions-list'>
                    <h3>Subscriptions</h3>
                </div>
            </div>

        </>
    )
}

export default MenuBar