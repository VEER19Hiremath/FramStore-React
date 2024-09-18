import { useState } from "react";
//import { useAuth } from "../store/auth";
//this is add coourse page
import {  toast } from 'react-toastify';
export const Preferences = () => {
  const [faculty, setFaculty] = useState({
   user_id:"",
   user_name:"",
   product:"",
   quantity:"",
  });
  
// const {user} =useAuth();
// const [userData, setUserData] = useState(true);
//  if (userData && user) {
//     setData({
//       username: user.username,
//       email: user.email,
//       message: "",
//     });
//     setUserData(false);
//   }
  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFaculty({
      ...faculty,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(faculty);
    try {
      const response= await fetch( "http://localhost:5000/api/user/prefer",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(faculty),

      });
      if(response.ok){
        setFaculty({ user_id:"",
        user_name:"",
        product:"",
        quantity:""});
        const res_data= await response.json();
      console.log("response from server",res_data);
      toast.success("order placed successfully");
      }
    } catch (error) {
      toast.error("order failed ");
    }
  };


  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading"><u>ORDER</u></h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/prefer.png" width="350px" height="500px" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="user_id">user_id</label>
                <input
                  type="number"
                  name="user_id"
                  id="user_id"
                  autoComplete="off"
                  value={faculty.user_id}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="user_name">user_name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  autoComplete="off"
                  value={faculty.user_name}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="product">product</label>
                <input
                  type="text"
                  name="product"
                  id="product"
                  autoComplete="off"
                  value={faculty.product}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="quantity">quantity</label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  autoComplete="off"
                  value={faculty.quantity}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <button type="submit">Order</button>
              </div>
            </form>
          </section>
        </div>
        </section>
        </>
  );
};
