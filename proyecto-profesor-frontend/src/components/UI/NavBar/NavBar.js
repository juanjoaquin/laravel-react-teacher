import React, { useState } from "react";

import "./style.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const closeNav = () => {
        setNavOpen(!navOpen);
    }

    const handleNav = () => {
        setNavOpen(false)
    }

    return (
        <nav className="dvs-header">
            <ul className="dvs-header__main">
                <li className="dvs-header__logo">
                </li>
                <li className={`dvs-header__menuItems ${navOpen ? "is-open" : ""}`}>
                    <ul>
                        <li><Link to="/inicio" onClick={handleNav}> Inicio</Link></li>
                        <li><Link to="/alumnos" onClick={handleNav}> Alumnos</Link></li>
                        <li><Link to="/grades" onClick={handleNav}> Notas </Link></li>
                        <li><Link to="/asistencias" onClick={handleNav}> Asistencias</Link></li>
                    </ul>
                </li>
                <li className={`dvs-header__desktop`}>
                    <ul>
                        <li><Link to="/" > INICIO</Link></li>
                        <li><Link to="/alumnos"> ALUMNOS</Link></li>
                        <li><Link to="/grades" > NOTAS </Link></li>
                        <li><Link to="/asistencias" > ASISTENCIAS</Link></li>
                    </ul>
                </li>
                <li className="dvs-header__trigger" onClick={closeNav}>
                    <span className="menu-display material-symbols-outlined">
                        menu
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar