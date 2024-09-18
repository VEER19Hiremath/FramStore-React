import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar=()=>{
    const { isLoggedIn } = useAuth();
    console.log("login or not ", isLoggedIn);
return(
    <>
    <header>
    <div className="container">
        <div className="logo-brand">
            <NavLink to="/">Farm-Store-Management</NavLink>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/about">ABOUT</NavLink>
                </li> */}
                
                { isLoggedIn ? (
                     <>
                     <li>
                         <NavLink to="/admin">FARMER</NavLink>
                     </li>
                     <li>
                         <NavLink to="/user">USER</NavLink>
                     </li>
                     <li>
                       <NavLink to="/logout">LOGOUT</NavLink>
                </li>
                     
                 </> 
                ):(
                    <>
                     <li>
                    <NavLink to="/register">REGISTER</NavLink>
                    </li>
                    <li>
                    <NavLink to="/login">LOGIN</NavLink>
                    </li>
                    </>
                )
                }
                
               
            </ul>
        </nav>
    </div>
    </header>
    </>
);
};