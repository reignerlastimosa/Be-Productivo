import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBookReader } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { FaCat } from 'react-icons/fa';

import { AiFillCarryOut } from 'react-icons/ai';

import { BsFillSunFill } from 'react-icons/bs';
import { BsTable } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { useState } from 'react';




const Navbar = ({setDarkMode, toggle,setToggle }) => {
	


	
	
	return (
		<div className={`${!toggle ? 'navbar' : 'navbarToggle' }`}>
			<h1>BeProd</h1>
			<button className="toggle" onClick={()=> setToggle((currentToggle) => !currentToggle)}><BsFillArrowLeftCircleFill size={30} /></button>
			<button className="toggled" onClick={()=> setToggle((currentToggle) => !currentToggle)}><BsFillArrowRightCircleFill size={30} /></button>
			<ul className="ul-normal">
			<Link to="/"> <li> <FaBookReader/> Notes   </li></Link>
			<Link to="/todo"> <li> <AiFillCarryOut/>  Todo </li></Link>
			<Link to="/schedule"> <li> <BsTable/>  Schedule </li></Link>
			<Link to="/about">  <li><FaCat/>  About </li></Link>
			</ul>

			<ul className="ul-toggle">
				<Link to="/"> <li> <FaBookReader className="navbar-icon"/> </li></Link>
				<Link to="/todo"> <li> <AiFillCarryOut className="navbar-icon"/> </li></Link>
				<Link to="/schedule"> <li> <BsTable className="navbar-icon"/></li></Link>
				<Link to="/about">  <li><FaCat className="navbar-icon"/></li></Link>
			</ul>
			<button
				onClick={() =>
					setDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='moon'
			>

			<FaMoon size={20}/> 
				
			</button>

			<button
				onClick={() =>
					setDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='sun'
			>
			<BsFillSunFill size={20}/> 
				
			</button>

		</div>
	);
};

export default Navbar;