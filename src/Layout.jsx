import React from "react";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import {Outlet} from "react-router-dom"
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
//header and footer are same so we keep it and outlet has all the other components between it.
//we are dynamically passing it -- Outlet uses layout as a base which is same for the header n footer.
export default Layout