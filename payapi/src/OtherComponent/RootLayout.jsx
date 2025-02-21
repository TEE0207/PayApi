import {Outlet} from "react-router-dom"
import NavBar from "./NavBar"
import FooterComponent from "./FooterComponent"
export default function RootLayout(){

    return(
        <div>
            <div className="mainPageContainer">

                <div className="navBarContainer">
                    <NavBar />

                </div>

                <div className="outletContainer">
                    <Outlet />

                </div>

                <div className="footerContainer">
                    <FooterComponent />

                </div>
            </div>

        </div>
    )
}