import { React } from "react";
import { NavLink , Outlet } from "react-router-dom";
import { Header } from "./partials/Header.comp";
import { Footer } from "./partials/Footer.comp";
export const DefaultLayout = ({children}) => {
    return (
     
            <div className="defaults-layout">

                <header className="header mb-3">
                    <Header/>
                    
                </header>

                <main className="main">
                    {children}
                    <Outlet/>
                </main>

                <footer className="footer">
                    <Footer/>
                </footer>

            </div>
        
    )
}