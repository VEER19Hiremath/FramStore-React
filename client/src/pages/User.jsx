
import { NavLink,Outlet } from "react-router-dom";

export const User=()=>{
return (
    <>
    <header>
     <div className="container">
        <nav>
            <ul>
            <li>
             <NavLink to="/user/prefer">ORDER NOW</NavLink>
             </li>
                {/* <li> <NavLink to="/user/users">HISTORY</NavLink></li> */}
                <li><NavLink to="/user">HOME</NavLink></li>
            </ul>
        </nav>        
    </div> 
    </header>
    <Outlet/>
    <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
               
                <h1>Welcome to User Panel</h1>
                <p>
                
"Empower users with our innovative User Panel, a centralized platform for s
eamless interaction and control. At our organization, we offer a comprehensiv
e suite of user-friendly tools designed to enhance engagement, streamline processes
, and provide valuable insights. From account management to personalized services, 
our User Panel is meticulously crafted to meet the diverse needs of our users, ensuring 
a smooth and efficient experience for all."
                </p>
                <div className="btn btn-group">
                <NavLink to="/user/prefer">
                    <button className="btn">ORDER NOW</button>
                    </NavLink> 
                    {/* <NavLink to="/user/users">
                    <button className="btn secondary-btn">HISTORY</button>
                    </NavLink> */}
                </div>
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img
                  src="/images/user.png"
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