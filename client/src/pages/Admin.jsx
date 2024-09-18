
import { NavLink,Outlet } from "react-router-dom";

export const Admin=()=>{
return (
    <>
    <header>
     <div className="container">
        <nav>
            <ul>
            <li>
             <NavLink to="/admin/faculty">ADD_FRUITS</NavLink>
             </li>
              <li>
                <NavLink to="/admin/course">ADD_VEGETABLES</NavLink>
                 </li>
                <li> <NavLink to="/admin/users">HISTORY</NavLink></li>
                <li><NavLink to="/admin">HOME</NavLink></li>
            </ul>
        </nav>        
    </div> 
    </header>
    <Outlet/>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
               
                <h1>Welcome to Farmer Panel</h1>
                <p>
                "Empower farmers with our advanced Farmer Panel, a centralized platform for seamless farm management and control. At our company, we provide a comprehensive suite of tools tailored to streamline agricultural operations, enhance productivity, and deliver invaluable insights.
                 From crop management to resource allocation, our Farmer Panel is
                  meticulously designed to meet the evolving needs of modern farming
                  , ensuring a robust and user-friendly experience for farmers."
                </p>
                <div className="btn btn-group">
                <NavLink to="/admin/faculty">
                    <button className="btn">ADD_FRUITS</button>
                    </NavLink> 
                    <NavLink to="/admin/course">
                    <button className="btn secondary-btn">ADD_VEGETABLES</button>
                    </NavLink>
                </div>
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img
                  src="/images/farmer.png"
                  alt="coding together"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </section>
        </main>
  
          
    </>
);
};