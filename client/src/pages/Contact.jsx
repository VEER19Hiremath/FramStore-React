import { useState } from "react";
//import { useAuth } from "../store/auth";
//this is add coourse page
import {  toast } from 'react-toastify';
export const Contact = () => {
  const [contact, setContact] = useState({
   veg_id:"",
   veg_name:"",
   price:""
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

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(contact);
    try {
      const response= await fetch( "http://localhost:5000/api/course",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(contact),

      });
      if(response.ok){
        setContact({veg_id:"",
        veg_name:"",
        price:""});
        const res_data= await response.json();
      console.log("response from server",res_data);
      toast.success("Vegetables added successfully");
      }
    } catch (error) {
      toast.error("Vegetables failed to add ");
    }
  };


  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading"><u>Vegetables</u></h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/veg.png" width="350px" height="300px" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="veg_id">Vegetables ID</label>
                <input
                  type="number"
                  name="veg_id"
                  id="veg_id"
                  autoComplete="off"
                  value={contact.veg_id}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="veg_name">name</label>
                <input
                  type="text"
                  name="veg_name"
                  id="veg_name"
                  autoComplete="off"
                  value={contact.veg_name}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
              <label htmlFor="price">price per kg</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete="off"
                  value={contact.price}
                  onChange={handleInput}
                  required
                />
                
              </div>

              <div>
                <button type="submit">Add Vegetables</button>
              </div>
            </form>
          </section>
        </div>
        </section>
        </>
  );
};
