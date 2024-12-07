import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function RootLayout(){
    return (
        <div >
            <div id="header"><Navigation/></div>
            <div id="body"> <Outlet /></div>
           
        </div>
    );
}