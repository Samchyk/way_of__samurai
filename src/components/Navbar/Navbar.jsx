import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeclassname={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeclassname={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeclassname={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeclassname={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeclassname={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
