import React from "react";
import {Link, NavLink} from 'react-router-dom'
function Footer(){
    return(
        <footer className="flex justify-between mt-7 lg:w-3/4 lg:mx-auto mb-9">
            <Link to="/">
            <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className="h-12 lg:h-16"/>
            </Link>
            <div className="flex lg:gap-16 gap-7">
            <div className="flex flex-col lg:gap-6 gap-4">
                <p className="font-bold">RESOURCES</p>
                <NavLink to="/" className="hover:text-orange-600 hover:underline">
                    Home
                </NavLink>
                <NavLink to="/about" className="hover:text-orange-600 hover:underline">
                    About
                </NavLink>
            </div>
            <div className="flex flex-col lg:gap-6 gap-3">
                <p className="font-bold">FOLLOW US</p>
                <NavLink to="/github" className="hover:text-orange-600 hover:underline">
                    Github
                </NavLink>
                <Link to="https://discord.com/channels/@me" target="_blank" className="hover:text-orange-600 hover:underline">
                    Discord
                </Link>
            </div>
            <div className="flex flex-col lg:gap-6 gap-4">
                <p className="font-bold" >LEGAL</p>
                <NavLink to="/">
                    Privacy Policy 
                </NavLink>
                <NavLink to="/">
                    Terms & Conditions
                </NavLink>
            </div>
            </div>
        </footer>
    )
}

export default Footer